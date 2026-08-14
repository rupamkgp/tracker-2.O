import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CSSyllabus = ({ setCurrentPage }) => {
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
          <h1 className="page-title">CS Fundamentals Syllabus</h1>
          <p className="page-subtitle">Core subjects that companies commonly test in OA, technical interviews, and internships.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        
        <h2 style={{ color: 'var(--text-primary)', marginTop: '0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Operating Systems (OS)</h2>
        <ul>
          <li><strong>OS Basics:</strong> What is an OS?, Kernel vs Shell, User mode vs Kernel mode, System calls, Types of OS (Batch, Multiprogramming, Multitasking, Multiprocessing, Distributed, Real-time), OS services, Boot process</li>
          <li><strong>Processes:</strong> Program vs Process, Process states, PCB, Process creation/termination, Parent/child, Context switching, Process scheduling, CPU burst and I/O burst</li>
          <li><strong>Threads:</strong> Process vs Thread, User-level vs Kernel-level, Multithreading models, Benefits/disadvantages, Thread pools</li>
          <li><strong>CPU Scheduling:</strong> FCFS, SJF, SRTF, Priority Scheduling, Round Robin, Multilevel Queue, Multilevel Feedback Queue, Preemptive vs Non-preemptive, Waiting time, Turnaround time, Response time, Throughput</li>
          <li><strong>Process Synchronization:</strong> Race condition, Critical section, Mutual exclusion, Progress, Bounded waiting, Mutex, Semaphore, Binary/Counting semaphore, Monitor, Spinlock, Peterson's solution</li>
          <li><strong>Deadlocks:</strong> What is deadlock?, Necessary conditions, Resource Allocation Graph, Prevention, Avoidance, Banker's Algorithm, Detection, Recovery</li>
          <li><strong>Memory Management:</strong> Logical vs Physical address, Address binding, Contiguous allocation, Fragmentation (Internal, External), Paging, Page table, Multi-level paging, TLB, Segmentation</li>
          <li><strong>Virtual Memory:</strong> Demand paging, Page fault, Page replacement (FIFO, Optimal, LRU, Clock), Thrashing, Working set, Frame allocation</li>
          <li><strong>File Systems:</strong> File concepts, attributes, operations, Directory structures, File allocation (Contiguous, Linked, Indexed), Free-space management, Inodes, File permissions</li>
          <li><strong>Storage & I/O:</strong> Disk structure, Disk scheduling (FCFS, SSTF, SCAN, C-SCAN, LOOK, C-LOOK), RAID, Buffering, Caching, Spooling, DMA, Interrupts</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2. Database Management Systems (DBMS)</h2>
        <ul>
          <li><strong>Database Basics:</strong> Data vs Information, DBMS vs RDBMS, Database architecture, Schema vs Instance, Data independence, Three-schema architecture</li>
          <li><strong>Relational Model:</strong> Tables, Rows/Tuples, Columns/Attributes, Domains, Relationships, Keys (Super, Candidate, Primary, Foreign, Alternate, Composite)</li>
          <li><strong>ER Model:</strong> Entity, Entity set, Attribute, Relationship, Cardinality, Participation, Weak/Strong entity, ER diagrams, ER → Relational conversion</li>
          <li><strong>SQL Basics:</strong> SELECT, WHERE, DISTINCT, ORDER BY, LIMIT, Aliases, Filtering (AND, OR, NOT, IN, BETWEEN, LIKE, IS NULL)</li>
          <li><strong>SQL Aggregation & Joins:</strong> COUNT, SUM, AVG, MIN, MAX, GROUP BY, HAVING, Joins (INNER, LEFT, RIGHT, FULL OUTER, CROSS, SELF)</li>
          <li><strong>Advanced SQL:</strong> Subqueries, Correlated subqueries, CTE, Recursive CTE, Window functions (RANK, DENSE_RANK, ROW_NUMBER, LEAD, LAG)</li>
          <li><strong>SQL Modification/Definition:</strong> INSERT, UPDATE, DELETE, MERGE, CREATE, ALTER, DROP, TRUNCATE</li>
          <li><strong>Normalization:</strong> Functional dependency, Attribute closure, Candidate keys, 1NF, 2NF, 3NF, BCNF, 4NF, 5NF, Denormalization, Lossless decomposition, Dependency preservation</li>
          <li><strong>Transactions & Concurrency:</strong> ACID properties, Commit, Rollback, Savepoint, Serial vs Non-serial schedule, Conflict/View serializability, Precedence graph, Locks (Shared, Exclusive, 2PL, Strict 2PL), Deadlocks in DBMS, Timestamp ordering, MVCC</li>
          <li><strong>Indexing & Query Processing:</strong> Primary/Secondary, Clustered/Non-clustered, Dense/Sparse, B-Tree, B+ Tree, Hash indexing, Composite/Covering indexes, Query parsing, Query optimization, Execution plans</li>
          <li><strong>NoSQL:</strong> SQL vs NoSQL, Key-value, Document, Column, Graph databases, CAP theorem, Eventual consistency, MongoDB basics</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>3. Computer Networks</h2>
        <ul>
          <li><strong>Networking Basics:</strong> LAN, MAN, WAN, Internet, Intranet, Network topology (Client-server, Peer-to-peer)</li>
          <li><strong>OSI Model:</strong> Physical, Data Link, Network, Transport, Session, Presentation, Application</li>
          <li><strong>TCP/IP Model:</strong> Application, Transport, Internet, Network Access</li>
          <li><strong>Physical & Data Link Layer:</strong> Bits, Signals, Encoding, Ethernet, MAC address, ARP, Frames, Switches, Hubs, Bridges, VLAN, CSMA/CD, CSMA/CA</li>
          <li><strong>Network Layer:</strong> IP addressing (IPv4, IPv6, Public/Private), Subnetting, CIDR, Subnet masks, Default gateway, Routing (Static/Dynamic, Distance Vector, Link State, Dijkstra, RIP, OSPF, BGP basics), NAT, ICMP</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>4. Transport Layer</h2>
        <ul>
          <li><strong>TCP:</strong> Connection-oriented, 3-way handshake (SYN, SYN-ACK, ACK), 4-way termination, Sequence numbers, Acknowledgements, Retransmission, Flow control</li>
          <li><strong>TCP Congestion Control:</strong> Slow start, Congestion avoidance, Fast retransmit, Fast recovery</li>
          <li><strong>UDP:</strong> Connectionless, Datagram, Advantages/Disadvantages, UDP vs TCP, Use cases</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>5. Application Layer</h2>
        <ul>
          <li><strong>HTTP:</strong> Request/Response, Methods (GET, POST, PUT, PATCH, DELETE), Headers, Status codes, Cookies, Sessions, Caching, HTTP/1.1, HTTP/2, HTTP/3</li>
          <li><strong>HTTPS & Security:</strong> SSL/TLS, Certificates, Encryption, Public/private keys, TLS handshake</li>
          <li><strong>DNS:</strong> Domain names, Resolver, Hierarchy, Root server, TLD server, Authoritative server, Caching, Records (A, AAAA, CNAME, MX)</li>
          <li><strong>Other protocols:</strong> FTP, SMTP, IMAP, POP3, SSH, DHCP, WebSocket</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>6. Object-Oriented Programming (OOP)</h2>
        <ul>
          <li><strong>Fundamentals:</strong> Class, Object, Attribute, Method, Constructor, Destructor, Instance, Static members</li>
          <li><strong>Four Pillars:</strong> Encapsulation, Abstraction, Inheritance, Polymorphism (Compile-time vs Runtime)</li>
          <li><strong>Advanced OOP:</strong> this pointer, super, Static members, Friend functions/classes, Virtual functions, Pure virtual functions, Abstract classes, Interfaces, Multiple inheritance, Diamond problem, Virtual inheritance, Composition, Aggregation, Association, Shallow vs deep copy</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>7. C++ / Programming Fundamentals</h2>
        <ul>
          <li><strong>C++ Core:</strong> Variables, Types, Operators, Conditions, Loops, Functions, Pointers, References, Arrays, Strings, Structures, Classes, Templates, Exception handling, Namespaces, const, static, inline</li>
          <li><strong>Memory:</strong> Stack, Heap, Dynamic memory (new, delete), Smart pointers (unique_ptr, shared_ptr, weak_ptr)</li>
          <li><strong>STL:</strong> vector, deque, list, stack, queue, priority_queue, set, multiset, map, unordered_map, unordered_set, iterators, algorithms, lambda functions</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>8. Computer Architecture</h2>
        <ul>
          <li><strong>Basics & CPU:</strong> ALU, Control Unit, Registers, Instruction cycle (Fetch, Decode, Execute), PC, IR, SP</li>
          <li><strong>Memory Hierarchy:</strong> Registers → Cache → RAM → SSD/HDD, Latency, Capacity, Cost, Locality</li>
          <li><strong>Cache:</strong> Hit/Miss, Hit ratio, L1/L2/L3, Mapping (Direct, Fully associative, Set associative)</li>
          <li><strong>Pipelining & Parallelism:</strong> Pipeline stages, Hazards (Structural, Data, Control), Branch prediction, Multicore, SIMD, MIMD, ILP, TLP</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>9. Software Engineering & 10. Testing</h2>
        <ul>
          <li><strong>SDLC:</strong> Waterfall, Agile, Scrum, Kanban, Requirements, Design, Implementation, Testing, Deployment, Maintenance</li>
          <li><strong>Version Control (Git):</strong> init, clone, add, commit, push, pull, fetch, branch, merge, rebase, stash, reset, revert, Merge conflicts, PRs, CI/CD basics</li>
          <li><strong>Testing:</strong> Unit, Integration, System, Acceptance, Regression, Smoke, Black-box, White-box, Test cases, Coverage, Mocking, Debugging</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>11-13. Systems & Distributed Architecture</h2>
        <ul>
          <li><strong>Compiler Basics:</strong> Compiler vs Interpreter, Lexical/Syntax/Semantic Analysis, AST, Symbol table, Static/Dynamic linking</li>
          <li><strong>OS-Level Programming:</strong> fork(), exec(), wait(), Pipes, Signals, IPC, Shared memory, Message queues, Sockets, File descriptors</li>
          <li><strong>Distributed Systems:</strong> Scalability, Availability, Reliability, Fault tolerance, Replication, Partitioning, Sharding, Load balancing, CAP theorem, Consistency models, Quorum, Redis, Kafka, Zookeeper</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>14-17. Web, System Design & Security</h2>
        <ul>
          <li><strong>Web Fundamentals:</strong> Browser architecture, DOM, Rendering, Cookies, Local/Session storage, REST API, JSON, Auth, JWT, OAuth</li>
          <li><strong>System Design:</strong> Client, Server, Cache, Load balancer, Message queue, CDN, Object storage, Vertical/Horizontal scaling, Stateless servers, Read replicas, Circuit breaker, Idempotency</li>
          <li><strong>Security:</strong> Cryptography (Encryption, Decryption, Symmetric, Asymmetric), Hashing, Digital signatures, AES, RSA, SHA, MFA, XSS, CSRF, SQL Injection, CORS</li>
          <li><strong>Linux/CLI:</strong> ls, cd, pwd, mkdir, rm, cp, mv, cat, grep, find, awk, sed, ps, top, kill, ping, curl, chmod, chown</li>
        </ul>

        <div style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}>Most Important Interview Questions</h3>
          <p style={{ margin: 0 }}>
            After completing the syllabus, you should be able to answer questions such as:
          </p>
          <ul style={{ marginTop: '12px', marginBottom: 0 }}>
            <li><strong>OS:</strong> Process vs thread? Context switch? Mutex vs semaphore? What causes deadlock? Virtual memory and page faults?</li>
            <li><strong>DBMS:</strong> Primary key vs foreign key? DELETE vs TRUNCATE vs DROP? Normalization? ACID? Indexing? B-Tree vs B+ Tree?</li>
            <li><strong>Networks:</strong> TCP vs UDP? 3-way handshake? HTTP vs HTTPS? DNS? Subnetting? Router vs switch?</li>
            <li><strong>OOP & Arch:</strong> Encapsulation vs abstraction? Interface vs abstract class? Polymorphism? Cache miss? L1 vs L2 vs L3?</li>
            <li><strong>System Design:</strong> Horizontal scaling? Load balancing? Why use Redis/Kafka? Database sharding vs replication? CDN?</li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default CSSyllabus;
