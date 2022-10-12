function BinarySearchTree() {
    let root = null;

    const Node = function (element) {
        this.data = element;
        this.left = null;
        this.right = null;
    }

    this.root = () => {
        return root.data;
    }

    this.insert = (element) => {
        if (root === null) {
            root = new Node(element);
            return;
        } else {
            let currentNode = root;
            while (true) {
                if (element < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = new Node(element);
                        break;
                    } else {
                        currentNode = currentNode.left;
                    }
                } else if (element > currentNode.data) {
                    if (currentNode.right === null) {
                        currentNode.right = new Node(element);
                        break;
                    } else {
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    this.contains = (element) => {
        let currentNode = root;
        while (currentNode !== null) {
            if (element < currentNode.data) {
                currentNode = currentNode.left;
            } else if (element > currentNode.data) {
                currentNode = currentNode.right;
            } else {
                return true;
            }
        }
        return false;
    }

    this.remove = (element) => {
        removeHelper(element, root, null);
    }

    function removeHelper(element, currentNode, parentNode) {
        while (currentNode !== null) {
            if (element < currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            } else if (element > currentNode.data) {
                parentNode = currentNode;
                currentNode = currentNode.right;
            } else {
                if (currentNode.left !== null && currentNode.right !== null) {
                    currentNode.data = getMinValue(currentNode.right);
                    removeHelper(currentNode.data, currentNode.right, currentNode);
                } else {
                    if (parentNode === null) {
                        if (currentNode.right === null) {
                            root = currentNode.left;
                        } else {
                            root = currentNode.right;
                        }
                    } else {
                        if (parentNode.left === currentNode) {
                            if (currentNode.right === null) {
                                parentNode.left = currentNode.left;
                            } else {
                                parentNode.left = currentNode.right;
                            }
                        } else {
                            if (currentNode.right === null) {
                                parentNode.right = currentNode.left;
                            } else {
                                parentNode.right = currentNode.right;
                            }
                        }
                    }
                }
                break;
            }
        }
    }

    function getMinValue(currentNode) {
        if (currentNode.left === null) {
            return currentNode.data;
        } else {
            return this.getMinValue(currentNode.left);
        }
    }
}

const tree = new BinarySearchTree;
tree.insert(10)
tree.insert(8)
tree.insert(11)
tree.remove(10)

console.log(tree.root());

console.log(tree.contains(10))