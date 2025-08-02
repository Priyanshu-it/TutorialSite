const Sections = () => (
  <>
    <section id="intro">
      <h2>Q What is DSA and Why it Matters for Job Preparation?</h2>
      <p>Data Structures and Algorithms (DSA) are the foundation for solving complex programming problems efficiently.</p>
      <p>This guide covers core DSA topics with Java syntax, real code examples, and tips for interviews.</p>
      <ul>
        <li>Learning DSA boosts your problem-solving abilities and make you a stronger programmer.</li>
        <li>DSA is the foundation for almost every software like GPS, AI ChatBots, Databases, etc.</li>
        <li>Top Companies like Google, Amazon, Meta focus heavily on DSA interviews.</li>
      </ul>
    </section>

    <section id="array">
      <h2>👉🏻 Arrays</h2>
      <img
        src="https://miro.medium.com/v2/resize:fit:927/1*DxlJoSM_VaoeHQEaPnFT5g.png"
        alt="Array Image"
        style={{ maxWidth: "100%" }}
      />
      <p><b>Define: </b>An array is a fixed-size, sequential collection of elements, all of the same type,
        stored in contiguous memory locations. It allows fast access to elements via indices.</p>
      <br />
      <pre> <b>Syntax: </b> <br></br>
        <code>{`// Declare and initialize an integer array
int[] numbers = {10, 20, 30, 40, 50};
int first = numbers[0];
for (int num : numbers) {
    System.out.println(num);
}
`}</code>
      </pre>
      <br />
      <p>
        <a
          href="https://www.geeksforgeeks.org/arrays-in-java/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link
        </a>
      </p>
    </section>

    <section id="linkedlist">
      <h2>👉🏻 Linked Lists</h2>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20220712172013/Singlelinkedlist.png"
        alt="Linked List"
        style={{ maxWidth: "100%" }}
      />
      <p><b>Define: </b> A linked list is a linear data structure where each element (node) contains data and a reference (link) to the next node in the sequence. Unlike arrays,
        linked lists allow efficient insertions and deletions without reallocating or reorganizing the entire structure.</p>
      <br />
      <pre> <b>Syntax: </b> <br></br>
        <code>{`class Node {
    int data;
    Node next;
    Node(int data) { this.data = data; this.next = null; }
}
class LinkedList {
    Node head;
    void push(int new_data) {
        Node new_node = new Node(new_data);
        new_node.next = head;
        head = new_node;
    }
}
`}</code>
      </pre>
      <br />
      <p>
        <a
          href="https://www.geeksforgeeks.org/data-structures/linked-list/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link
        </a>
      </p>
    </section>

    <section id="stackqueue">
      <h2>👉🏻 Stacks & Queues</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/56/QUEUE_VS_STACK.svg"
        alt="Stack vs Queue"
        style={{ maxWidth: "100%" }}
      />
      <p><b>Define: </b> Stacks:
        A stack is a collection that follows the Last-In-First-Out (LIFO) principle, where the most recently added element is the first to be removed.
        <br />Queues: A queue is a collection that follows the First-In-First-Out (FIFO) principle, where the earliest added element is the first to be removed.</p>
      <br />
      <pre> <b>Syntax: </b> <br></br>
        <code>{`Stack<Integer> stack = new Stack<>();
stack.push(10);
stack.push(20);
int top = stack.pop();

Queue<Integer> queue = new LinkedList<>();
queue.offer(10);
queue.offer(20);
int front = queue.poll();
`}</code>
      </pre>
      <br />
      <p>
        <a
          href="https://www.geeksforgeeks.org/stack-data-structure/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link(Stack)
        </a>{" "}
        |{" "}
        <a
          href="https://www.geeksforgeeks.org/queue-data-structure/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link(Queue)
        </a>
      </p>
    </section>

    <section id="trees">
      <h2>👉🏻 Trees & Graphs</h2>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20221129094006/Treedatastructure.png"
        alt="Tree"
        style={{ maxWidth: "100%" }}
      />
      <p><b>Define: </b> Trees:
        A tree is a hierarchical data structure consisting of nodes, with a single root node and subtrees of children, forming a parent-child relationship.
        <br />Graphs: A graph is a collection of nodes (vertices) connected by edges,
        representing relationships or connections between pairs of nodes. Graphs can be directed or undirected.</p>
      <br />
      <pre> <b>Syntax: </b> <br></br>
        <code>{`class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int x) { val = x; }
}

void dfs(int node, boolean[] visited, List<List<Integer>> graph) {
    visited[node] = true;
    for(int adj : graph.get(node)) {
        if(!visited[adj]) dfs(adj, visited, graph);
    }
}
`}</code>
      </pre>
      <br />
      <p>
        <a
          href="https://www.geeksforgeeks.org/binary-tree-data-structure/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link(Tree)
        </a>{" "}
        |{" "}
        <a
          href="https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link(Graph)
        </a>
      </p>
    </section>

    <section id="sorting">
      <h2>👉🏻 Sorting Algorithms</h2>
      <img
        src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Foklq80cyts2imsxqgpp4.png"
        alt="Bubble Sort"
        style={{ maxWidth: "100%" }}
      />
      <p><b>Define: </b> Sorting algorithms arrange elements of a collection in a certain order (usually ascending or descending).
        Sorting optimizes data retrieval and processing tasks.</p>
      <br />
      <pre> <b>Syntax: </b> <br></br>
        <code>{`void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n-1; i++) {
        for (int j = 0; j < n-i-1; j++) {
            if (arr[j] > arr[j+1]) {
                int temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
`}</code>
      </pre>
      <br />
      <p>
        <a
          href="https://www.geeksforgeeks.org/sorting-algorithms/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link
        </a>
      </p>
    </section>

    <section id="searching">
      <h2>👉🏻 Searching Algorithms</h2>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6ZtdSswbFloGnquqw9OZdhEvGfSxXWWHK6dnDBlyYzFXVnwR_IYm_MADwmHUr3D8cyI&usqp=CAU"
        alt="Binary Search"
        style={{ maxWidth: "100%" }}
      />
      <p><b>Define: </b> Searching algorithms find the position of a target element within a data structure.
        Efficient searching reduces time complexity for retrieval operations.</p>
      <br />
      <pre> <b>Syntax: </b> <br></br>
        <code>{`int binarySearch(int[] arr, int target) {
    int low = 0, high = arr.length - 1;
    while(low <= high) {
        int mid = low + (high - low) / 2;
        if(arr[mid] == target) return mid;
        else if(arr[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
`}</code>
      </pre>
      <br />
      <p>
        <a
          href="https://www.geeksforgeeks.org/binary-search/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link
        </a>
      </p>
    </section>

    <section id="dp">
      <h2>👉🏻 Dynamic Programming (DP)</h2>
      <img
        src="https://media.geeksforgeeks.org/wp-content/uploads/20250106170245473186/Dynamic-Programming-or-DP-1.webp"
        alt="Dynamic Programming"
        style={{ maxWidth: "100%" }}
      />
      <p><b>Define: </b> Dynamic Programming is a method for solving complex problems by breaking them down into simpler overlapping subproblems and storing their results to avoid redundant calculations.</p>
      <br />
      <pre> <b>Syntax: </b> <br></br>
        <code>{`int fib(int n, int[] memo) {
    if (n <= 1) return n;
    if (memo[n] != -1) return memo[n];
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
`}</code>
      </pre>
      <br />
      <p>
        <a
          href="https://www.geeksforgeeks.org/dynamic-programming/"
          target="_blank"
          rel="noopener noreferrer" class="link"
        >
          🔗 Link
        </a>
      </p>
    </section>
  </>
);

export default Sections;