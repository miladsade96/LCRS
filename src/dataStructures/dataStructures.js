// Hash table:
class HashTable {
	constructor(size) {
		this.data = new Array(size);
	}

	#hash(key) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length;
		}
		return hash;
	}

	set(key, value) {
		let address = this.#hash(key);
		if (!this.data[address]) {
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	}

	get(key) {
		let address = this.#hash(key);
		const currentBucket = this.data[address];
		if (currentBucket) {
			for (let i = 0; i < currentBucket.length; i++) {
				if (currentBucket[i][0] === key) {
					return currentBucket[i][1];
				}
			}
		}
		return undefined;
	}

	keys() {
		const keysArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				keysArray.push(this.data[i][0][0]);
			}
		}
		return keysArray;
	}

	values() {
		const valuesArray = [];
		for (let i = 0; i < this.data.length; i++) {
			if (this.data[i]) {
				valuesArray.push(this.data[i][0][1]);
			}
		}
		return valuesArray;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Singly Linked List:

class SinglyNode {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class SinglyLinkedList {
	constructor(value) {
		this.head = new SinglyNode(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new SinglyNode(value);
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new SinglyNode(value);
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
		return this;
	}

	print() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}

	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = new SinglyNode(value);
		const nodeBefore = this.traverseToIndex(index - 1);
		const pointerHolder = nodeBefore.next;
		nodeBefore.next = newNode;
		newNode.next = pointerHolder;
		this.length++;
		return this.print();
	}

	remove(index) {
		if (index === 0) {
			// first node
			this.head = this.traverseToIndex(1);
			delete this.traverseToIndex(0);
		} else if (index === this.length - 1) {
			// Last node
			this.traverseToIndex(index - 1).next = null;
			delete this.traverseToIndex(index);
		} else {
			// A node in the middle of linked list
			const beforeNode = this.traverseToIndex(index - 1);
			beforeNode.next = this.traverseToIndex(index + 1);
			delete this.traverseToIndex(index);
		}
		this.length--;
		return this.print();
	}

	reverse() {
		if (this.length === 1) return this;
		let first = this.head;
		this.tail = this.head;
		let second = first.next;
		while (second) {
			const tmp = second.next;
			second.next = first;
			first = second;
			second = tmp;
		}
		this.head.next = null;
		this.head = first;
		return this;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Doubly Linked List:

class DoublyNode {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor(value) {
		this.head = new DoublyNode(value);
		this.tail = this.head;
		this.length = 1;
	}

	append(value) {
		const newNode = new DoublyNode(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}

	prepend(value) {
		const newNode = new DoublyNode(value);
		newNode.next = this.head;
		this.head.prev = newNode;
		this.head = newNode;
		this.length++;
		return this;
	}

	print() {
		const array = [];
		let currentNode = this.head;
		while (currentNode !== null) {
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}

	insert(index, value) {
		if (index >= this.length) return this.append(value);
		const newNode = new DoublyNode(value);
		const leader = this.traverseToIndex(index - 1);
		const follower = leader.next;
		leader.next = newNode;
		newNode.prev = leader;
		newNode.next = follower;
		follower.prev = newNode;
		this.length++;
		return this;
	}

	remove(index) {
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
			this.length--;
			return this;
		} else if (index === 0) {
			this.head = this.traverseToIndex(index + 1);
			this.head.prev = null;
			this.length--;
			return this;
		} else if (index === this.length - 1) {
			this.tail = this.traverseToIndex(index - 1);
			this.tail.next = null;
			this.length--;
			return this;
		} else {
			const nodeBefore = this.traverseToIndex(index - 1);
			const nodeAfter = this.traverseToIndex(index + 1);
			nodeBefore.next = nodeAfter;
			nodeAfter.prev = nodeBefore;
			this.length--;
			return this;
		}
	}

	traverseToIndex(index) {
		let counter = 0;
		let currentNode = this.head;
		while (counter !== index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Stack Using Linked List:

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Stack {
	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		// See the top element
		return this.top;
	}

	push(value) {
		// Push a value to the stack
		const newNode = new Node(value);
		if (this.length === 0) {
			this.bottom = newNode;
			this.top = newNode;
		} else {
			const pointerHolder = this.top;
			this.top = newNode;
			this.top.next = pointerHolder;
		}
		this.length++;
		return this;
	}

	pop() {
		// Remove a value from on top of stack
		if (!this.top) return null;
		if (this.top === this.bottom) this.bottom = null;
		this.top = this.top.next;
		this.length--;
		return this;
	}

	isEmpty() {
		// whether the stack is empty ir not
		return this.length === 0;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Stack Using Array:
class StackArray {
	constructor() {
		this.values = [];
	}
	peek() {
		return this.values.at(-1);
	}
	push(value) {
		this.values.push(value);
		return this;
	}
	pop() {
		return this.values.pop();
	}

	isEmpty() {
		return this.values.length === 0;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Queue Using Linked List:

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	peek() {
		return this.first;
	}
	enqueue(value) {
		const newNode = new QueueNode(value);
		if (this.length === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
	dequeue() {
		if (this.length === 0) return null;
		if (this.length === 1) {
			this.last = null;
		}
		this.first = this.first.next;
		this.length--;
		return this;
	}
	isEmpty() {
		return this.length === 0;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Queue Using Two Stacks:

class QueueUsingTwoStacks {
	constructor() {
		this.enqueStack = [];
		this.dequeueStack = [];
	}

	push(value) {
		this.enqueStack.push(value);
	}

	pop() {
		if (!this.dequeueStack.length) {
			while (this.enqueStack.length) {
				this.dequeueStack.push(this.enqueStack.pop());
			}
		}
		return this.dequeueStack.pop();
	}

	peek() {
		if (!this.dequeueStack.length) {
			while (this.enqueStack.length) {
				this.dequeueStack.push(this.enqueStack.pop());
			}
		}
		return this.dequeueStack.at(-1);
	}

	isEmpty() {
		return !this.enqueStack.length && !this.dequeueStack.length;
	}

	clear() {
		this.enqueStack = [];
		this.dequeueStack = [];
		return this;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////
// Binary Search Tree:

class BSTNode {
	// Binary Search Tree Node
	constructor(value) {
		this.right = null;
		this.left = null;
		this.value = value;
	}
}
