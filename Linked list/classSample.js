class Node {
    constructor(data,next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // insert at the first position
    insertFirst(data){
        this.head = new Node(data,this.head);
    }
    
    // insert at the last position
    insertLast(data){
        let node = new Node(data);
        let current;
        // if list is empty
        if(!this.head){
            this.head = node;
        }else{
            current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next =  node;
        }
        this.size++;
    }
    
    // Inser at index position
    
    // get at index position
    
    // remove at index position
    
    // clear list
    
    // print list
    printList(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(10);
ll.insertFirst(100);
ll.insertLast(1000);

ll.printList();