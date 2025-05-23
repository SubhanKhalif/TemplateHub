const templates = [
  {
    id: 1,
    title: "Portfolio Template",
    description: "Clean and modern portfolio layout for developers.",
    category: "Portfolio",
    price: 0,
    isFavorite: false,
    image: "/assets/images/portfolio-template.jpg",
    features: [
      "Responsive design",
      "Dark/Light mode",
      "Project showcase section",
      "Contact form",
      "SEO optimized"
    ],
    zipfile: "/downloads/SwiPol-1.0.0.zip",
    lastUpdated: "2023-10-15",
    downloads: 1245,
    featured: true,
    rating: 4.8,
    reviews: 45,
    languages: ["English", "Spanish", "French"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.portfolio-template.com",
    tags: ["portfolio", "developer", "modern", "responsive", "clean"]
  },
  {
    id: 17,
    title: "SaaS Analytics",
    description: "Advanced analytics dashboard for SaaS products.",
    category: "SaaS",
    price: 30,
    isFavorite: false,
    image: "/assets/images/saas-analytics.jpg",
    features: [
      "Real-time data",
      "Custom reports",
      "User segmentation",
      "KPI tracking",
      "Export options"
    ],
    zipfile: "/downloads/saas-analytics.zip",
    lastUpdated: "2023-10-20",
    downloads: 456,
    rating: 4.6,
    reviews: 32,
    languages: ["English", "German", "Japanese"],
    supportedDevices: ["Desktop", "Tablet"],
    techStack: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://demo.saas-analytics.com",
    tags: ["saas", "analytics", "dashboard", "data", "reports"]
  },
  {
    id: 2,
    title: "Business Landing Page",
    description: "Professional landing page template for startups.",
    category: "Business",
    price: 15,
    isFavorite: false,
    image: "/assets/ChatGPT Image Mar 30, 2025, 11_31_36 PM.png",
    features: [
      "Hero section with CTA",
      "Features grid",
      "Testimonials section",
      "Pricing table",
      "Footer with social links"
    ],
    zipfile: "/downloads/SwiPol-1.0.0.zip",
    lastUpdated: "2023-09-28",
    downloads: 987,
    rating: 4.7,
    reviews: 28,
    languages: ["English", "Spanish", "Portuguese"],
    supportedDevices: ["Desktop", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.business-landing.com",
    tags: ["business", "landing", "startup", "professional", "responsive"]
  },
  {
    id: 18,
    title: "Food Truck Website",
    description: "Vibrant website template for food trucks.",
    category: "Food",
    price: 12,
    isFavorite: false,
    image: "/assets/images/food-truck.jpg",
    features: [
      "Menu display",
      "Location tracker",
      "Special offers",
      "Social media integration",
      "Online ordering"
    ],
    zipfile: "/downloads/food-truck.zip",
    lastUpdated: "2023-10-18",
    downloads: 321,
    rating: 4.5,
    reviews: 19,
    languages: ["English", "Spanish"],
    supportedDevices: ["Mobile", "Tablet"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.food-truck.com",
    tags: ["food", "truck", "menu", "ordering", "mobile"]
  },
  {
    id: 3,
    title: "SaaS Web UI",
    description: "SaaS homepage built with beautiful Tailwind components.",
    category: "SaaS",
    price: 20,
    isFavorite: false,
    image: "/assets/images/saas-template.jpg",
    features: [
      "Dashboard layout",
      "User management",
      "Analytics charts",
      "Notification system",
      "Dark theme support"
    ],
    zipfile: "/downloads/saas-ui.zip",
    lastUpdated: "2023-10-01",
    downloads: 1567,
    featured: true,
    rating: 4.9,
    reviews: 67,
    languages: ["English", "German", "French", "Spanish"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["Tailwind CSS", "React", "Node.js"],
    demoUrl: "https://demo.saas-ui.com",
    tags: ["saas", "dashboard", "tailwind", "ui", "modern"]
  },
  {
    id: 19,
    title: "Photography Portfolio",
    description: "Stunning portfolio template for photographers.",
    category: "Portfolio",
    price: 0,
    isFavorite: false,
    image: "/assets/images/photography-portfolio.jpg",
    features: [
      "Fullscreen gallery",
      "Image zoom",
      "Client area",
      "Contact form",
      "Social media integration"
    ],
    zipfile: "/downloads/photography-portfolio.zip",
    lastUpdated: "2023-10-17",
    downloads: 789,
    rating: 4.7,
    reviews: 41,
    languages: ["English", "French", "Italian"],
    supportedDevices: ["Desktop", "Tablet"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.photography-portfolio.com",
    tags: ["photography", "portfolio", "gallery", "creative", "responsive"]
  },
  {
    id: 4,
    title: "Agency One Page",
    description: "Stylish one-page layout for creative agencies.",
    category: "Agency",
    price: 10,
    isFavorite: false,
    image: "/assets/images/agency-template.jpg",
    features: [
      "Parallax scrolling",
      "Team member cards",
      "Portfolio grid",
      "Client logos section",
      "Animated stats"
    ],
    zipfile: "/downloads/agency-one-page.zip",
    lastUpdated: "2023-08-20",
    downloads: 2345,
    rating: 4.8,
    reviews: 56,
    languages: ["English", "Spanish", "German"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.agency-one-page.com",
    tags: ["agency", "creative", "one-page", "parallax", "modern"]
  },
  {
    id: 20,
    title: "Tech Blog",
    description: "Modern blog template for technology topics.",
    category: "Blog",
    price: 15,
    isFavorite: false,
    image: "/assets/images/tech-blog.jpg",
    features: [
      "Code highlighting",
      "Dark mode",
      "Author profiles",
      "Related articles",
      "Newsletter integration"
    ],
    zipfile: "/downloads/tech-blog.zip",
    lastUpdated: "2023-10-16",
    downloads: 543,
    rating: 4.6,
    reviews: 23,
    languages: ["English", "German", "Japanese"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.tech-blog.com",
    tags: ["tech", "blog", "code", "dark-mode", "modern"]
  },
  {
    id: 5,
    title: "Resume & CV Page",
    description: "Minimal design to showcase your resume.",
    category: "Resume",
    price: 0,
    isFavorite: false,
    image: "/assets/images/resume-template.jpg",
    features: [
      "Timeline layout",
      "Skills progress bars",
      "Downloadable PDF version",
      "Contact information section",
      "Social media links"
    ],
    zipfile: "/downloads/resume-template.zip",
    lastUpdated: "2023-07-15",
    downloads: 4567,
    rating: 4.9,
    reviews: 89,
    languages: ["English", "Spanish", "French"],
    supportedDevices: ["Desktop", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.resume-template.com",
    tags: ["resume", "cv", "minimal", "clean", "professional"]
  },
  {
    id: 21,
    title: "Startup Website",
    description: "Modern website template for tech startups.",
    category: "Business",
    price: 25,
    isFavorite: false,
    image: "/assets/images/startup-template.jpg",
    features: [
      "Product showcase",
      "Team section",
      "Investor relations",
      "Careers page",
      "Contact form"
    ],
    zipfile: "/downloads/startup-template.zip",
    lastUpdated: "2023-10-19",
    downloads: 654,
    rating: 4.5,
    reviews: 34,
    languages: ["English", "Spanish", "German"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript", "React"],
    demoUrl: "https://demo.startup-template.com",
    tags: ["startup", "tech", "modern", "responsive", "business"]
  },
  {
    id: 6,
    title: "eCommerce UI Kit",
    description: "Full eCommerce layout with cart and product listing.",
    category: "eCommerce",
    price: 25,
    isFavorite: false,
    image: "/assets/images/ecommerce-template.jpg",
    features: [
      "Product grid view",
      "Shopping cart",
      "Checkout process",
      "Product detail page",
      "User reviews section"
    ],
    zipfile: "/downloads/ecommerce-ui.zip",
    lastUpdated: "2023-10-10",
    downloads: 789,
    rating: 4.7,
    reviews: 45,
    languages: ["English", "French", "Italian"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript", "React"],
    demoUrl: "https://demo.ecommerce-template.com",
    tags: ["ecommerce", "shop", "cart", "responsive", "modern"]
  },
  {
    id: 22,
    title: "Artist Portfolio",
    description: "Creative portfolio template for artists.",
    category: "Portfolio",
    price: 0,
    isFavorite: false,
    image: "/assets/images/artist-portfolio.jpg",
    features: [
      "Gallery layout",
      "Artwork details",
      "Exhibition history",
      "Contact form",
      "Social media links"
    ],
    zipfile: "/downloads/artist-portfolio.zip",
    lastUpdated: "2023-10-14",
    downloads: 432,
    rating: 4.6,
    reviews: 28,
    languages: ["English", "Spanish", "French"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.artist-portfolio.com",
    tags: ["artist", "portfolio", "gallery", "creative", "modern"]
  },
  {
    id: 7,
    title: "Blog Template",
    description: "Modern blog layout with clean typography.",
    category: "Blog",
    price: 12,
    isFavorite: false,
    image: "/assets/images/blog-template.jpg",
    features: [
      "Article layout",
      "Author profile",
      "Comments section",
      "Related posts",
      "Search functionality"
    ],
    zipfile: "/downloads/blog-template.zip",
    lastUpdated: "2023-09-10",
    downloads: 1345,
    rating: 4.8,
    reviews: 67,
    languages: ["English", "German", "Japanese"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.blog-template.com",
    tags: ["blog", "modern", "clean", "responsive", "typography"]
  },
  {
    id: 23,
    title: "Bakery Website",
    description: "Sweet website template for bakeries.",
    category: "Food",
    price: 12,
    isFavorite: false,
    image: "/assets/images/bakery-template.jpg",
    features: [
      "Product showcase",
      "Online ordering",
      "Recipe blog",
      "Location map",
      "Special offers"
    ],
    zipfile: "/downloads/bakery-template.zip",
    lastUpdated: "2023-10-13",
    downloads: 567,
    rating: 4.5,
    reviews: 32,
    languages: ["English", "French", "Italian"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.bakery-template.com",
    tags: ["bakery", "food", "sweet", "responsive", "modern"]
  },
  {
    id: 25,
    title: "Pizza Shop",
    description: "Modern website for pizza delivery services.",
    category: "Food",
    price: 10,
    isFavorite: false,
    image: "/assets/images/pizza-template.jpg",
    features: [
      "Menu builder",
      "Online ordering",
      "Delivery tracker",
      "Coupon system",
      "Loyalty program"
    ],
    zipfile: "/downloads/pizza-shop.zip",
    lastUpdated: "2023-10-18",
    downloads: 321,
    rating: 4.4,
    reviews: 25,
    languages: ["English", "Spanish", "Italian"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://demo.pizza-shop.com",
    tags: ["pizza", "food", "delivery", "responsive", "modern"]
  },
  {
    id: 8,
    title: "Restaurant Menu",
    description: "Elegant menu design for restaurants and cafes.",
    category: "Food",
    price: 8,
    isFavorite: false,
    image: "/assets/images/restaurant-template.jpg",
    features: [
      "Menu categories",
      "Food gallery",
      "Reservation form",
      "Opening hours",
    ],
    zipfile: "/downloads/restaurant-menu.zip",
    lastUpdated: "2023-08-05",
    downloads: 987,
    rating: 4.7,
    reviews: 56,
    languages: ["English", "Spanish", "French", "German", "Italian"],
    supportedDevices: ["Desktop", "Tablet", "Mobile", "Smart TV"],
    techStack: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    demoUrl: "https://demo.restaurant-template.com",
    tags: ["restaurant", "menu", "food", "cafe", "responsive", "modern", "elegant"],
  },
  {
    id: 24,
    title: "eCommerce Fashion",
    description: "Modern eCommerce template for fashion stores.",
    category: "eCommerce",
    price: 30,
    isFavorite: false,
    image: "/assets/images/fashion-ecommerce.jpg",
    features: [
      "Product carousel",
      "Size guide",
      "Wishlist",
      "Customer reviews",
      "Lookbook"
    ],
    downloads: 765,
    zipfile: "/downloads/fashion-ecommerce.zip",
    lastUpdated: "2023-10-16",
    rating: 4.6,
    reviews: 38,
    languages: ["English", "French", "Italian"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript", "React"],
    demoUrl: "https://demo.fashion-ecommerce.com",
    tags: ["fashion", "ecommerce", "modern", "responsive", "shop"]
  },
  {
    id: 26,
    title: "Tech Gadgets Store",
    description: "Cutting-edge eCommerce template for tech products.",
    category: "eCommerce",
    price: 25,
    isFavorite: false,
    image: "/assets/images/tech-store.jpg",
    features: [
      "Product comparison",
      "Tech specs table",
      "Warranty info",
      "Accessories bundle",
      "Product videos"
    ],
    zipfile: "/downloads/tech-gadgets.zip",
    lastUpdated: "2023-10-19",
    downloads: 432,
    rating: 4.7,
    reviews: 41,
    languages: ["English", "German", "Japanese"],
    supportedDevices: ["Desktop", "Tablet", "Mobile"],
    techStack: ["HTML5", "CSS3", "JavaScript", "React"],
    demoUrl: "https://demo.tech-store.com",
    tags: ["tech", "gadgets", "ecommerce", "modern", "responsive"]
  },
];

export default templates;