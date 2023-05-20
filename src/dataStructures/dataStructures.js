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
