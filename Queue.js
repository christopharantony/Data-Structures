function Queue () {
    let length = 0;
    let rear = null;
    let front = null;

    const Node = function (element) {
        this.data = element;
        this.next = null;
    }

    this.size = () => {
        return length;
    }

    this.rear = () => {
        return rear;
    }

    this.front = () => {
        return front;
    }

    this.enqueue = (element) => {
        const newNode = new Node(element);
        length++;
        if ( rear === null ) {
            front = rear = newNode;
            return;
        } else {
            rear.next = newNode;
            rear = newNode;
        }
    }

    this.dequeue = () => {
        if (front === null) {
            rear = null;
            console.log('No one is waiting 😒');
        } else {
            front = front.next;
            length--;
        }
    }

    this.display = () => {
        if (length === 0) {
            console.log('No one is waiting 😒');
        }
    }
}

const queue = new Queue();
queue.enqueue(1)
queue.enqueue(12)
queue.enqueue(6)
// queue.pop()
console.log(queue.rear());
console.log(queue.size());