function LinkedList () {
    let head = null;
    let tail = null;
    let length = 0;

    const Node =function (element) {
        this.data = element;
        this.next = null;
    }

    this.head = ()=>{
        return head;
    }

    this.size = ()=>{
        return length;
    }

    this.add = ()=>{
        const newNode = new Node();
        if (head === null){
            head = newNode;
        }else{
            let currentNode = head;
            while(currentNode.next){
                currentNode = currentNode.next;
            }
            currentNode = newNode;
        }
        length++
    }
}

const power = new LinkedList()
power.add(1);
power.add('12');
power.add('hello');
power.add([12])
power.add({name:'Jo'})

console.log(power.size());






































// function LinkedList () {
//     let length = 0;
//     let head = null;

//     const Node = function (element) {
//         this.element = element;
//         this.next = null;
//     }

//     this.head = function () {
//         return head;
//     }

//     this.size = function () {
//         return length;
//     }

//     this.add = (element) => {
//         const node = new Node (element);
//         if (head === null){
//             head = node;
//         } else {
//             let currentNode = head;
//             while (currentNode.next){
//                 currentNode = currentNode.next;
//             }
//             currentNode.next = node;
//         }
//         length++;
//     }
// }

// const boom = new LinkedList();
// boom.add('heey')
// boom.add('byee')
// console.log(boom.size());