import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    containerRef.current.appendChild(renderer.domElement);

    // Particles Data
    const particleCount = 120;
    const particlesData = [];
    const positions = new Float32Array(particleCount * 3);

    const r = 130; // sphere/box space bounds
    const rHalf = r / 2;

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * r - rHalf;
      const y = Math.random() * r - rHalf;
      const z = Math.random() * r - rHalf;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      particlesData.push({
        velocity: new THREE.Vector3(
          (-1 + Math.random() * 2) * 0.08,
          (-1 + Math.random() * 2) * 0.08,
          (-1 + Math.random() * 2) * 0.08
        ),
      });
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(positions, 3)
    );

    // Texture for smooth round glowing points programmatically
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(0, 255, 102, 1)');
      gradient.addColorStop(0.2, 'rgba(0, 255, 102, 0.7)');
      gradient.addColorStop(0.5, 'rgba(0, 255, 102, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 255, 102, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(canvas);
    };

    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x00ff66,
      size: 4.5,
      transparent: true,
      blending: THREE.AdditiveBlending,
      map: createCircleTexture(),
      depthWrite: false,
    });

    const pointCloud = new THREE.Points(particlesGeometry, pointsMaterial);
    scene.add(pointCloud);

    // Lines geometry setup
    const maxConnections = 300;
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(linePositions, 3)
    );
    linesGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(lineColors, 3)
    );

    const linesMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      linewidth: 1,
      depthWrite: false,
    });

    const lineSegments = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(lineSegments);

    // Mouse tracker
    let mouse = new THREE.Vector2(0, 0);
    let targetMouse = new THREE.Vector2(0, 0);

    const onMouseMove = (e) => {
      targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // Resize
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId;
    const limit = 20; // proximity limit threshold for connections

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Lerp mouse coordinates smoothly
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Rotate camera gently
      camera.position.x += (mouse.x * 25 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 20 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      const positions = pointCloud.geometry.attributes.position.array;
      let vertexIdx = 0;
      let colorIdx = 0;
      let numConnected = 0;

      // Update positions
      for (let i = 0; i < particleCount; i++) {
        const xIdx = i * 3;
        const yIdx = i * 3 + 1;
        const zIdx = i * 3 + 2;

        positions[xIdx] += particlesData[i].velocity.x;
        positions[yIdx] += particlesData[i].velocity.y;
        positions[zIdx] += particlesData[i].velocity.z;

        // Swirling force towards cursor
        const pVec = new THREE.Vector3(positions[xIdx], positions[yIdx], positions[zIdx]);
        const mWorld = new THREE.Vector3(mouse.x * 50, mouse.y * 35, 0);
        const distToMouse = pVec.distanceTo(mWorld);

        if (distToMouse < 40) {
          const force = (40 - distToMouse) * 0.0012;
          const dir = new THREE.Vector3().subVectors(mWorld, pVec).normalize();
          const swirl = new THREE.Vector3(-dir.y, dir.x, 0).multiplyScalar(force * 0.9);
          particlesData[i].velocity.add(dir.multiplyScalar(force * 0.25)).add(swirl);
        }

        // Clamp speed
        particlesData[i].velocity.clampLength(0.02, 0.25);

        // Boundary wrap
        if (positions[xIdx] < -rHalf || positions[xIdx] > rHalf) particlesData[i].velocity.x *= -1;
        if (positions[yIdx] < -rHalf || positions[yIdx] > rHalf) particlesData[i].velocity.y *= -1;
        if (positions[zIdx] < -rHalf || positions[zIdx] > rHalf) particlesData[i].velocity.z *= -1;
      }

      // Find connections
      for (let i = 0; i < particleCount; i++) {
        const x1 = positions[i * 3];
        const y1 = positions[i * 3 + 1];
        const z1 = positions[i * 3 + 2];

        for (let j = i + 1; j < particleCount; j++) {
          const x2 = positions[j * 3];
          const y2 = positions[j * 3 + 1];
          const z2 = positions[j * 3 + 2];

          const dx = x1 - x2;
          const dy = y1 - y2;
          const dz = z1 - z2;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < limit && numConnected < maxConnections) {
            linePositions[vertexIdx++] = x1;
            linePositions[vertexIdx++] = y1;
            linePositions[vertexIdx++] = z1;

            linePositions[vertexIdx++] = x2;
            linePositions[vertexIdx++] = y2;
            linePositions[vertexIdx++] = z2;

            const alpha = 1.0 - dist / limit;

            lineColors[colorIdx++] = 0.0;
            lineColors[colorIdx++] = alpha * 0.4; // Green
            lineColors[colorIdx++] = alpha * 0.1; // Faint blue-glow

            lineColors[colorIdx++] = 0.0;
            lineColors[colorIdx++] = alpha * 0.4;
            lineColors[colorIdx++] = alpha * 0.1;

            numConnected++;
          }
        }
      }

      pointCloud.geometry.attributes.position.needsUpdate = true;
      lineSegments.geometry.attributes.position.needsUpdate = true;
      lineSegments.geometry.attributes.color.needsUpdate = true;

      lineSegments.geometry.setDrawRange(0, numConnected * 2);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      pointsMaterial.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
