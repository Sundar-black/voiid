import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Calendar, TrendingUp } from 'lucide-react';

const projects = [
  // 1. Website Development Projects
  {
    id: 'engineering-corner',
    title: 'Engineering Corner for Inspection Co',
    subtitle: 'Corporate office in Ras Tanura, Saudi Arabia',
    category: 'Website Development',
    description: 'Built a fast, static website with optimized performance, clean UI, and responsive design to ensure smooth user experience across all devices',
    tags: ['Next.js', 'Tailwind CSS', 'React.js', 'GraphQL'],
    image: '/projects/engineering-corner.png?v=2',
    overview: 'Built a fast, static website with optimized performance, clean UI, and responsive design to ensure smooth user experience across all devices.',
    problem: 'The client required a modern static platform that would represent their inspectorial presence in Ras Tanura, but loading heavy blueprint images was causing layout shifts and slow response rates on mobile devices.',
    solution: 'We compiled static files under Next.js and utilized layout overlays and optimized GraphQL queries to retrieve database assets smoothly with sub-second paint values.',
    results: 'Session duration rose by 60%, and lead submission forms grew by 85%.',
    metrics: [
      { value: '+60%', label: 'Session Duration', sub: 'User engagement' },
      { value: '-35%', label: 'Bounce Rate', sub: 'Reduced bounces' },
      { value: '+85%', label: 'Lead Generation', sub: 'Contact form submissions' }
    ],
    gallery: [
      '/projects/engineering-corner.png?v=2',
      'https://images.unsplash.com/photo-1503387762-592dedb802d7?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'skrubline',
    title: 'Skrubline',
    subtitle: 'Medical Scrub Store',
    category: 'Website Development',
    description: 'Developed a responsive eCommerce platform for Skrubline with secure payment integration, optimized performance, and scalable architecture for seamless cross-device use',
    tags: ['Shopify', 'Webizaar', 'Razorpsy'],
    image: '/projects/skrubline.png?v=2',
    overview: 'Developed a responsive eCommerce platform for Skrubline with secure payment integration, optimized performance, and scalable architecture for seamless cross-device use.',
    problem: 'Medical scrub buyers experienced checkout drop-offs because localized gateways like Razorpay/Webizaar were not integrated properly into the cart flows.',
    solution: 'Rewrote the e-commerce routing rules, setting up a secure API pathway that links Webizaar and Razorpay protocols under 1.2s load speeds.',
    results: 'Sales volumes rose by 250% post-launch, with mobile buyers accounting for 65% of traffic.',
    metrics: [
      { value: '250%', label: 'Sales Increase', sub: 'Since launch' },
      { value: '1.2s', label: 'Page Load Time', sub: 'Optimized speed' },
      { value: '65%', label: 'Mobile Traffic', sub: 'Of total visitors' }
    ],
    gallery: [
      '/projects/skrubline.png?v=2',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'aguila-andromeda',
    title: 'Aguila Andromeda',
    subtitle: 'Unisex Fashion Brand',
    category: 'Website Development',
    description: 'Developed a responsive eCommerce platform for Aguila Andromeda with secure payment integration, optimized performance, and scalable architecture for seamless cross-device use',
    tags: ['Next.js', 'Tailwind CSS', 'React.js', 'GraphQL'],
    image: '/projects/aguila-andromeda.png?v=2',
    overview: 'Developed a responsive eCommerce platform for Aguila Andromeda with secure payment integration, optimized performance, and scalable architecture for seamless cross-device use.',
    problem: 'Unisex fashion catalog lookbooks were heavy to process on mobile Safari, causing slow pages and cart dropout rates.',
    solution: 'Built modular server-side Next.js scripts linking high-performance GraphQL queries to catalog collections.',
    results: 'Achieved a 60% session duration boost and 85% growth in successful checkouts.',
    metrics: [
      { value: '+60%', label: 'Session Duration', sub: 'User engagement' },
      { value: '-35%', label: 'Bounce Rate', sub: 'Reduced bounces' },
      { value: '+85%', label: 'Lead Generation', sub: 'Contact form submissions' }
    ],
    gallery: [
      '/projects/aguila-andromeda.png?v=2',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'rays-of-joy',
    title: 'Rays of Joy',
    subtitle: 'Kids Clothing Retail Brand',
    category: 'Website Development',
    description: 'Full-featured online store with custom shopping cart, payment gateway integration, and inventory management system.',
    tags: ['Shopify', 'Webizaar', 'Razorpsy'],
    image: '/projects/rays-of-joy.png?v=2',
    overview: 'Full-featured online store with custom shopping cart, payment gateway integration, and inventory management system.',
    problem: 'Managing child size variables, instant checkout synchronizations, and warehouse inventory led to manual coordination overhead.',
    solution: 'Deployed a custom-templated store using Shopify and custom cart APIs synchronizing stock balances live across distributors.',
    results: 'Resulted in 250% sales increases and optimized page speeds down to 1.2s.',
    metrics: [
      { value: '250%', label: 'Sales Increase', sub: 'Since launch' },
      { value: '1.2s', label: 'Page Load Time', sub: 'Optimized speed' },
      { value: '65%', label: 'Mobile Traffic', sub: 'Of total visitors' }
    ],
    gallery: [
      '/projects/rays-of-joy.png?v=2',
      'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'vineatz',
    title: 'Vineatz Technologies',
    subtitle: 'Information Technology',
    category: 'Website Development',
    description: 'Built a fast, static website for Vineatz with optimized performance, clean UI, and responsive design to ensure smooth user experience across all devices',
    tags: ['Vue.js', 'Firebase', 'Stripe', 'Google Maps API'],
    image: '/projects/vineatz.png?v=2',
    overview: 'Built a fast, static website for Vineatz with optimized performance, clean UI, and responsive design to ensure smooth user experience across all devices.',
    problem: 'Food reservation catalogs and location-based order mappings were loading slowly, frustrating mobile users looking to book tables.',
    solution: 'Engineered a static Vue.js layout using Stripe gateways and custom Google Map API pins for instant delivery feedback.',
    results: 'On-demand orders rose by 180% and customer table booking compliance hit 95%.',
    metrics: [
      { value: '+180%', label: 'Online Orders', sub: 'Monthly increase' },
      { value: '+95%', label: 'Reservations', sub: 'Table bookings' },
      { value: '4.9/5', label: 'User Rating', sub: 'Customer satisfaction' }
    ],
    gallery: [
      '/projects/vineatz.png?v=2',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'category-5-fitness',
    title: 'Category 5 Fitness',
    subtitle: 'Premium Gym Chain',
    category: 'Website Development',
    description: 'Comprehensive fitness platform with class booking, trainer scheduling, membership management, and workout tracking.',
    tags: ['Wordpress', 'Elementor', 'MySQL', 'Cpanel'],
    image: '/projects/category-5-fitness.png?v=2',
    overview: 'Comprehensive fitness platform with class booking, trainer scheduling, membership management, and workout tracking.',
    problem: 'Managing class signups, multi-trainer time grids, and membership renewals required manual tracking in gyms.',
    solution: 'Constructed an integrated membership system using WordPress, linking local calendars to MySQL databases.',
    results: 'Boosted membership registrations by 140% and filled 85% of active training classes.',
    metrics: [
      { value: '+140%', label: 'Member Signups', sub: 'New registrations' },
      { value: '85%', label: 'Class Bookings', sub: 'Fill rate' },
      { value: '15K+', label: 'App Downloads', sub: 'Mobile users' }
    ],
    gallery: [
      '/projects/category-5-fitness.png?v=2',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'mayura-fitness',
    title: 'Mayura Fitness',
    subtitle: 'Fitness Gym',
    category: 'Website Development',
    description: 'Developed a static website for Mayura Gym with a modern, responsive design optimized for speed, clarity, and strong visual branding',
    tags: ['React.js', 'Django', 'PostgreSQL', 'Matterport'],
    image: '/projects/mayura-fitness.png?v=2',
    overview: 'Developed a static website for Mayura Gym with a modern, responsive design optimized for speed, clarity, and strong visual branding.',
    problem: 'Local prospects were unable to view gym facilities virtually, leading to a low walk-in conversion rate.',
    solution: 'Built a custom React-Django interface embedding Matterport 3D virtual tour streams directly on the landing page.',
    results: 'Property inquiries increased by 210% and virtual facility views reached 12,000 monthly.',
    metrics: [
      { value: '+210%', label: 'Property Inquiries', sub: 'Lead generation' },
      { value: '12K', label: 'Virtual Tours', sub: 'Monthly views' },
      { value: '+75%', label: 'Lead Quality', sub: 'Qualified buyers' }
    ],
    gallery: [
      '/projects/mayura-fitness.png?v=2',
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'upbeat-ink',
    title: 'Upbeat Ink',
    subtitle: 'Tattoo Studio',
    category: 'Website Development',
    description: 'Upbeat Tattoo featuring a bold, artistic design with fast loading, responsive layout, and visually striking presentation.',
    tags: ['Wordpress', 'Rankmath', 'Godaddy', 'Elementor'],
    image: '/projects/upbeat-ink.png',
    overview: 'Upbeat Tattoo featuring a bold, artistic design with fast loading, responsive layout, and visually striking presentation.',
    problem: 'High-contrast black-and-grey artwork catalogs were slow to render, and Google ranking positions for localized studio keywords were low.',
    solution: 'Optimized page sizes via Elementor and set up Rankmath SEO metadata, streamlining page speeds on Godaddy hosts.',
    results: 'Inquiries increased by 165% with page traffic climbing to 45,000 monthly.',
    metrics: [
      { value: '+165%', label: 'Client Inquiries', sub: 'Contact requests' },
      { value: '45K/mo', label: 'Page Views', sub: 'Monthly traffic' },
      { value: '5.2 min', label: 'Time on Site', sub: 'Avg engagement' }
    ],
    gallery: [
      '/projects/upbeat-ink-full.png',
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'sweaters-india',
    title: 'Sweaters India',
    subtitle: 'Textile Exports Network',
    category: 'Website Development',
    description: 'minimalist design, responsive layout, and optimized performance for a smooth user experience.',
    tags: ['React', 'HIPAA Compliance', 'HL7 FHIR', 'Azure'],
    image: '/projects/sweaters-india.png?v=2',
    overview: 'minimalist design, responsive layout, and optimized performance for a smooth user experience.',
    problem: 'Managing bulk textile catalog updates across multi-facility networks was causing laggy catalog load times.',
    solution: 'Built a responsive React catalog backed by Azure cloud instances, deploying secure metadata channels.',
    results: 'Reduced appointment check-in queues and raised patient-level survey scores.',
    metrics: [
      { value: '78%', label: 'Portal Usage', sub: 'Patient adoption' },
      { value: '-42%', label: 'Appointment No-shows', sub: 'Reduced rate' },
      { value: '4.8/5', label: 'Patient Satisfaction', sub: 'Survey rating' }
    ],
    gallery: [
      '/projects/sweaters-india.png?v=2',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'besten-pumps',
    title: 'Besten Pumps',
    subtitle: 'House Pluming and Works',
    category: 'Website Development',
    description: 'Besten Pumps with an interactive design, product management system, and optimized performance for seamless user engagement.',
    tags: ['React', 'Express.js', 'MongoDB', 'Redis'],
    image: '/projects/besten-pumps.png?v=2',
    overview: 'Besten Pumps with an interactive design, product management system, and optimized performance for seamless user engagement.',
    problem: 'Water pumps inventory specification sheets were hard to browse, slowing down local plumbing dealer booking queries.',
    solution: 'Constructed an interactive product catalog backed by Express.js and Redis memory caching for immediate queries.',
    results: 'Registered 25,000+ active user conversions with a churn rate below 3.2%.',
    metrics: [
      { value: '25K+', label: 'User Signups', sub: 'Active users' },
      { value: '28%', label: 'Conversion Rate', sub: 'Free to paid' },
      { value: '3.2%', label: 'Churn Rate', sub: 'Below industry avg' }
    ],
    gallery: [
      '/projects/besten-pumps.png?v=2',
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80',
    ],
  },


  // 2. SEO Projects
  {
    id: 'upbeat-ink-seo',
    title: 'Upbeat Ink',
    subtitle: 'Tattoo Studio (Local SEO)',
    category: 'SEO Optimization',
    description: 'Comprehensive local SEO strategy including Google My Business optimization, local citations, and geo-targeted content.',
    duration: '6 Months',
    image: '/projects/upbeat-ink-seo.png?v=2',
    overview: 'Comprehensive local SEO strategy including Google My Business optimization, local citations, and geo-targeted content to capture local tattoo bookings.',
    problem: 'The studio relied on social media ads for bookings and had low Google Maps placement, missing out on local organic search intents.',
    solution: 'Optimized their Google Business Profile, established local citation profiles, and created geo-targeted landing pages.',
    results: 'Achieved top 3 local pack placements, organic traffic grew by 300%, and lead submissions grew by 120%.',
    metrics: [
      { value: '300%', label: 'Organic Traffic', sub: 'Increase 500 to 2k/mo' },
      { value: '32', label: 'Keyword Rankings', sub: 'First page rankings' },
      { value: '+120%', label: 'Lead Generation', sub: 'Qualified leads/mo' },
      { value: '18 → 34', label: 'Domain Authority', sub: 'Significant growth' },
      { value: '2.1% → 4.8%', label: 'Conversion Rate', sub: 'Doubled CVR' },
      { value: 'Top 3', label: 'Local Pack', sub: 'For 15 keywords' }
    ],
    gallery: [
      '/projects/upbeat-ink-seo.png?v=2',
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'rays-of-joy-seo',
    title: 'Rays of Joy',
    subtitle: 'Online Retail Store (Technical SEO)',
    category: 'SEO Optimization',
    description: 'Technical SEO audit, site structure optimization, product page optimization, and content strategy for improved rankings.',
    duration: '8 Months',
    image: '/projects/rays-of-joy-seo.png?v=2',
    overview: 'Technical SEO audit, site structure optimization, product page optimization, and content strategy for improved retail rankings.',
    problem: 'The online store had duplicate product pages, poor mobile indexing scores, and slow load times, resulting in low search engine rankings.',
    solution: 'Conducted a deep technical audit, cleaned up duplicate parameters, restructured categories, and optimized page speed profiles.',
    results: 'Organic revenue climbed by 450%, speed improved by 65%, and mobile traffic grew by 385%.',
    metrics: [
      { value: '450%', label: 'Organic Revenue', sub: '₹15K to ₹82K/mo' },
      { value: '65%', label: 'Site Speed', sub: 'Improvement 4.2 to 1.5s' },
      { value: '23', label: 'Product Categories', sub: 'Ranked in top 3' },
      { value: '12', label: 'Featured Snippets', sub: 'Position zero ranks' },
      { value: '1,247', label: 'Pages Indexed', sub: 'From 234 pages' },
      { value: '+385%', label: 'Mobile Traffic', sub: 'Mobile optimization' }
    ],
    gallery: [
      '/projects/rays-of-joy-seo.png?v=2',
      'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'category-5-fitness-seo',
    title: 'Category 5 Fitness',
    subtitle: 'Fitness Chain (Content SEO)',
    category: 'SEO Optimization',
    description: 'Strategic content marketing and SEO campaign targeting high-value B2B keywords with thought leadership content.',
    duration: '12 Months',
    image: '/projects/category-5-fitness-seo.png?v=2',
    overview: 'Strategic content marketing and SEO campaign targeting high-value B2B keywords with thought leadership content.',
    problem: 'The chain lacked high-authority backlinks and articles focusing on corporate fitness plans, losing potential enterprise accounts.',
    solution: 'Researched high-value keywords, launched structured fitness guides articles, and initiated authority backlink campaigns.',
    results: 'Domain rating grew from 28 to 62, qualified leads grew by 280%, and backlinks count reached 1,240.',
    metrics: [
      { value: '+280%', label: 'Qualified Leads', sub: '120 to 456/mo' },
      { value: '42', label: 'Industry Keywords', sub: 'Top 3 rankings' },
      { value: '1,240', label: 'Backlinks', sub: 'From 85 quality links' },
      { value: '+195%', label: 'Organic MQLs', sub: 'Marketing qualified' },
      { value: '28 → 62', label: 'Domain Rating', sub: 'Authority growth' },
      { value: '156', label: 'Content Published', sub: 'Articles & guides' }
    ],
    gallery: [
      '/projects/category-5-fitness-seo.png?v=2',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'aguila-andromeda-seo',
    title: 'Aguila Andromeda',
    subtitle: 'Retail Store (Local SEO)',
    category: 'SEO Optimization',
    description: 'Location-based SEO strategy for 25+ restaurant locations with individual landing pages and local link building.',
    duration: '10 Months',
    image: '/projects/aguila-andromeda-seo.png?v=2',
    overview: 'Location-based SEO strategy for 25+ restaurant locations with individual landing pages and local link building.',
    problem: 'Individual branch managers struggled to get ranked for localized searches, causing lower foot traffic in multiple districts.',
    solution: 'Built location-specific landing pages, structured schemas for each branch, and launched localized citation indexing.',
    results: 'Traffic grew by 220% per location, direction requests grew by 350%, and GMB map views hit 58,000 monthly.',
    metrics: [
      { value: '+220%', label: 'Traffic/Location', sub: '850 to 2.7k/mo avg' },
      { value: '100%', label: 'Local Pack', sub: 'All locations top 3' },
      { value: '+350%', label: 'Direction Requests', sub: 'Map interactions' },
      { value: '+175%', label: 'Online Orders', sub: 'Direct attribution' },
      { value: '58K/mo', label: 'GMB Views', sub: 'From 12K/mo' },
      { value: '1,180/mo', label: 'Phone Calls', sub: 'From 340/mo' }
    ],
    gallery: [
      '/projects/aguila-andromeda-seo.png?v=2',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80',
    ],
  },

  // 3. Social Media Marketing (SMM) Projects
  {
    id: 'engineering-corner-smm',
    title: 'Engineering Corner for Inspection Co',
    subtitle: 'Corporate office in Ras Tanura, Saudi Arabia',
    category: 'Social Media Marketing',
    description: 'Organic growth campaign with community engagement strategies.',
    duration: '6 Months',
    platforms: ['Instagram'],
    image: '/projects/engineering-corner-smm.png?v=3',
    overview: 'Organic growth campaign with community engagement strategies for Engineering Corner.',
    problem: 'Low digital footprint and community interaction on visual media feeds for heavy industrial inspectorial sectors.',
    solution: 'Designed architectural breakdown layouts and high-performance highlight video reels of inspectorial audits.',
    results: 'Organic reach grew by +500% reaching 5.3 Million impressions and generating over 500% ROI.',
    metrics: [
      { value: '+500%', label: 'Follower Growth', sub: '5K to 27.5K' },
      { value: '8.4%', label: 'Engagement Rate', sub: 'Above industry avg' },
      { value: '5.3M', label: 'Reach', sub: 'Total impressions' },
      { value: '500%', label: 'ROI Generated', sub: '₹100K+ revenue' }
    ],
    gallery: [
      '/projects/engineering-corner-smm.png?v=3',
      'https://images.unsplash.com/photo-1503387762-592dedb802d7?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'skrubline-smm',
    title: 'Skrubline',
    subtitle: 'Medical Scrub Store',
    category: 'Social Media Marketing',
    description: 'Handling Instagram marketing for Skrubline, creating visually cohesive content and strategic campaigns to boost brand presence and audience engagement.',
    duration: '3 Months',
    platforms: ['Instagram'],
    image: '/projects/skrubline-smm.png?v=5',
    overview: 'Handling Instagram marketing for Skrubline, creating visually cohesive content and strategic campaigns to boost brand presence and audience engagement.',
    problem: 'Direct-to-consumer medical products require visual trust and high conversions metrics on Instagram feeds.',
    solution: 'Engineered unified post templates, aesthetic grid guides, and launched direct-response purchase story links.',
    results: 'Acquired 3x ROAS metrics, conversion rate climbed to 22% generating over ₹100K in e-commerce value.',
    metrics: [
      { value: '3x', label: 'ROAS', sub: 'Return on ad spend' },
      { value: '₹100', label: 'Cost Per Purchase', sub: 'Low acquisition cost' },
      { value: '22%', label: 'Conversion Rate', sub: 'High CVR' },
      { value: '₹100K+', label: 'Revenue Generated', sub: 'Total generated' }
    ],
    gallery: [
      '/projects/skrubline-smm.png?v=5',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'brocade-coimbatore-smm',
    title: 'Brocade Coimbatore',
    subtitle: 'Women Fashion Wear',
    category: 'Social Media Marketing',
    description: "women's fashion brand, focusing on trend-driven visuals and engagement strategies to enhance brand visibility and follower growth",
    duration: '2 Months',
    platforms: ['Instagram'],
    image: '/projects/brocade-coimbatore-smm.png?v=3',
    overview: "women's fashion brand, focusing on trend-driven visuals and engagement strategies to enhance brand visibility and follower growth.",
    problem: 'Saturated ladies apparel listings on Instagram without video hook placements and reels optimization formats.',
    solution: 'Launched interactive clothing trial reels, user polling campaigns, and model aesthetic lookbooks.',
    results: 'Generated 12.5M video views, added over +280K followers, and product sales expanded by +650%.',
    metrics: [
      { value: '12.5M', label: 'Video Views', sub: 'Total views' },
      { value: '+280K', label: 'Follower Growth', sub: 'New followers' },
      { value: '14.2%', label: 'Engagement Rate', sub: 'High engagement' },
      { value: '+650%', label: 'Sales Impact', sub: 'Product sales growth' }
    ],
    gallery: [
      '/projects/brocade-coimbatore-smm.png?v=3',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'aguila-andromeda-smm',
    title: 'Aguila Andromeda',
    subtitle: 'E-commerce Store',
    category: 'Social Media Marketing',
    description: 'Conversion-focused Facebook advertising campaign with A/B testing, retargeting, and lookalike audiences.',
    duration: '5 Months',
    platforms: ['Instagram'],
    image: '/projects/aguila-andromeda-smm.png?v=3',
    overview: 'Conversion-focused Facebook advertising campaign with A/B testing, retargeting, and lookalike audiences for apparel.',
    problem: 'Cart dropouts on catalog checkout endpoints were high, leading to low media purchase efficiency.',
    solution: 'Designed demographic custom lookup parameters, targeting custom retargeting cart nodes.',
    results: 'ROAS grew to 4.8x with customer purchase costs dropping down to ₹12.50 per acquisition.',
    metrics: [
      { value: '4.8x', label: 'ROAS', sub: 'Return on ad spend' },
      { value: '₹12.50', label: 'Cost Per Purchase', sub: 'Low acquisition cost' },
      { value: '6.2%', label: 'Conversion Rate', sub: 'High CVR' },
      { value: '₹185K', label: 'Revenue Generated', sub: 'Total generated value' }
    ],
    gallery: [
      '/projects/aguila-andromeda-smm.png?v=3',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'sweaters-india-smm',
    title: 'Sweaters India',
    subtitle: 'Textile Exports Network',
    category: 'Social Media Marketing',
    description: 'Handled Instagram marketing for Sweaters Textile, creating visually cohesive content and strategic campaigns to boost brand presence and audience engagement.',
    duration: '5 Months',
    platforms: ['Instagram'],
    image: '/projects/sweaters-india-smm.png?v=3',
    overview: 'Handled Instagram marketing for Sweaters Textile, creating visually cohesive content and strategic campaigns to boost brand presence and audience engagement.',
    problem: 'Industrial export networks had sterile product catalogs without human-centered visual narratives.',
    solution: 'Engineered high-quality factory production lookbooks and wool textures videos that highlight design details.',
    results: 'Acquired +85K new subscribers, loggin 450K watch hours and growing referral channels.',
    metrics: [
      { value: '+85K', label: 'Subscriber Growth', sub: 'New subscribers' },
      { value: '450K', label: 'Watch Hours', sub: 'Total watch time' },
      { value: '8.4 min', label: 'Avg View Duration', sub: 'Viewer retention' },
      { value: '₹24K/mo', label: 'Channel Revenue', sub: 'Monetization yield' }
    ],
    gallery: [
      '/projects/sweaters-india-smm.png?v=3',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'alankar-sew-smm',
    title: 'Alankar Sew & Style',
    subtitle: 'Fashion & Lifestyle Brand',
    category: 'Social Media Marketing',
    description: 'Organic growth campaign with content creation, influencer partnerships, and community engagement strategies.',
    duration: '6 Months',
    platforms: ['Instagram'],
    image: '/projects/alankar-sew-smm.png?v=3',
    overview: 'Organic growth campaign with content creation, influencer partnerships, and community engagement strategies.',
    problem: 'Lifestyle catalogs had low organic search placement and lacked influencer endorsement metrics.',
    solution: 'Initiated regional fashion influencer outreach program, setting up styling ideas formats.',
    results: 'Organic follower rate rose by +450% reaching 2.3M impressions and generating 320% ROI.',
    metrics: [
      { value: '+450%', label: 'Follower Growth', sub: '5K to 27.5K' },
      { value: '8.4%', label: 'Engagement Rate', sub: 'Above industry avg' },
      { value: '2.3M', label: 'Reach', sub: 'Total impressions' },
      { value: '320%', label: 'ROI Generated', sub: '₹80K revenue yield' }
    ],
    gallery: [
      '/projects/alankar-sew-smm.png?v=3',
      'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'best-pumps-smm',
    title: 'Best Pumps (India) Pvt Ltd',
    subtitle: 'Housing Pumps',
    category: 'Social Media Marketing',
    description: 'Managed Instagram marketing for Besten Pumps, showcasing product performance and industry expertise through creative visuals and targeted engagement campaigns.',
    duration: '4 Months',
    platforms: ['Instagram'],
    image: '/projects/best-pumps-smm.png?v=4',
    overview: 'Managed Instagram marketing for Besten Pumps, showcasing product performance and industry expertise through creative visuals and targeted engagement campaigns.',
    problem: 'Engineering pump catalog values were complex to communicate in consumer social templates.',
    solution: 'Drafted schematic product graphics, animated specification breakdowns, and local plumbing guides.',
    results: 'Followers count rose by +95K and social referral traffic grew by +340%.',
    metrics: [
      { value: '+95K', label: 'Followers Added', sub: 'New followers' },
      { value: '15M', label: 'Tweet Impressions', sub: 'Total impressions' },
      { value: '6.8%', label: 'Engagement Rate', sub: 'Avg engagement' },
      { value: '+340%', label: 'Website Traffic', sub: 'Referral traffic growth' }
    ],
    gallery: [
      '/projects/best-pumps-smm.png?v=4',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'category-5-fitness-smm',
    title: 'Category 5 Fitness',
    subtitle: 'Fitness Chain',
    category: 'Social Media Marketing',
    description: 'Coordinated social media campaign across multiple platforms for app launch with influencer marketing.',
    duration: '3 Months',
    platforms: ['Instagram'],
    image: '/projects/category-5-fitness-smm.png?v=3',
    overview: 'Coordinated social media campaign across multiple platforms for app launch with influencer marketing.',
    problem: 'Corporate app downloads metrics were sluggish without targeted video endorsements from certified trainers.',
    solution: 'Orchestrated dynamic gym challenge tags, trainer takeovers, and app booking discount campaigns.',
    results: 'Acquired 125K app installs, reaching 8.2M users and registering a 62% retention rate.',
    metrics: [
      { value: '125K', label: 'App Downloads', sub: 'Total installs' },
      { value: '8.2M', label: 'Total Reach', sub: 'Combined reach' },
      { value: '18.5%', label: 'Conversion Rate', sub: 'Install CVR' },
      { value: '62%', label: 'User Retention', sub: '30-day retention' }
    ],
    gallery: [
      '/projects/category-5-fitness-smm.png?v=3',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'pvs-hardware-smm',
    title: 'PVS Hardware & Plywood',
    subtitle: 'Food & Recipe Blog',
    category: 'Social Media Marketing',
    description: 'PVS Hardware & Plywood, creating product-focused content and promotional campaigns to strengthen brand presence and local customer reach.',
    duration: '4 Months',
    platforms: ['Instagram'],
    image: '/projects/pvs-hardware-smm.png?v=3',
    overview: 'PVS Hardware & Plywood, creating product-focused content and promotional campaigns to strengthen brand presence and local customer reach.',
    problem: 'Local wholesale hardware centers lacked direct consumer engagement formats and local customer outreach.',
    solution: 'Designed premium design idea videos showing door handle selections and local layout projects.',
    results: 'Generated 18.5M video views, added over +320K followers, and generated ₹45K in sponsorship metrics.',
    metrics: [
      { value: '18.5M', label: 'Reel Views', sub: 'Total views' },
      { value: '+320K', label: 'Follower Growth', sub: 'New followers' },
      { value: '11.2%', label: 'Avg Engagement', sub: 'High engagement' },
      { value: '₹45K', label: 'Brand Deals', sub: 'Sponsorship income' }
    ],
    gallery: [
      '/projects/pvs-hardware-smm.png?v=3',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'vineatz-marketing-smm',
    title: 'Vineatz Marketing Strategy',
    subtitle: 'Information Technology',
    category: 'Social Media Marketing',
    description: 'Handled social media marketing for Vineatz, an IT solutions brand, focusing on professional branding, tech-driven content, and audience growth through consistent engagement.',
    duration: '6 Months',
    platforms: ['Instagram'],
    image: '/projects/vineatz-marketing-smm.png?v=3',
    overview: 'Handled social media marketing for Vineatz, an IT solutions brand, focusing on professional branding, tech-driven content, and audience growth through consistent engagement.',
    problem: 'Lack of visual Pinterest search tags and click paths for technological platforms.',
    solution: 'Created visual infographics, custom analytics pins, and backlinked boards leading to booking actions.',
    results: 'Monthly pin impressions hit 2.8M, yielding 185K saves and generating ₹142K in direct Pinterest sales.',
    metrics: [
      { value: '2.8M', label: 'Monthly Views', sub: 'Pin impressions' },
      { value: '185K', label: 'Pin Saves', sub: 'User saves' },
      { value: '95K', label: 'Website Clicks', sub: 'Click-throughs' },
      { value: '₹142K', label: 'Sales Yield', sub: 'Direct Pinterest sales' }
    ],
    gallery: [
      '/projects/vineatz-marketing-smm.png?v=3',
      'https://images.unsplash.com/photo-1526367790999-0150786486a9?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'bukavi-learning-smm',
    title: 'Bukavi Learning',
    subtitle: 'Educational Platform',
    category: 'Social Media Marketing',
    description: 'Thought leadership and lead generation campaign on LinkedIn with content marketing and sponsored posts.',
    duration: '6 Months',
    platforms: ['LinkedIn'],
    image: '/projects/bukavi-learning-smm.png?v=3',
    overview: 'Thought leadership and lead generation campaign on LinkedIn with content marketing and sponsored posts.',
    problem: 'High customer acquisition costs for B2B educational programs when relying on traditional search bidding models.',
    solution: 'Designed expert educational panels, slides posts, and corporate training case templates.',
    results: 'Acquired 1,240 qualified leads under target cost benchmarks and added over +3,500 LinkedIn contacts.',
    metrics: [
      { value: '1,240', label: 'Lead Generation', sub: 'Qualified leads' },
      { value: '₹38', label: 'Cost Per Lead', sub: 'Below target threshold' },
      { value: '+3,500', label: 'Connection Growth', sub: 'Network expansion' },
      { value: '12.8%', label: 'Post Engagement', sub: 'Avg engagement' }
    ],
    gallery: [
      '/projects/bukavi-learning-smm.png?v=3',
      'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'rays-of-joy-smm',
    title: 'Rays Of Joy',
    subtitle: 'Kids Clothing',
    category: 'Social Media Marketing',
    description: "Managed social media marketing for a kids' clothing brand, featuring playful visuals and engaging campaigns to build brand trust and attract parent-focused audiences",
    duration: '5 Months',
    platforms: ['Instagram'],
    image: '/projects/rays-of-joy-smm.png?v=3',
    overview: "Managed social media marketing for a kids' clothing brand, featuring playful visuals and engaging campaigns to build brand trust and attract parent-focused audiences.",
    problem: 'Low follower retention rates and short engagement durations on clothing grids.',
    solution: 'Constructed child apparel showcases, user parent blogs clips, and community milestone events.',
    results: 'Built community membership to 45K+, maintaining 12K active daily users and 85% parent retention.',
    metrics: [
      { value: '45K+', label: 'Community Members', sub: 'Total members' },
      { value: '12K', label: 'Daily Active Users', sub: 'Daily engagement' },
      { value: '78%', label: 'Event Participation', sub: 'Participation rate' },
      { value: '85%', label: 'Member Retention', sub: 'Retention rate' }
    ],
    gallery: [
      '/projects/rays-of-joy-smm.png?v=3',
      'https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&w=600&q=80',
    ],
  },

  // 4. PPC Projects
  {
    id: 'upbeat-ink-ppc',
    title: 'Upbeat Ink',
    subtitle: 'Tattoo Studio (Google Ads & PPC)',
    category: 'PPC & Google Ads',
    description: 'Strategic pay-per-click campaign focused on lead generation with Google Search Ads, Display Network, and retargeting campaigns.',
    duration: '4 Months',
    platforms: ['Google Ads', 'LinkedIn Ads', 'Display Network'],
    image: '/projects/upbeat-ink-ppc.png?v=3',
    overview: 'Strategic pay-per-click campaign focused on lead generation with Google Search Ads, Display Network, and retargeting campaigns.',
    problem: 'High competition in local tattoo booking bids made search click costs expensive with standard ads structures.',
    solution: 'Engineered tight negative keywords filters, structured high-relevance bidding campaigns, and built direct SMS conversion landing nodes.',
    results: 'Reduced cost-per-lead to ₹42 (28% below target), conversion rate reached 12.6%, and yielded 4.2x ROAS.',
    metrics: [
      { value: '₹42', label: 'Cost Per Lead', sub: '28% below target' },
      { value: '12.6%', label: 'Conversion Rate', sub: 'Landing page CVR' },
      { value: '1,247', label: 'Total Leads', sub: 'Qualified leads' },
      { value: '4.8%', label: 'Click-Through Rate', sub: 'Industry avg: 2.4%' },
      { value: '8.9/10', label: 'Quality Score', sub: 'Google Ads average' },
      { value: '4.2x', label: 'ROAS Generated', sub: '₹168K revenue generated' }
    ],
    gallery: [
      '/projects/upbeat-ink-ppc.png?v=3',
      'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=600&q=80',
    ],
  },
  {
    id: 'aguila-andromeda-ppc',
    title: 'Aguila Andromeda',
    subtitle: 'Online Fashion Retailer (Multi-Channel PPC)',
    category: 'PPC & Google Ads',
    description: 'Multi-channel PPC strategy with Google Shopping, Dynamic Product Ads, and remarketing for e-commerce sales growth.',
    duration: '6 Months',
    platforms: ['Google Shopping', 'Facebook Ads', 'Pinterest Ads'],
    image: '/projects/aguila-andromeda-ppc.png?v=3',
    overview: 'Multi-channel PPC strategy with Google Shopping, Dynamic Product Ads, and remarketing for e-commerce sales growth.',
    problem: 'High cart abandonments and low average order values were limiting scalability of shopping ad spends.',
    solution: 'Deployed dynamic product ads matching user browsing profiles, synced abandonment recovery emails, and scaled Google Shopping bids.',
    results: 'Registered 6.8x ROAS (₹510K revenue), cost-per-acquisition dropped to ₹18.50, and recovered 38% of abandoned carts.',
    metrics: [
      { value: '6.8x', label: 'ROAS', sub: '₹510K revenue' },
      { value: '₹18.50', label: 'Cost Per Acquisition', sub: '42% reduction' },
      { value: '4,054', label: 'Total Orders', sub: 'Online purchases' },
      { value: '₹126', label: 'Average Order Value', sub: '32% increase' },
      { value: '38%', label: 'Cart Abandonment', sub: 'Through remarketing' },
      { value: '3,180', label: 'New Customers', sub: 'First-time buyers' }
    ],
    gallery: [
      '/projects/aguila-andromeda-ppc.png?v=3',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80',
    ],
  },
];

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = 'hidden';
      if (window.lenis) window.lenis.stop();
    } else {
      document.body.style.overflow = 'unset';
      if (window.lenis) window.lenis.start();
    }
    return () => {
      document.body.style.overflow = 'unset';
      if (window.lenis) window.lenis.start();
    };
  }, [activeProject]);

  const featuredProjects = [
    projects.find((p) => p.id === 'rays-of-joy'),
    projects.find((p) => p.id === 'category-5-fitness-seo'),
    projects.find((p) => p.id === 'brocade-coimbatore-smm'),
  ].filter(Boolean);

  const websiteProjects = projects.filter(
    (p) =>
      p.category !== 'SEO Optimization' &&
      p.category !== 'Social Media Marketing' &&
      p.category !== 'PPC & Google Ads'
  );
  const seoProjects = projects.filter((p) => p.category === 'SEO Optimization');
  const smmProjects = projects.filter((p) => p.category === 'Social Media Marketing');
  const ppcProjects = projects.filter((p) => p.category === 'PPC & Google Ads');

  const renderSection = (title, subtitle, projectsList) => {
    return (
      <div style={{ marginBottom: '80px' }}>
        <div style={{ textAlign: 'left', marginBottom: '32px', borderLeft: '3px solid var(--primary)', paddingLeft: '16px' }}>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.8rem', fontWeight: 600, color: '#fff' }}>
            {title}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginTop: '6px', maxWidth: '750px' }}>
            {subtitle}
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '28px',
          }}
        >
          {projectsList.map((project) => (
            <div key={project.id}>
              {renderCard(project)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCard = (project) => {
    const isWebsite = project.category === 'Website Development';
    const isSEO = project.category === 'SEO Optimization';
    const isSMM = project.category === 'Social Media Marketing';
    const isPPC = project.category === 'PPC & Google Ads';

    const cardHeight = '520px';
    const imageHeight = '215px';

    return (
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        onClick={() => setActiveProject(project)}
        className="portfolio-card glass-panel"
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          background: 'rgba(15, 15, 15, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          cursor: 'none',
          height: cardHeight,
        }}
      >
        {/* Image Container with zoom hover */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: imageHeight,
            overflow: 'hidden',
          }}
        >
          <div
            className="portfolio-image-hover"
            style={{
              width: '100%',
              height: '100%',
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'top',
              transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
            }}
          />
          {/* Overlay tag */}
          <span
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              padding: '4px 10px',
              background: 'rgba(5, 5, 5, 0.8)',
              borderRadius: '12px',
              fontSize: '0.7rem',
              color: 'var(--primary)',
              fontFamily: 'var(--font-heading)',
              border: '1px solid rgba(36, 123, 27, 0.2)',
            }}
          >
            {project.category}
          </span>
        </div>

        {/* Text info */}
        <div style={{ padding: '16px 20px', textAlign: 'left', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '10px', marginBottom: '4px' }}>
              <h3
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#fff',
                }}
              >
                {project.title}
              </h3>
              {/* Duration Pill for SEO */}
              {isSEO && (
                <span
                  style={{
                    background: 'rgba(36, 123, 27, 0.06)',
                    border: '1px solid rgba(36, 123, 27, 0.15)',
                    color: 'var(--primary)',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    fontSize: '0.7rem',
                    fontWeight: 500,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <TrendingUp size={10} /> {project.duration}
                </span>
              )}
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: '0.8rem',
                color: 'var(--primary)',
                marginBottom: '6px',
                fontWeight: 500,
              }}
            >
              {project.subtitle}
            </div>

            {/* Description */}
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: '0.85rem',
                lineHeight: 1.45,
                marginBottom: '10px',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {project.description}
            </p>
          </div>

          <div>
            {/* Technologies label for Websites */}
            {isWebsite && (
              <div style={{ marginBottom: '10px' }}>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)', marginBottom: '4px' }}>
                  Technologies:
                </div>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: '0.65rem',
                        color: '#fff',
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '6px',
                        padding: '2px 6px',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Grid on the card */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isSMM ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                gap: '8px',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                paddingTop: '8px',
                marginBottom: '8px',
              }}
            >
              {project.metrics && project.metrics.map((m, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '0.58rem', color: 'rgba(255, 255, 255, 0.4)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)', margin: '2px 0', fontFamily: 'var(--font-heading)' }}>
                    {m.value}
                  </div>
                  <div style={{ fontSize: '0.55rem', color: 'rgba(255, 255, 255, 0.3)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* Read Case Study trigger link */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '0.8rem',
                color: 'var(--primary)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 500,
              }}
            >
              Read Case Study <ArrowRight size={12} />
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="portfolio" style={{ position: 'relative' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'rgba(36, 123, 27, 0.03)',
          filter: 'blur(140px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div className="section-header">
        <span className="section-tag">Portfolio</span>
        <h2 className="section-title">Engineered to Perform</h2>
        <p className="section-subtitle">
          Explore a curated selection of our digital builds, search indexing optimizations, and lead acquisition campaigns.
        </p>
      </div>

      {/* Grouped Service Sections or Featured Projects */}
      {!showAll ? (
        <div style={{ marginTop: '50px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '28px',
            }}
          >
            {featuredProjects.map((project) => (
              <div key={project.id}>
                {renderCard(project)}
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button
              onClick={() => setShowAll(true)}
              className="magnetic-btn magnetic-btn-primary"
              style={{
                padding: '12px 30px',
                fontSize: '0.95rem',
                border: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              See All Projects
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ) : (
        <div style={{ marginTop: '50px' }}>
          {renderSection(
            'Website & Platform Engineering',
            'Custom corporate websites, educational portals, e-commerce storefronts, and dashboard architectures.',
            websiteProjects
          )}

          {renderSection(
            'Search Engine Optimization (SEO)',
            'Technical index diagnostic audits, meta schema optimizations, and local search position scaling.',
            seoProjects
          )}

          {renderSection(
            'Social Media Marketing (SMM)',
            'Influencer collaboration frameworks, reel storyboarding calendars, and follower acquisition systems.',
            smmProjects
          )}

          {renderSection(
            'PPC & Google Ads Bidding',
            'Cost-per-click bid optimization logs, negative keyword lists, and search retargeting systems.',
            ppcProjects
          )}

          <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '40px' }}>
            <button
              onClick={() => setShowAll(false)}
              className="magnetic-btn"
              style={{
                padding: '12px 30px',
                fontSize: '0.95rem',
                background: 'transparent',
                border: '1px solid var(--glass-border)',
                color: '#fff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              Show Less
            </button>
          </div>
        </div>
      )}

      {/* Premium Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveProject(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(5, 5, 5, 0.85)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
            }}
          >
            {/* Modal Body Container */}
            <motion.div
              initial={{ scale: 0.9, y: 60, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 60, opacity: 0 }}
              transition={{ type: 'spring', damping: 30, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-panel"
              style={{
                width: '100%',
                maxWidth: '900px',
                maxHeight: '82vh',
                borderRadius: '30px',
                background: 'rgba(10, 10, 10, 0.9)',
                position: 'relative',
                boxShadow: '0 30px 90px rgba(36, 123, 27, 0.05)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: 'rgba(36, 123, 27, 0.1)',
                  border: '1px solid var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  cursor: 'none',
                  zIndex: 10,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: '0 4px 12px rgba(36, 123, 27, 0.15)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--primary)';
                  e.currentTarget.style.color = '#000';
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 0 20px var(--primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(36, 123, 27, 0.1)';
                  e.currentTarget.style.color = 'var(--primary)';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(36, 123, 27, 0.15)';
                }}
              >
                <X size={22} strokeWidth={2.5} />
              </button>

              {/* Scrollable Content Container */}
              <div
                data-lenis-prevent
                style={{
                  width: '100%',
                  height: '100%',
                  overflowY: 'auto',
                  WebkitOverflowScrolling: 'touch',
                }}
              >

              {/* Modal Hero Banner */}
              <div
                style={{
                  width: '100%',
                  height: '350px',
                  backgroundImage: `url(${activeProject.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'top',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(to bottom, transparent 30%, #0a0a0a 100%)',
                  }}
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '40px',
                    textAlign: 'left',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--primary)',
                      fontSize: '0.85rem',
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                    }}
                  >
                    {activeProject.category}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '2.3rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginTop: '8px',
                    }}
                  >
                    {activeProject.title}
                  </h2>
                </motion.div>
              </div>

              {/* Modal Details Grid */}
              <motion.div
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
                style={{ padding: '40px', textAlign: 'left' }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px',
                  }}
                >
                  {/* Overview Column */}
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        color: '#fff',
                        marginBottom: '14px',
                        fontWeight: 500,
                      }}
                    >
                      Overview
                    </h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
                      {activeProject.overview}
                    </p>

                    <div style={{ marginTop: '24px' }}>
                      <h5 style={{ color: '#fff', fontSize: '0.9rem', marginBottom: '10px' }}>Technologies/Platforms</h5>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {(activeProject.platforms || activeProject.tags || []).map((t) => (
                          <span
                            key={t}
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--primary)',
                              background: 'rgba(36, 123, 27, 0.05)',
                              border: '1px solid rgba(36, 123, 27, 0.2)',
                              borderRadius: '8px',
                              padding: '4px 12px',
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Problem & Solution Column */}
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.2rem',
                        color: '#fff',
                        marginBottom: '14px',
                        fontWeight: 500,
                      }}
                    >
                      The Challenge & Execution
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px', fontSize: '0.9rem', color: '#ff6666' }}>
                          <span>The Problem</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                          {activeProject.problem}
                        </p>
                      </div>
                      <div>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px', fontSize: '0.9rem', color: 'var(--primary)' }}>
                          <span>The Solution</span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.5 }}>
                          {activeProject.solution}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results and Metrics banner */}
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
                  className="glass-panel"
                  style={{
                    padding: '30px',
                    borderRadius: '20px',
                    background: 'rgba(36, 123, 27, 0.02)',
                    border: '1px solid rgba(36, 123, 27, 0.15)',
                    marginBottom: '40px',
                  }}
                >
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: activeProject.metrics.length === 4 ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
                      gridTemplateRows: activeProject.metrics.length > 3 ? 'auto auto' : 'auto',
                      gap: '20px',
                      textAlign: 'center',
                    }}
                  >
                    {activeProject.metrics && activeProject.metrics.map((m, i) => (
                      <div
                        key={i}
                        style={{
                          borderRight: (i + 1) % (activeProject.metrics.length === 4 ? 2 : 3) !== 0 && i < activeProject.metrics.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                          padding: '10px',
                        }}
                      >
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {m.label}
                        </div>
                        <div style={{ fontSize: '2.1rem', fontWeight: 700, color: 'var(--primary)', margin: '8px 0', fontFamily: 'var(--font-heading)' }}>
                          {m.value}
                        </div>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.5)', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}>
                          {m.sub}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>


              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </section>
  );
}
