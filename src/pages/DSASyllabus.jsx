import React from 'react';
import { ArrowLeft } from 'lucide-react';

const DSASyllabus = ({ setCurrentPage }) => {
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
          <h1 className="page-title">Complete DSA Syllabus</h1>
          <p className="page-subtitle">Your comprehensive roadmap for Data Structures and Algorithms mastery.</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        
        <h2 style={{ color: 'var(--text-primary)', marginTop: '0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>0. Programming Foundations</h2>
        <p>Before DSA, you should be comfortable with:</p>
        <ul>
          <li>C++/Python basics</li>
          <li>Variables and data types</li>
          <li>Operators</li>
          <li>Conditional statements</li>
          <li>Loops</li>
          <li>Functions</li>
          <li>Recursion basics</li>
          <li>Arrays and strings</li>
          <li>Pointers/references — especially C++</li>
          <li>Classes and objects</li>
          <li>STL in C++ (vector, array, string, pair, tuple, set, multiset, unordered_set, map, unordered_map, stack, queue, deque, priority_queue)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>1. Complexity Analysis</h2>
        <ul>
          <li><strong>Time Complexity:</strong> Big-O, Big-Ω, Big-Θ, Best/Average/Worst case</li>
          <li><strong>Orders:</strong> Constant O(1), Logarithmic O(log n), Linear O(n), Linearithmic O(n log n), Quadratic O(n²), Exponential O(2ⁿ), Factorial O(n!)</li>
          <li><strong>Space Complexity:</strong> Auxiliary space, Input space, Recursion stack, In-place algorithms</li>
          <li><strong>Important:</strong> Learn to analyze for loops, nested loops, recursion, recursive trees, sorting algorithms, graph algorithms, DP</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2. Arrays</h2>
        <ul>
          <li><strong>Basics:</strong> Traversal, Insertion, Deletion, Searching, Updating</li>
          <li><strong>Important Techniques:</strong> Prefix Sum, Suffix Sum, Difference Array, Two Pointers, Sliding Window, Kadane's Algorithm, Dutch National Flag, Cyclic Sort, Frequency Counting, Coordinate Compression</li>
          <li><strong>Problems:</strong> Maximum/minimum, Second largest, Remove duplicates, Rotate array, Move zeroes, Merge sorted arrays, Majority element, Missing/repeating number</li>
          <li><strong>Subarray problems:</strong> Maximum subarray sum, Stock buy/sell</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>3. Strings</h2>
        <ul>
          <li><strong>Fundamentals:</strong> Character manipulation, ASCII/Unicode, String traversal, String comparison, String modification</li>
          <li><strong>Techniques:</strong> Frequency arrays, Hashing, Two pointers, Sliding window, Prefix/suffix, Palindromes</li>
          <li><strong>Algorithms:</strong> KMP, Z Algorithm, Rabin-Karp, Manacher's Algorithm</li>
          <li><strong>Problems:</strong> Anagrams, Longest substring, Longest palindrome, Pattern matching, String compression, Valid parentheses, Minimum window substring</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>4. Searching</h2>
        <ul>
          <li><strong>Linear Search:</strong> O(n)</li>
          <li><strong>Binary Search:</strong> O(log n)</li>
          <li><strong>Master:</strong> Standard binary search, First occurrence, Last occurrence, Lower bound, Upper bound, Search insertion position, Search in rotated array, Peak element, Binary search on answer, Minimum/maximum feasible value</li>
          <li><strong>Advanced:</strong> Binary search on functions, Search in 2D matrix, Ternary search</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>5. Sorting</h2>
        <ul>
          <li><strong>Basic Sorting:</strong> Bubble Sort, Selection Sort, Insertion Sort</li>
          <li><strong>Important Sorting:</strong> Merge Sort, Quick Sort, Heap Sort, Counting Sort, Radix Sort, Bucket Sort</li>
          <li><strong>Must understand:</strong> Stability, In-place sorting, Comparison vs non-comparison sorting, Time/space complexity</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>6. Linked Lists</h2>
        <ul>
          <li><strong>Singly Linked List:</strong> Creation, Traversal, Insertion, Deletion, Reversal</li>
          <li><strong>Doubly Linked List:</strong> Forward traversal, Backward traversal, Insertion/deletion</li>
          <li><strong>Circular Linked List</strong></li>
          <li><strong>Important Problems:</strong> Reverse linked list, Middle of linked list, Detect cycle, Find cycle starting point, Remove cycle, Merge sorted lists, Remove Nth node, Palindrome linked list, Intersection of linked lists, Add two numbers, Reverse in groups of K, Clone linked list with random pointer</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>7. Stack</h2>
        <ul>
          <li><strong>Implementation:</strong> Array, Linked list</li>
          <li><strong>Concepts:</strong> LIFO, Push, Pop, Peek</li>
          <li><strong>Applications:</strong> Parentheses matching, Expression evaluation (Infix → Postfix, Infix → Prefix, Postfix evaluation)</li>
          <li><strong>Important Problems:</strong> Next Greater Element, Next Smaller Element, Previous Greater Element, Previous Smaller Element, Stock Span, Largest Rectangle in Histogram, Trapping Rain Water, Min Stack, Max Stack</li>
          <li><strong>Advanced:</strong> Monotonic Stack</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>8. Queue</h2>
        <ul>
          <li><strong>Types:</strong> Simple Queue, Circular Queue, Deque, Priority Queue</li>
          <li><strong>Problems:</strong> Implement queue using stack, Implement stack using queue, Sliding Window Maximum, First non-repeating character, Generate binary numbers, BFS</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>9. Hashing</h2>
        <ul>
          <li><strong>Concepts:</strong> Hash function, Hash table, Collision, Chaining, Open addressing</li>
          <li><strong>C++:</strong> unordered_map, unordered_set, map, set</li>
          <li><strong>Problems:</strong> Two Sum, Three Sum, Four Sum, Longest consecutive sequence, Frequency counting, Subarray sum equals K, Longest subarray with given sum, Longest substring without repetition</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>10. Recursion & 11. Backtracking</h2>
        <ul>
          <li><strong>Fundamentals:</strong> Base case, Recursive case, Call stack, Recursion tree</li>
          <li><strong>Problems:</strong> Factorial, Fibonacci, Power, Sum of digits, Reverse string, Generate subsequences, Generate permutations, Generate combinations</li>
          <li><strong>Understand:</strong> Recursion → Backtracking → Dynamic Programming</li>
          <li><strong>Backtracking Core concepts:</strong> State, Choice, Constraint, Backtrack</li>
          <li><strong>Backtracking Problems:</strong> Subsets, Subset Sum, Permutations, Combinations, Combination Sum, N-Queens, Sudoku, Rat in a Maze, Word Search, Generate Parentheses, Letter combinations</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>12. Trees & 13. BST</h2>
        <ul>
          <li><strong>Binary Tree Traversals:</strong> Preorder, Inorder, Postorder, Level Order (Recursive & Iterative)</li>
          <li><strong>Important Problems:</strong> Height/depth, Diameter, Maximum path sum, Balanced tree, Identical trees, Symmetric tree, Boundary traversal, Vertical traversal, Zigzag traversal, Left/right/top/bottom view, Lowest Common Ancestor</li>
          <li><strong>BST Concepts:</strong> BST properties, Search, Insert, Delete</li>
          <li><strong>BST Problems:</strong> Validate BST, Kth smallest, Kth largest, LCA, Predecessor, Successor, Convert sorted array → BST, Recover BST, Two Sum in BST</li>
          <li><strong>Advanced:</strong> AVL Tree, Red-Black Tree (Concepts)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>14. Heap / Priority Queue & 15. Trie</h2>
        <ul>
          <li><strong>Heap Concepts:</strong> Min Heap, Max Heap, Heapify, Build Heap</li>
          <li><strong>Heap Algorithms:</strong> Heap Sort</li>
          <li><strong>Heap Problems:</strong> Kth largest/smallest, Top K frequent elements, Merge K sorted arrays, Merge K sorted linked lists, Median from data stream, K closest points, Task scheduling</li>
          <li><strong>Trie Concepts:</strong> Trie node, Insert, Search, Delete, Prefix search</li>
          <li><strong>Trie Problems:</strong> Implement Trie, Word Dictionary, Auto-complete, Longest prefix, Word Search, Maximum XOR</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>16-22. Graphs</h2>
        <ul>
          <li><strong>Representation:</strong> Adjacency Matrix, Adjacency List, Edge List</li>
          <li><strong>Types:</strong> Directed, Undirected, Weighted, Unweighted, Cyclic, Acyclic, Connected, Disconnected</li>
          <li><strong>Traversal:</strong> BFS (Shortest path in unweighted graph, Level traversal, Connected components, Bipartite checking), DFS (Connected components, Cycle detection, Path finding, Topological sorting, Islands problems)</li>
          <li><strong>Cycle Detection:</strong> Undirected (DFS, BFS, DSU), Directed (DFS + recursion stack, Kahn's Algorithm)</li>
          <li><strong>Topological Sorting:</strong> DFS, Kahn's Algorithm / BFS (Course scheduling, Dependency resolution)</li>
          <li><strong>Shortest Path Algorithms:</strong> BFS, Dijkstra, Bellman-Ford, Floyd-Warshall (Relaxation, Negative cycle, Shortest path tree)</li>
          <li><strong>Minimum Spanning Tree:</strong> Kruskal (DSU), Prim (Priority Queue)</li>
          <li><strong>Disjoint Set Union (DSU):</strong> Find, Union, Path compression, Union by rank/size</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>23. Dynamic Programming</h2>
        <p>One of the most important and difficult sections. First learn: Recursion → Memoization → Tabulation → Space Optimization.</p>
        <ul>
          <li><strong>1D DP:</strong> Fibonacci, Climbing Stairs, House Robber, Frog Jump</li>
          <li><strong>2D DP:</strong> Grid paths, Unique paths, Minimum path sum, Grid obstacles</li>
          <li><strong>Knapsack:</strong> 0/1 Knapsack, Unbounded Knapsack, Subset Sum, Partition Equal Subset Sum, Coin Change</li>
          <li><strong>Subsequences:</strong> LCS, LIS, Longest Palindromic Subsequence, Distinct Subsequences</li>
          <li><strong>String DP:</strong> Edit Distance, Wildcard Matching, Regex Matching</li>
          <li><strong>Interval DP:</strong> Matrix Chain Multiplication, Burst Balloons, Palindrome Partitioning</li>
          <li><strong>Advanced DP:</strong> Tree DP, Bitmask DP (Traveling Salesman, Assignment problems)</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>24. Greedy Algorithms & 25. Bit Manipulation</h2>
        <ul>
          <li><strong>Greedy Problems:</strong> Activity Selection, Fractional Knapsack, Job Sequencing, Jump Game, Gas Station, Minimum platforms, Meeting rooms, Huffman Coding, Interval scheduling, Merge intervals</li>
          <li><strong>Bit Concepts:</strong> Operators, Odd/even, Set bit, Clear bit, Toggle bit, Check bit, XOR properties, Bit masking, Power of 2</li>
          <li><strong>Bit Algorithms:</strong> Count set bits, Brian Kernighan's Algorithm, XOR tricks</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>26. Mathematical Algorithms & 27. Range Query</h2>
        <ul>
          <li><strong>Number Theory:</strong> Prime numbers, Sieve of Eratosthenes, GCD, LCM, Euclidean Algorithm, Extended Euclidean Algorithm</li>
          <li><strong>Modular Arithmetic:</strong> Addition, multiplication, exponentiation, inverse</li>
          <li><strong>Combinatorics:</strong> Permutations, Combinations, Pascal's Triangle</li>
          <li><strong>Range Query Data Structures:</strong> Prefix Sum, Fenwick Tree / BIT, Segment Tree</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>28-32. Advanced Topics</h2>
        <ul>
          <li><strong>Advanced Trees:</strong> AVL Tree, Red-Black Tree, B-Tree, B+ Tree, Interval Tree, Segment Tree, Fenwick Tree, Suffix Tree</li>
          <li><strong>Advanced Strings:</strong> KMP, Z Algorithm, Rabin-Karp, Manacher, Trie, Suffix Array, Suffix Tree, Aho-Corasick</li>
          <li><strong>Advanced Graphs:</strong> SCC (Kosaraju, Tarjan), Bridges, Articulation Points, Eulerian Path/Circuit, Hamiltonian Path, Network Flow (Max Flow, Min Cut, Bipartite Matching), 0-1 BFS, Multi-source BFS, DAG shortest path</li>
          <li><strong>Computational Geometry:</strong> Points, Lines, Distance, Orientation, Cross product, Convex Hull, Line intersection, Polygon area, Sweep Line</li>
          <li><strong>Advanced Problem-Solving:</strong> Two pointers, Sliding window, Prefix/suffix techniques, Binary search on answer, Sweep line, Meet in the middle, Divide and conquer, Coordinate compression, Difference arrays, Offline queries, Randomization, Invariants, Constructive algorithms</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>33. Competitive Programming Topics</h2>
        <ul>
          <li><strong>Rating ~800–1000:</strong> Implementation, Arrays, Strings, Sorting, Basic math, Prefix sums, Two pointers, Greedy, Binary search</li>
          <li><strong>Rating ~1000–1200:</strong> Basic DP, Graphs, BFS/DFS, Number theory, Bit manipulation, Constructive problems, More advanced greedy</li>
          <li><strong>Rating ~1200–1400:</strong> DSU, Shortest paths, Trees, More DP, Combinatorics, Modular arithmetic, Advanced binary search</li>
          <li><strong>Rating ~1400–1600:</strong> Segment trees, Fenwick trees, Advanced DP, SCC, Bridges, Advanced greedy, Bitmask techniques</li>
          <li><strong>1600+:</strong> Advanced graph algorithms, Advanced DP, Number theory, String algorithms, Geometry, Complex data structures</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>34. Interview-Specific DSA (SDE Internships)</h2>
        <ul>
          <li><strong>⭐ Tier 1 — Must Master:</strong> Arrays, Strings, Hashing, Two Pointers, Sliding Window, Binary Search, Linked List, Stack, Queue, Trees, BST, Heap, Graph BFS/DFS, Recursion, Backtracking, Dynamic Programming, Greedy</li>
          <li><strong>⭐ Tier 2 — Strongly Recommended:</strong> Trie, DSU, Topological Sort, Dijkstra, MST, Bit Manipulation, Prefix Sum, Monotonic Stack, Advanced Graphs</li>
          <li><strong>⭐ Tier 3 — Competitive Programming / Advanced:</strong> Segment Tree, Fenwick Tree, SCC, Bridges, Articulation Points, Advanced String Algorithms, Network Flow, Computational Geometry, Advanced DP</li>
        </ul>

        <div style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}>For Your Situation:</h3>
          <p style={{ margin: 0 }}>
            Since you've already completed DSA and are focusing on revision, I would not recommend studying this syllabus from zero again. A much better approach is to turn this into a 2-month revision syllabus, where each topic is revised through: 
            <strong> Concept → Templates → 5–10 representative problems → timed problems → mistakes notebook → spaced re-revision.</strong>
            <br/><br/>
            If your target is SDE internship + Codeforces improvement, we can turn this entire syllabus into a 60-day DSA revision roadmap with exact topics + LeetCode/Codeforces problem counts for every day.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DSASyllabus;
