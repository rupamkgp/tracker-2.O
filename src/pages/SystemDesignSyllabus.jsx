import React from 'react';
import { ArrowLeft } from 'lucide-react';

const SystemDesignSyllabus = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          onClick={() => setCurrentPage('goals')}
          style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%', color: 'var(--text-primary)', border: 'none', cursor: 'pointer' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="page-title">System Design Syllabus</h1>
          <p className="page-subtitle">Your comprehensive roadmap for High-Level and Low-Level System Architecture.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        
        <h2 style={{ color: 'var(--text-primary)', marginTop: '0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>0. Prerequisites</h2>
        <p>Before starting System Design, be comfortable with:</p>
        <ul>
          <li>OOP concepts, Git/GitHub</li>
          <li>Basic networking, HTTP/HTTPS, REST APIs</li>
          <li>SQL basics, NoSQL basics</li>
          <li>Operating-system fundamentals, Basic cloud concepts, DSA fundamentals</li>
          <li>One backend language: C++, Java, Python, JavaScript/Node.js, or Go</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Introduction to System Design</h2>
        <ul>
          <li><strong>What is System Design?</strong> Software architecture, Design vs coding, LLD vs HLD</li>
          <li><strong>Requirements & Constraints:</strong> Functional/Non-functional requirements, Assumptions, Scalability, Reliability, Availability, Maintainability, Performance, Security</li>
          <li><strong>Low-Level Design (LLD):</strong> Classes, Objects, Interfaces, Design patterns, SOLID, UML</li>
          <li><strong>High-Level Design (HLD):</strong> Services, Databases, APIs, Caches, Load balancers, Queues, Distributed systems, Infrastructure</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2. System Design Fundamentals</h2>
        <ul>
          <li><strong>Requirements Gathering:</strong> Convert vague problems into engineering requirements (Functional vs Non-functional).</li>
          <li><strong>Capacity Estimation:</strong> Users (DAU, MAU), Requests per second (RPS/QPS), Read/write ratio, Storage, Bandwidth, Memory, Traffic estimation, Peak-to-average ratio.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>3. Networking Fundamentals</h2>
        <ul>
          <li><strong>Internet Fundamentals:</strong> IPv4/IPv6, MAC address, Ports, DNS, Domain names, Routers, NAT, Firewalls</li>
          <li><strong>HTTP/HTTPS:</strong> Request/Response, Methods (GET, POST, PUT, PATCH, DELETE), Status codes, Headers, Cookies, Sessions, HTTP versions, TLS, SSL, Certificates, Encryption, Handshake</li>
          <li><strong>TCP vs UDP:</strong> Connection-oriented vs Connectionless, Reliability, Ordering, Flow control, Congestion control</li>
          <li><strong>WebSockets:</strong> Persistent connections, Real-time communication (Chat, Gaming, Live updates)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>4. API Design</h2>
        <ul>
          <li><strong>REST API:</strong> Resource-oriented, Endpoints, Methods, Status codes, Pagination, Filtering, Sorting</li>
          <li><strong>Best Practices:</strong> Naming conventions, Versioning, Rate limiting, Auth, Error handling, Idempotency</li>
          <li><strong>GraphQL & gRPC:</strong> Queries, Mutations, Resolvers, Protocol Buffers, Internal microservice communication</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>5-8. Databases & Scaling</h2>
        <ul>
          <li><strong>Relational Databases:</strong> Tables, Rows, Columns, Keys, Constraints, Indexes, Joins, Transactions, Normalization</li>
          <li><strong>Database Internals:</strong> Storage engines, Indexing (B-Tree, B+ Tree, Hash), Query Optimization (Execution plan, Full table scan vs Index scan), ACID, Isolation Levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable), Concurrency Problems</li>
          <li><strong>NoSQL Databases:</strong> Document (MongoDB), Key-value (Redis, DynamoDB), Wide-column (Cassandra), Graph (Neo4j), CAP theorem, Consistency</li>
          <li><strong>Database Scaling:</strong> Vertical vs Horizontal scaling, Replication (Synchronous, Asynchronous, Leader-follower), Sharding (Horizontal partitioning, Consistent hashing, Hot partitions)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>9-12. Caching, CDNs, & Load Balancing</h2>
        <ul>
          <li><strong>Caching:</strong> Redis/Memcached, Cache-aside, Read-through, Write-through, Write-back, Cache Eviction (LRU, LFU, TTL), Cache Problems (Stampede, Penetration, Avalanche, Hot keys)</li>
          <li><strong>CDN:</strong> Edge servers, Origin server, Cache invalidation, Geographic distribution for static content</li>
          <li><strong>Load Balancing:</strong> Algorithms (Round Robin, Least Connections, IP Hash, Consistent Hashing), Layer 4 vs Layer 7, Health checks, Failover, Sticky sessions</li>
          <li><strong>Proxies:</strong> Forward Proxy vs Reverse Proxy (Nginx, TLS termination, Load balancing, Compression)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>13-14. Message Queues & Kafka</h2>
        <ul>
          <li><strong>Message Queues:</strong> Kafka, RabbitMQ, SQS, Asynchronous processing, Decoupling, Load smoothing</li>
          <li><strong>Kafka Deep Dive:</strong> Broker, Producer, Consumer, Topic, Partition, Offset, Consumer group, Replication, Delivery semantics (At-most-once, At-least-once, Exactly-once)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>15-18. Distributed Systems Core</h2>
        <ul>
          <li><strong>Distributed Concepts:</strong> Fault tolerance, CAP Theorem (Consistency, Availability, Partition tolerance)</li>
          <li><strong>Consistency Models:</strong> Strong, Eventual, Read-after-write, Monotonic reads, Causal, Session consistency</li>
          <li><strong>Consensus & Locking:</strong> Leader election, Raft, Paxos, Quorum, ZooKeeper, etcd</li>
          <li><strong>Distributed Transactions:</strong> Two-phase commit, Saga pattern, Compensating transactions</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>19-25. Microservices, Reliability, & Security</h2>
        <ul>
          <li><strong>Microservices Architecture:</strong> Monolith vs Microservices, Service boundaries, API gateway, Database per service</li>
          <li><strong>Service Discovery & API Gateway:</strong> Client-side/Server-side discovery, Consul, Eureka, Request routing, Rate limiting, Logging</li>
          <li><strong>Reliability & Fault Tolerance:</strong> Redundancy, Failover, Heartbeats, Circuit breakers, Retries (Exponential backoff, Jitter), Bulkheads</li>
          <li><strong>Rate Limiting:</strong> Fixed window, Sliding window, Token bucket, Leaky bucket</li>
          <li><strong>Authentication & Security:</strong> JWT, OAuth 2.0, RBAC, Encryption (at rest/in transit), Hashing, XSS, CSRF, SQLi, SSRF, DDoS protection</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>26-31. Storage, Search, & Observability</h2>
        <ul>
          <li><strong>Storage Systems:</strong> Block (SSD/HDD), Object (S3), File Storage, Metadata, Distributed File Systems (HDFS)</li>
          <li><strong>Search Systems:</strong> Full-text search, Inverted index, Tokenization, Elasticsearch</li>
          <li><strong>Observability:</strong> Logs (ELK stack), Metrics (CPU, Memory, Latency, Throughput), Traces (Trace ID, Spans)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>32-43. Advanced Architecture Patterns</h2>
        <ul>
          <li><strong>Event-Driven & CQRS:</strong> Event sourcing, Pub/Sub, Read/write model separation</li>
          <li><strong>Background Jobs & Processing:</strong> Workers, Scheduled jobs, Dead-letter queues, Media processing (Video transcoding, Image resizing)</li>
          <li><strong>Real-Time Systems:</strong> WebSockets, Long polling, Server-Sent Events, Pub/Sub (Chat, Multiplayer games)</li>
          <li><strong>Pagination & Unique IDs:</strong> Offset vs Cursor pagination, UUID, Snowflake IDs</li>
          <li><strong>Idempotency & Locking:</strong> Retry-safe operations, Distributed locking (Redis locks, ZooKeeper locks)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>44-48. Scalability, Cloud, & Case Studies</h2>
        <ul>
          <li><strong>Cloud & Infra:</strong> AWS (EC2, S3, RDS, DynamoDB), Containers (Docker, Kubernetes, Pods, Deployments)</li>
          <li><strong>Deployment:</strong> Rolling, Blue-green, Canary, Feature flags, CI/CD</li>
          <li><strong>Case Studies (Beginner to Advanced):</strong> URL Shortener, Rate Limiter, Instagram, Twitter, Uber, Netflix, Google Search</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>49-51. Low-Level Design (LLD) & Interview Framework</h2>
        <ul>
          <li><strong>SOLID & Design Patterns:</strong> Creational (Singleton, Factory, Builder), Structural (Adapter, Decorator, Facade), Behavioral (Strategy, Observer)</li>
          <li><strong>LLD Case Studies:</strong> Parking Lot, Elevator, ATM, Chess, Vending Machine</li>
          <li><strong>The HLD Framework:</strong> 1. Clarify Requirements → 2. Functional Requirements → 3. Non-functional Requirements → 4. Capacity Estimation → 5. API Design → 6. Data Model → 7. High-Level Architecture → 8. Deep Dive → 9. Bottlenecks → 10. Scaling → 11. Trade-offs</li>
        </ul>

        <div style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}>🧠 Most Important Principle</h3>
          <p style={{ margin: 0 }}>
            Don't learn System Design as a list of technologies. Instead learn: <strong>Requirement → Constraint → Bottleneck → Solution → Trade-off</strong>.
            <br/><br/>
            For example: 10 million users → database overloaded → introduce cache → reduce DB reads → but deal with stale data.
            <br/><br/>
            That is the actual System Design mindset.
          </p>
        </div>

      </div>
    </div>
  );
};

export default SystemDesignSyllabus;
