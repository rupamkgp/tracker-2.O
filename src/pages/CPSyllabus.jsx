import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CPSyllabus = ({ setCurrentPage }) => {
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
          <h1 className="page-title">Competitive Programming Syllabus</h1>
          <p className="page-subtitle">DSA + Problem Solving + Mathematics + Speed + Strategy</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        
        <h2 style={{ color: 'var(--text-primary)', marginTop: '0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>0. Programming Foundation</h2>
        <ul>
          <li><strong>C++ Essentials:</strong> I/O, Operators, Conditionals, Loops, Functions, Pointers, Structs, Recursion, Lambda</li>
          <li><strong>C++ STL:</strong> vector, array, pair, tuple, string, deque, stack, queue, priority_queue, set, multiset, map, bitset</li>
          <li><strong>STL Algorithms:</strong> sort, lower_bound, upper_bound, binary_search, accumulate, unique, next_permutation</li>
          <li><strong>Complexity:</strong> Time/Space, Big-O, Amortized complexity, Worst vs average case</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Problem-Solving Fundamentals</h2>
        <ul>
          <li><strong>Problem Analysis:</strong> Reading constraints, finding hidden observations, constraint-driven algorithm selection</li>
          <li><strong>Core Techniques:</strong> Simulation, Constructive thinking, Pattern recognition, Invariants, Greedy observations, Working backward</li>
          <li><strong>Complexity Targets:</strong> n ≤ 20 → O(2ⁿ), n ≤ 1,000 → O(n²), n ≤ 100,000 → O(n log n), very large → O(log n)/O(1)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2-4. Arrays, Searching, Sorting & Strings</h2>
        <ul>
          <li><strong>Arrays & Pointers:</strong> Prefix Sum, Prefix XOR, Difference Array, Sliding Window, Two Pointers (Opposite/Same direction)</li>
          <li><strong>Searching & Sorting:</strong> Merge/Quick/Counting/Radix Sort, Binary Search on Answer, Ternary Search</li>
          <li><strong>Strings:</strong> KMP, Z-function, Rabin-Karp, Rolling hash, Trie, Suffix Automaton, Manacher's algorithm</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>5-9. Data Structures, Greedy & Math</h2>
        <ul>
          <li><strong>Stack/Queue:</strong> Monotonic stack, Monotonic queue, BFS, Next greater element</li>
          <li><strong>Hashing:</strong> Polynomial rolling hash, Double hashing, Custom hash functions</li>
          <li><strong>Greedy:</strong> Exchange argument, Interval scheduling, Fractional knapsack, Job sequencing</li>
          <li><strong>Recursion & Bitmask:</strong> Branch and bound, Pruning, Bitmask optimization, Subset enumeration</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>10-14. Mathematics for CP</h2>
        <ul>
          <li><strong>Number Theory:</strong> Prime factorization, Sieve of Eratosthenes, Modular Arithmetic, Fermat's little theorem, CRT</li>
          <li><strong>Combinatorics:</strong> Permutations, Combinations, nCr mod p, Inclusion-exclusion, Pigeonhole principle</li>
          <li><strong>Probability & Algebra:</strong> Expected value, Matrix exponentiation</li>
          <li><strong>Geometry:</strong> Cross/Dot product, Line intersection, Polygon area (Shoelace), Convex hull (Graham scan)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>15-26. Graph Theory & Trees</h2>
        <ul>
          <li><strong>Traversal & Paths:</strong> BFS/DFS, 0-1 BFS, Dijkstra, Bellman-Ford, Floyd-Warshall, Multi-source BFS</li>
          <li><strong>MST & DSU:</strong> Kruskal, Prim, Path compression, Union by rank</li>
          <li><strong>Advanced Graphs:</strong> Topological Sort, SCC (Kosaraju/Tarjan), Bridges, Articulation Points</li>
          <li><strong>Tree Algorithms:</strong> Subtree queries, Diameter, Tree DP, Binary lifting, LCA (Lowest Common Ancestor), HLD, Centroid Decomposition</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>27-34. Dynamic Programming (DP)</h2>
        <ul>
          <li><strong>Standard DP:</strong> Memoization/Tabulation, Knapsack, Coin change, LIS, LCS</li>
          <li><strong>Advanced DP Patterns:</strong> Bitmask DP, String DP, Interval DP, Tree DP, DAG DP, Digit DP</li>
          <li><strong>DP Optimization:</strong> Convex Hull Trick, Divide-and-Conquer DP, Knuth optimization</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>35-42. Range Queries & Advanced Data Structures</h2>
        <ul>
          <li><strong>Fenwick & Segment Trees:</strong> Point/Range updates, Lazy propagation, Range minimum/sum</li>
          <li><strong>Advanced Range Queries:</strong> Sparse Table, Mo's Algorithm, Sweep Line, Persistent Segment Tree</li>
          <li><strong>Advanced Graph/Math:</strong> Max flow (Dinic), Bipartite matching, FFT/NTT, Game Theory (Sprague-Grundy)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>46-51. Constructive & Offline Algorithms</h2>
        <ul>
          <li><strong>Constructive Algorithms:</strong> Extremely common in Codeforces. Constructing valid answers, avoiding impossible configurations.</li>
          <li><strong>Offline Queries:</strong> Sweep line, Mo's algorithm, CDQ divide and conquer</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>64-67. Contest Strategy & Debugging</h2>
        <ul>
          <li><strong>Codeforces:</strong> Div 2/3/4, Educational rounds. Focus on math, constructive, and greedy.</li>
          <li><strong>Strategy:</strong> Scan problems, identify constraints quickly, keep track of wrong submissions.</li>
          <li><strong>Debugging:</strong> TLE, MLE, overflow, wrong indexing, precision issues.</li>
        </ul>

        <div style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}>Recommended Learning Order</h3>
          <p style={{ margin: 0 }}>
            <strong>C++/STL → Complexity → Arrays → Sorting → Binary Search → Prefix Sum → Two Pointers → Greedy → Stack/Queue → Recursion → Bit Manipulation → Basic Math → Number Theory → BFS/DFS → Trees → DSU → Dijkstra → Topological Sort → MST → Basic DP → Advanced DP → Fenwick → Segment Tree → LCA → SCC → Advanced Trees → Strings → Geometry → Flow.</strong>
            <br/><br/>
            Given that you've already completed DSA, CP should be approached primarily as <strong>problem-solving practice</strong> on top of your existing DSA, rather than relearning every topic from scratch.
          </p>
        </div>

      </div>
    </div>
  );
};

export default CPSyllabus;
