function LinkedList (){
    let head = null;
    let length = 0;

    const Node = function (element) {
        this.element = element;
        this.next = null;
    }

    this.head = ()=>{
        return head;
    }

    this.size = ()=>{
        return length;
    }

    this.add = (element)=>{
        const node = new Node();
        if (head === null){
            head = element;
        }else{
            let currentNode = head ;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode = node;
        }
        length++
    }

    this.remove = (element)=>{
        let currentNode = head;
        let previousNode;
        if (head === element){
            head = head.next;
        }else{
            while( !head === currentNode ){
                previousNode = currentNode;
                currentNode = currentNode.next
            }
            previousNode.next = currentNode.next;
        }
        length--;
    }
}

const power = new LinkedList();
power.add(32);
power.add(32);
power.add(32);
power.add(32);
power.add(32);
power.add(32);
power.add(32);

power.remove(32);

console.log(power.size());
