// Portfolio content lives here so project facts can be edited in one place.
export const projects = [
  {
    id: 'aerotrack',
    title: 'AeroTrack',
    tagline: 'High-throughput distributed telemetry pipeline',
    description: 'An event-driven Go pipeline for ingesting, processing, and acting on vehicle telemetry.',
    shortDescription: 'Go, Kafka, TimescaleDB, and Redis telemetry processing with resilient background consumption.',
    technologies: ['Go', 'Apache Kafka', 'TimescaleDB', 'Redis', 'Docker', 'k6'],
    github: 'https://github.com/AzmeerX/AeroTrack',
    demo: null,
    featured: true,
    details: {
      overview: 'AeroTrack is a distributed telemetry pipeline that ingests vehicle events, processes them asynchronously, and supports fast location lookups and intelligent alerts.',
      problem: 'Telemetry systems must keep ingesting data during traffic spikes while separating request latency from slower storage and processing work.',
      solution: 'I built an event-driven pipeline in Go with bounded channel buffers and a worker pool for ingestion, plus a background Kafka consumer that persists events and updates cache-backed state.',
      architecture: {
        components: [
          { name: 'Telemetry ingestion service', description: 'Accepts events and uses bounded channel buffers with a worker pool.' },
          { name: 'Apache Kafka', description: 'Decouples ingestion from asynchronous event processing.' },
          { name: 'Background processor', description: 'Consumes telemetry events and writes to TimescaleDB and Redis.' },
          { name: 'TimescaleDB', description: 'Stores processed telemetry data.' },
          { name: 'Redis', description: 'Provides fast cached location lookups for alert evaluation.' },
          { name: 'Alert engine', description: 'Uses Gemini-powered alerts with a rule-based fallback during API timeouts.' }
        ],
        dataFlow: 'Telemetry event → Go ingestion → Kafka → background processor → TimescaleDB + Redis → alert evaluation'
      },
      implementation: {
        ingestion: 'Go ingestion pipeline using bounded channel buffers and a worker-pool pattern.',
        processing: 'Resilient Kafka consumer that persists telemetry to TimescaleDB and Redis.',
        testing: 'Dependency injection and Go interfaces isolate Kafka, Redis, and AI dependencies for table-driven unit tests without containers.',
        alerts: 'Redis-backed location lookups and an automated rule-based fallback when the Gemini API times out.',
        deployment: 'Dockerized pipeline deployed on an Azure VM.'
      },
      technologyChoices: [
        'Go for concurrent ingestion and testable service boundaries.',
        'Apache Kafka to separate producers from background processing.',
        'TimescaleDB for persistent telemetry storage and Redis for low-latency cached access.',
        'k6 for repeatable load testing.'
      ],
      challenges: [
        'Balancing throughput and latency with bounded buffers and a worker pool.',
        'Maintaining reliable processing during peak traffic spikes.',
        'Keeping alert evaluation available when a third-party AI API times out.'
      ],
      whatIBuilt: [
        'The Go ingestion pipeline and worker-pool concurrency pattern.',
        'Kafka-to-TimescaleDB and Redis background processing.',
        'Dependency-injected, table-driven unit tests for core services.',
        'The fault-tolerant alert flow with Gemini integration and a rule-based fallback.'
      ],
      results: [
        '5.25 ms p95 latency at approximately 550 RPS under a 100 virtual-user k6 test.',
        '3.7× throughput increase over synchronous database writes.',
        'Processed more than 48,000 events with 0% data loss and zero consumer lag during peak traffic spikes.',
        'Redis-backed location lookups completed in sub-millisecond time.'
      ]
    }
  },
  {
    id: 'url-shortener',
    title: 'Scalable URL Shortener',
    tagline: 'Low-latency URL redirects with caching and rate limiting',
    description: 'A containerized URL-shortening service built around a C++ Drogon backend, PostgreSQL, Redis, and Nginx.',
    shortDescription: 'Horizontally scaled C++ URL shortener with Base62 encoding, Redis caching, and TTL expiry.',
    technologies: ['C++', 'Drogon', 'React', 'PostgreSQL', 'Redis', 'Docker', 'Nginx', 'k6'],
    github: 'https://github.com/AzmeerX/Url-Shortener',
    demo: null,
    featured: false,
    details: {
      overview: 'A high-performance URL shortener that creates and resolves compact links through a C++ backend with caching, expiry, and per-IP rate limiting.',
      problem: 'A URL-shortening service needs fast redirect lookups while limiting abuse and supporting a deployment that can scale across replicas.',
      solution: 'I built the backend with Drogon, used Base62 encoding for short codes, introduced Redis caching, and deployed three replicas behind Nginx with Docker Compose.',
      architecture: {
        components: [
          { name: 'React client', description: 'User-facing interface for the URL shortener.' },
          { name: 'Drogon API', description: 'C++ backend for short-code creation and redirect handling.' },
          { name: 'Redis', description: 'Caches redirects for fast repeated lookups.' },
          { name: 'PostgreSQL', description: 'Persists shortened URLs and expiry data.' },
          { name: 'Nginx + replicas', description: 'Routes traffic across three horizontally scaled backend replicas.' }
        ],
        dataFlow: 'Request → Nginx → Drogon replica → Redis cache or PostgreSQL → redirect / response'
      },
      implementation: {
        shortCodes: 'Base62 encoding with TTL expiry.',
        caching: 'Redis caching for redirect lookups.',
        protection: 'Per-IP rate limiting.',
        deployment: 'Docker Compose with Nginx and three horizontally scaled replicas.'
      },
      challenges: ['Balancing fast cached redirects with persistent URL storage.', 'Applying per-IP limits while keeping the service responsive across replicas.'],
      whatIBuilt: ['C++ Drogon backend and React frontend.', 'Base62 short-code generation with TTL expiry.', 'Redis cache layer, PostgreSQL storage, and per-IP rate limiting.', 'Docker Compose and Nginx deployment configuration.'],
      results: ['Approximately 80% cache-hit ratio under load.', 'Approximately 50 ms response time with 100 concurrent users in k6 testing.']
    }
  },
  {
    id: 'chat-app',
    title: 'Real-Time Chat Application',
    tagline: 'Encrypted, presence-aware messaging',
    description: 'A real-time messaging application with Socket.io, Redis-backed presence, encrypted messages, and a React frontend.',
    shortDescription: 'Socket.io messaging with Redis presence, RSA + AES encryption, Docker, Render, and Vercel.',
    technologies: ['Node.js', 'Express', 'Socket.io', 'MongoDB', 'Redis', 'Docker', 'React'],
    github: 'https://github.com/AzmeerX/scalable-chat',
    demo: 'https://scalable-chat-app-three.vercel.app/',
    featured: false,
    details: {
      overview: 'A real-time chat application focused on responsive messaging, user presence, typing indicators, and secure message handling.',
      solution: 'I designed a Socket.io backend, tracked presence in Redis, persisted messages in MongoDB, and paired it with a React frontend.',
      architecture: {
        components: [
          { name: 'React frontend', description: 'Client interface for real-time conversations.' },
          { name: 'Express + Socket.io backend', description: 'Handles live messaging and socket events.' },
          { name: 'Redis', description: 'Tracks user presence and supports typing indicators.' },
          { name: 'MongoDB', description: 'Stores messages with indexed queries.' }
        ],
        dataFlow: 'Client → Socket.io backend → MongoDB; presence and typing state → Redis → connected clients'
      },
      implementation: {
        realtime: 'Socket.io messaging with Redis presence tracking and typing indicators.',
        security: 'RSA + AES encryption for messages and rate limiting for request protection.',
        data: 'MongoDB query optimization through indexing.',
        deployment: 'Dockerized application with the backend deployed on Render and the frontend on Vercel.'
      },
      challenges: ['Synchronizing live presence and typing state.', 'Protecting messages while preserving a real-time user experience.'],
      whatIBuilt: ['Socket.io messaging backend and React frontend.', 'Redis-backed presence tracking and typing indicators.', 'RSA + AES message encryption, rate limiting, and indexed MongoDB queries.', 'Docker deployment setup for Render and Vercel.']
    }
  }
]

export const skills = {
  languages: ['C++', 'Go', 'JavaScript', 'SQL'],
  backend: ['Node.js', 'Express.js', 'Drogon', 'REST APIs', 'Socket.io'],
  distributedSystems: ['Apache Kafka'],
  databasesAndCaching: ['PostgreSQL', 'MongoDB', 'Redis'],
  devOpsAndTools: ['Docker', 'Docker Compose', 'Nginx', 'Git', 'GitHub', 'Postman', 'k6'],
  fundamentals: ['DSA', 'OOP', 'Operating Systems', 'Computer Networks']
}

export const contact = {
  email: 'azmeerfarhan786@gmail.com',
  github: 'https://github.com/AzmeerX',
  linkedin: 'https://linkedin.com/in/azmeer-farhan-320040290'
}

export const about = {
  name: 'Azmeer Farhan',
  title: 'Backend & Distributed Systems Engineer',
  bio: 'Computer Science student focused on backend engineering, distributed systems, and performance-conscious software.',
  education: { school: 'Computer Science student', focus: 'Backend engineering and distributed systems' },
  interests: ['Distributed systems', 'Backend architecture', 'Event-driven systems', 'System performance and optimization', 'Database design', 'Open source software']
}
