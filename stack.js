function Stack () {
    let length = 0;
    let top = null;

    const Node = function (element) {
        this.data = element;
        this.next = null;
        
    } 

    this.top = () => {
        return top.data;
    } 

    this.size = () => {
        return length;
    }

    this.display = () => {
        if ( top === null ) {
            console.log('List is empty 😒');
        } else {
            let temp = top;
            while (temp !== null ) {
                console.log(temp.data);
                temp = temp.data;
            }
        }
    }

    this.push = (element) => {
        const newNode = new Node(element);
        if ( top === null ) {
            top = newNode;
        } else {
            newNode.next = top;
            top = newNode;
            length++;
        }
    }

    this.pop = () => {
        if ( top === null ) {
            console.log('List is empty 😒');
        } else  {
            top = top.next;
            length--;
        }
    }
}

const dream = new Stack()
dream.push(1)
dream.push(12)
dream.push(6)
dream.pop()
console.log(dream.top());
console.log(dream.size());