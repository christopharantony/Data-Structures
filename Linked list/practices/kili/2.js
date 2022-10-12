function LinkedList () {
    let length = 0;
    let head = null;
    let tail = null;

    const Node = function (element) {
        this.prev = null;
        this.data = element;
        this.next = null;
    }

    this.head = ()=>{
        return head.data;
    }

    this.tail = ()=>{
        return tail;
    }

    this.size = ()=>{
        return length;
    }

    this.add = (element)=>{
        const newNode = new Node(element)
        if ( head === null ){
            head = newNode;
        } else {
            tail.next = newNode;
            newNode.prev = tail;
        }
        tail = newNode;
        length++;
        console.log(element,'+');
    }

    this.display = ()=>{
        if ( head === null ) {
            console.log('Empty List');
            return;
        }
        let temp = head;
        console.log('\n=> ');
        while (temp !== null ){
            console.log(temp.data);
            temp = temp.next;
        }
    }

    this.displayReverse = ()=>{
        if ( head === null ){
            console.log('Empty List');
            return;
        }
        let temp = tail;
        console.log('\n<=');
        while ( temp !== null){
            console.log(temp.data);
            temp = temp.prev;
        }
    }

    this.delete = (element)=>{
        if (head === null ){
            console.log('Empty List');
            return;
        } else if ( head === element ) {
            head = head.next;
            length--;
            console.log(element,'--');
            return;
        }
        let temp = head;
        while ( temp !== null && temp.data !== element ) {
            temp = temp.next;
        }
        if ( temp === null ) {
            console.log(element,' X');
            return;
        }
        
    }

    this.insertAfter = (nextTo,element)=>{
        if ( head === null ){
            console.log('Empty List');
            return;
        }
        let temp = head;
        while ( temp !== null && temp.data !== nextTo){
            temp = temp.next;
        }
        if ( temp === null ){
            console.log(element,' X');
            return;
        }
        const newNode = new Node(element);
        newNode.prev = temp;
        newNode.next = temp.next;
        temp.next.prev = newNode;
        temp.next = newNode;
    }

    this.insertBefore = (prevTo,element)=>{
        if ( head === null ) {
            console.log('Empty List');
            return;
        }
        let temp = head;
        while ( temp !== null && temp.data !== prevTo ){
            temp = temp.next;
        }
        if ( temp === null ){
            console.log(element,' X');
            return;
        }
        const newNode = new Node(element);
        newNode.prev = temp.prev;
        newNode.next = temp;
        temp.prev.next = newNode;
        temp.prev = newNode;
    }

    this.removeDuplicates = ()=>{
        let current = head;
        while (current !== null){
            let next = current.next;
            while (next !== null && current.data === next.data){
                next = next.next;
            }
            
            current.next = next;
            // console.log(next,': next');
            if (next !== null){
                next.prev = current;
            }else{
                current.next = null;
                tail = current;
            }
            
            if ( next === tail ){
                tail = next;
            }
            current = next;
        }
    }
}

let list = new LinkedList();
list.add(7);
list.add(8);
list.add(8);
list.add(1);
list.add(0)
list.add(0)
list.add(0)
list.add(2);
list.add(4);
list.add(4);
list.add(4);
// list.insertBefore(0,8)
// list.is
list.removeDuplicates()
list.displayReverse()
// list.display()

// console.log(list.tail());