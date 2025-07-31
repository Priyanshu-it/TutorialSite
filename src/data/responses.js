
export const responses = {
  arrays: [
    "In Java, arrays are fixed-size data structures to store elements of the same type.",
    "Common operations include traversal, insertion, deletion, and searching.",
    "Arrays have O(1) access time but resizing requires creating a new array.",
    "Typical interview questions cover array manipulation, sorting, and subarray problems.",
    "Syntax example: int[] arr = new int[5]; or int[] arr = {1, 2, 3, 4, 5};"
  ],

  linkedlist: [
    "A linked list is a linear data structure where each element points to the next.",
    "In Java, singly linked list nodes have a data field and a pointer to the next node.",
    "Basic operations include insertion at head/tail, deletion, and traversal.",
    "Linked lists have O(n) access time but O(1) insertion/deletion at known positions.",
    "Common questions include detecting cycles, reversing a linked list, and merging lists.",
    "Node class syntax example:\nclass Node {\n  int data;\n  Node next;\n}",
    "Creating a linked list node:\nNode head = new Node();\nhead.data = 10;\nhead.next = null;"
  ],

  stack: [
    "Stack is a LIFO data structure supporting push, pop, and peek operations.",
    "In Java, you can implement stacks using arrays or the built-in Stack class.",
    "Common applications include expression evaluation, backtracking, and recursion simulation.",
    "Example usage:\nStack<Integer> stack = new Stack<>();\nstack.push(10);\nint top = stack.pop();",
    "Interview problems often involve balanced parentheses and next greater element."
  ],

  queue: [
    "Queue is a FIFO data structure supporting enqueue and dequeue operations.",
    "In Java, Queue interface implementations include LinkedList and PriorityQueue.",
    "Variants include simple queue, circular queue, and deque (double-ended queue).",
    "Use cases include task scheduling, breadth-first search, and buffering.",
    "Coding problems often involve implementing queues or using them in algorithms like BFS.",
    "Example usage:\nQueue<Integer> queue = new LinkedList<>();\nqueue.offer(10);\nint front = queue.poll();"
  ],

  trees: [
    "A binary tree is a hierarchical data structure with nodes having up to two children.",
    "Binary Search Tree (BST) is a special tree with ordered nodes for fast search.",
    "Tree traversals include inorder, preorder, and postorder, each with different use cases.",
    "Java node class example:\nclass Node {\n  int data;\n  Node left, right;\n}",
    "Common interview questions cover tree traversal, height calculation, and BST validation.",
    "Creating a node example:\nNode root = new Node();\nroot.data = 5;\nroot.left = null;\nroot.right = null;"
  ],

  graphs: [
    "Graphs consist of vertices (nodes) and edges connecting them.",
    "Graphs can be directed or undirected, weighted or unweighted.",
    "Traversals include DFS (Depth-First Search) and BFS (Breadth-First Search).",
    "Java representations include adjacency matrix and adjacency list.",
    "Common problems include shortest path, cycle detection, topological sorting, and connectivity.",
    "Adjacency list example:\nList<List<Integer>> graph = new ArrayList<>();",
    "Adjacency matrix example:\nint[][] graph = new int[V][V];"
  ],

  sorting: [
    "Sorting algorithms arrange elements in a specified order (ascending or descending).",
    "Common algorithms include Bubble Sort (O(n²)), Merge Sort (O(n log n)), and Quick Sort (average O(n log n)).",
    "Java provides Arrays.sort() for built-in sorting.",
    "Understanding time and space complexity of sorting is crucial for interviews.",
    "Practice coding these algorithms to master both iterative and recursive approaches.",
    "Example: Arrays.sort(arr); // sorts the array",
    "Bubble sort basic example involves nested loops swapping adjacent elements."
  ],

  searching: [
    "Searching algorithms find the position of an element in a data structure.",
    "Linear search checks elements one by one with O(n) time complexity.",
    "Binary search works on sorted arrays with O(log n) time complexity.",
    "Binary search syntax example:\nint mid = low + (high - low) / 2;",
    "Master these for efficient querying in arrays and lists.",
    "Linear search example:\nfor (int i = 0; i < arr.length; i++)\n  if (arr[i] == key) return i;",
    "Binary search example:\nint mid = low + (high - low) / 2;"
  ],

  dynamicprogramming: [
    "Dynamic Programming (DP) optimizes problems by storing results of subproblems.",
    "Two approaches: memoization (top-down) and tabulation (bottom-up).",
    "Classic problems include Fibonacci, Knapsack, and Longest Common Subsequence.",
    "Java DP example uses arrays or hash maps to store computed values.",
    "DP is critical for advanced interview rounds and competitive programming.",
    "Memoization example:\nint[] dp = new int[n];\nArrays.fill(dp, -1);",
    "Tabulation example involves bottom-up filling of dp array iteratively."
  ],

  develop: [
    "Developer by Priyabshu.",
    "Reference: Geeks for Geeks.",
    "Technologies used: React.js, HTML, CSS, JavaScript."
  ],

  jobprep: [
    "Focus on mastering data structures and algorithms in Java for 4-5 lakh jobs.",
    "Practice coding problems on platforms like LeetCode, GeeksforGeeks, and HackerRank.",
    "Understand time and space complexity to optimize your solutions.",
    "Prepare for behavioral interviews and system design basics.",
    "Build a strong resume highlighting your problem-solving skills and projects."
  ],

  default: [
    "I can help you learn deep DSA concepts in Java for job preparation!",
    "Try asking about arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, or dynamic programming.",
    "Need syntax examples or interview tips? Just ask!",
    "I’m here to guide you to ace your Java coding interviews and land that 4-5 lakh job.",
    "Feel free to ask for explanations, code snippets, or problem-solving strategies."
  ]
};