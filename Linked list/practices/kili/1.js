function LinkedList() {
    let length = 0;
    let head = null;
    let tail = null;

    const Node = function (element) {
        this.data = element;
        this.next = null;
    }

    this.head = () => {
        return head.data;
    }

    this.tail = () => {
        return tail.data;
    }

    this.size = () => {
        return length;
    }

    this.add = (element) => {
        const newNode = new Node(element);
        if (head === null) {
            head = newNode;
            
        } else {
            tail.next = newNode;
        }
        tail = newNode;
        console.log(element,'+');
        length++
    }
    
    this.display = () => {
        if (head === null) {
            console.log('List is empty');
        } else {
            let temp = head;
            while (temp !== null) {
                console.log(temp.data);
                temp = temp.next;
            }
        }
    }
    
    this.delete = (element) => {
        let temp = head;
        let prev = null;
        if (temp !== null && temp.data === element) {
            head = temp.next;
            console.log(element,'-');
            length--;
            return;
        }
        while (temp !== null && temp.data !== element) {
            prev = temp;
            temp = temp.next;
        }
        
        if (temp === null) {
            console.log(element, " X");
            return;
        }
        
        if (temp === tail) {
            tail = prev;
            tail.next = null;
            console.log(element,'-');
            length--;
            return;
        }
        prev.next = temp.next;
        console.log(element,'-');
        length--;
        return;
    }
    
    this.insertAfter = (nextTo,element) => {
        const newNode = new Node(element);
        let temp = head;
        let after = null;
        
        while ( temp !== null && temp.data !== nextTo ) {
            temp = temp.next;
        }
        
        if (temp === null) {
            console.log(nextTo,' X');
            return;
        }
        
        if (temp === tail) {
            tail.next = newNode;
            tail = newNode;
            length++;
            console.log(element,'+');
            return;
        }
        after = temp.next
        temp.next = newNode;
        newNode.next = after;
        length++;
        console.log(element,' +  :: ',nextTo);
        return;
    }
}


const power = new LinkedList()

power.add(7);
power.add(0);
power.add(1);
power.add(2)

power.delete(1)
power.delete(9)

power.insertAfter(0,8)

console.log('Elements => ');
power.display()

console.log('head : ',power.head());
console.log('tail : ',power.tail());
console.log('size : ',power.size());