const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.last = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    
    return this;
  }
  
  dequeue() {
    let head;

    if (!this.head || this.head === this.last) {
      head = null;
    } else {
      head = this.head.value;
      this.head = this.head.next;
    }

    return head;
  }

  getUnderlyingList() {
    return this.head;
  }
}

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

module.exports = {
  Queue
};
