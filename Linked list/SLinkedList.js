function SLinkedList() {
    let head = null;
    let length = 0;

    const Node = function (element) {
        this.data = element;
        this.next = null;
    }

    this.size = () => {
        return length;
    }

    this.head = () => {
        return head;
    }

    this.add = (element) => {
        const node = new Node(element);
        if (head === null) {
            head = node;
            console.log(element, ' => Head');
        } else {
            let currentNode = head;

            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            console.log(element, '+');
        }
        length++;
    }

    this.display = () => {
        if (head === null) {
            console.log("List is Empty 😶")
        } else {
            let temp = head;
            while (temp !== null) {
                console.log(temp.data)
                temp = temp.next;
            }
        }
    }

    this.delete = (element) => {
        if (head === null) {
            console.log("List is Empty 😶")
            return;

        } else {
            let temp = head;
            if (temp !== null && temp.data === element) {
                head = temp.next;
                length--;
                console.log(element, '-');
                console.log(temp.next.data, " => Head")
                return;
            }

            while (temp !== null && temp.data !== element) {
                prev = temp;
                temp = temp.next;
            }

            if (temp === null) {
                console.log(element, " X")
                return;
            }

            prev.next = temp.next;
            console.log(element, '-');
            length--;
            return;
        }
    }

    this.insertAfter = (nextTo,element) => {
        if ( head === null ) {
            console.log("List is Empty 😶")
            return;
        }

        const node = new Node(element);
        let temp = head;
        let after = null;

        while ( temp !== null && temp.data !== nextTo ) {
            temp = temp.next;
        }

        if ( temp === null ) {
            console.log(nextTo," X")
            return;
        }
        
        after = temp.next;
        node.next = after;
        temp.next = node;
        length++;
        console.log(element, " + :: ",nextTo)
        return;
    }


}

const power = new SLinkedList();

power.add(1)
power.add(2)
power.add(3)
power.delete(1)
power.insertAfter(2,5)
console.log("The Size of the List ====>   ", power.size());
console.log("++++++++++++++++++++++++++++++++++++++++++++++")
console.log();
power.display()
console.log();
console.log("++++++++++++++++++++++++++++++++++++++++++++++")
// console.log(power.head())