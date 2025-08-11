import { Logo } from "@once-ui-system/core";

const company = {
  name: "DevOtaku",
  tagline: "Innovative software development solutions",
  email: "hello@devotaku.com",
  phone: "+46 (0) 123 456 789",
  location: "Stockholm, Sweden",
  description: "A dynamic software development team delivering cutting-edge web applications, AI solutions, and custom software tailored to modern business needs.",
  founded: "2024",
  teamName: "Team Kanyaraasi"
};


const newsletter = {
  display: true,
  title: <>Stay Updated with DevOtaku</>,
  description: (
    <>
      Get insights on modern web development, AI integration, and the latest technologies from our Stockholm-based development team.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/devotaku",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/devotaku",
  },
  {
    name: "Twitter",
    icon: "twitter",
    link: "https://twitter.com/devotaku",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${company.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `DevOtaku - Stockholm Software Development Studio`,
  description: `Professional software development services in Stockholm. We build modern websites, AI agents, MCP agents, and custom solutions for businesses worldwide.`,
  headline: <>Modern Software<br/>Development Solutions</>,
  featured: {
    display: false,
    title: <>Featured: <strong className="ml-4">Custom AI Agent Development</strong></>,
    href: "/services",
  },
  subline: (
    <>
      We deliver innovative software solutions that drive business growth. Specializing in modern web applications, AI integration, and custom development tailored to your specific needs.
    </>
  ),
  cta: {
    primary: {
      text: "Get Started",
      href: "/contact"
    },
    secondary: {
      text: "View Our Work",
      href: "/work"
    }
  }
};

const about = {
  path: "/about",
  label: "About",
  title: `About DevOtaku - Stockholm Software Development Studio`,
  description: `Learn about DevOtaku's mission, our expert team, and how we deliver cutting-edge software solutions from Stockholm to clients worldwide.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Building the Future of Software",
    description: (
      <>
        DevOtaku is a Stockholm-based software development team specializing in modern web applications, AI solutions, and custom digital products. We combine technical expertise with innovative approaches to deliver software that creates real business impact.
      </>
    ),
  },
  work: {
    display: true,
    title: "Our Journey & Achievements",
    experiences: [
      {
        company: "DevOtaku",
        timeframe: "2024 - Present",
        role: "Software Development Studio",
        achievements: [
          <>
            Founded DevOtaku as Stockholm's premier destination for cutting-edge software development services.
          </>,
          <>
            Specialized in AI agent development, helping businesses automate processes and enhance customer experiences.
          </>,
          <>
            Delivered 50+ successful projects ranging from e-commerce platforms to enterprise AI solutions.
          </>,
          <>
            Established partnerships with startups and enterprises across Scandinavia and Europe.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Our Technical Expertise",
    skills: [
      {
        title: "Web Development",
        description: <>Modern, responsive websites and web applications using Next.js, React, and TypeScript.</>,
        images: [],
      },
      {
        title: "AI & Machine Learning",
        description: <>Custom AI agents, MCP agents, and intelligent automation solutions using cutting-edge AI technologies.</>,
        images: [],
      },
      {
        title: "Backend & Cloud",
        description: <>Scalable backend systems, APIs, and cloud infrastructure on AWS, GCP, and Azure.</>,
        images: [],
      },
      {
        title: "Mobile Development",
        description: <>Cross-platform mobile applications using React Native and modern development frameworks.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `DevOtaku Blog: Insights & Innovations`,
  description: `Expert insights on modern web development, AI integration, and technology trends from our Stockholm-based development team.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
  features: {
    multiAuthor: true,
    categories: ["Development", "AI & ML", "Business", "Stockholm Tech"],
    tags: true,
    featured: true
  }
};

const work = {
  path: "/work",
  label: "Work",
  title: `Our Portfolio - Successful Projects & Case Studies`,
  description: `Explore our diverse portfolio of web applications, AI agents, and custom software solutions delivered for clients worldwide.`,
  // Create new project pages by adding a new .mdx file to app/work/projects
  // All projects will be listed on the /home and /work routes
};

const services = {
  path: "/services",
  label: "Services",
  title: `Professional Software Development Services`,
  description: `From modern web applications to intelligent AI agents, we deliver comprehensive software solutions tailored to your business needs.`,
  offerings: [
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with cutting-edge technologies",
      features: ["Next.js & React Applications", "E-commerce Platforms", "Progressive Web Apps", "RESTful & GraphQL APIs", "Responsive Design", "Performance Optimization"],
      portfolio: "Explore our web development portfolio featuring modern e-commerce platforms, SaaS applications, and enterprise websites that deliver exceptional user experiences."
    },
    {
      title: "AI Agent Development",
      description: "Custom AI agents and intelligent automation solutions for modern businesses",
      features: ["MCP Agent Development", "ChatGPT Integration", "Process Automation", "Custom AI Solutions", "Natural Language Processing", "Machine Learning Integration"],
      portfolio: "Discover our AI agent implementations including customer service bots, data processing automation, and intelligent workflow systems that transform business operations."
    },
    {
      title: "Cloud Solutions & Deployment",
      description: "Scalable cloud infrastructure and deployment services for reliable applications",
      features: ["AWS & Azure Deployment", "Docker Containerization", "Kubernetes Orchestration", "CI/CD Pipelines", "Auto-scaling Solutions", "Performance Monitoring"],
      portfolio: "View our cloud infrastructure projects showcasing high-availability deployments, serverless architectures, and scalable solutions handling millions of requests."
    },
    {
      title: "Full-Stack Software Development",
      description: "Complete end-to-end application development with modern architecture",
      features: ["Backend Development (Node.js, Python)", "Database Design & Optimization", "Microservices Architecture", "Third-party Integrations", "Security Implementation", "Maintenance & Support"],
      portfolio: "Browse our full-stack applications including fintech platforms, healthcare systems, and enterprise tools built with robust, scalable architectures."
    },
    {
      title: "DevOps & Infrastructure",
      description: "Streamlined development operations and infrastructure management",
      features: ["Infrastructure as Code", "Automated Testing", "Load Balancing", "Security Audits", "Backup & Recovery", "System Monitoring"],
      portfolio: "See our DevOps implementations featuring automated deployment pipelines, monitoring dashboards, and infrastructure solutions that ensure 99.9% uptime."
    },
    {
      title: "Technical Consulting",
      description: "Expert technical guidance and strategic planning for your software projects",
      features: ["Architecture Planning", "Technology Selection", "Code Reviews", "Team Training", "Performance Audits", "Migration Strategies"],
      portfolio: "Review our consulting case studies including successful cloud migrations, performance optimizations, and technology modernization projects across various industries."
    }
  ]
};

const contact = {
  path: "/contact",
  label: "Contact",
  title: `Get in Touch - Let's Build Something Amazing`,
  description: `Ready to transform your ideas into powerful software solutions? Contact our Stockholm-based team for a free consultation and project discussion.`,
  info: {
    email: company.email,
    phone: company.phone,
    location: company.location,
    timezone: "CET (UTC+1)"
  },
  availability: {
    title: "When We're Available",
    schedule: [
      "Monday - Friday: 9:00 - 18:00 CET",
      "Weekend: Emergency support only",
      "Response time: Within 24 hours"
    ]
  }
};

const testimonials = {
  display: true,
  title: "What Our Clients Say",
  reviews: [
    {
      name: "Sarah Johnson",
      role: "CTO, TechStart AB",
      content: "DevOtaku delivered an exceptional AI agent that transformed our customer service. Their expertise in modern technologies is outstanding.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Founder, Nordic Solutions",
      content: "Professional, reliable, and innovative. The team understood our complex requirements and delivered beyond expectations.",
      rating: 5
    },
    {
      name: "Anna Lindström",
      role: "Product Manager, Stockholm Ventures",
      content: "Working with DevOtaku was a game-changer. They built our platform with incredible attention to detail and performance.",
      rating: 5
    }
  ]
};

export { company, social, newsletter, home, about, blog, work, services, contact, testimonials };