//Daniel, Jimmy, Dathan
class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/*
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/


class BST {
    constructor() {
        this.root = null;
    }

    // height
    // size
    delete(val, current = this.root){
        if(this.root == null){
            return;
        }
        if (this.root.val === val) {
            var node = this.root;
            if (this.root.left === null && this.root.right === null) {
                this.root = null;
            }
            else if (this.root.left === null && this.root.right) {
                this.root = this.root.right;
            }
            else if (this.root.left && this.root.right === null) {
                this.root = this.root.left;
            }
            else {
                var tempNode = this.getSmallestFromSubtree(this.root.right);
                var tempVal = this.root.val;
                this.root.val= tempNode.val;
                tempNode.val = tempVal;
                this.removeSmallest(this.root.right);
            }
            return node;
        }
        while(current != null){
            if (current.left && current.left.val === val) {
                var node = current.left;
                //If left has no children
                if(current.left.left == null && current.left.right == null){
                    current.left = null;
                }
                //If left has one child
                else if(current.left.left == null && current.left.right !== null) {
                    current.left = current.left.right;
                }
                else if(current.left.left !== null && current.left.right === null) {
                    current.left = current.left.left;
                }
                //if left has two children
                else if(current.left.left && current.left.right){
                    var tempNode = this.getSmallestFromSubtree(current.left.right);
                    var tempVal = current.left.val;
                    current.left.val= tempNode.val;
                    tempNode.val = tempVal;
                    this.removeSmallest(current.left.right);
                }
                return node;
            }
            if(current.right && current.right.val == val){
                var node = current.right;
                //Check if right has children
                if(current.right.left == null && current.right.right == null){
                    current.right = null;
                }
                else if(current.right.left === null && current.right.right !== null) {
                    current.right =current.right.right;
                }
                else if (current.right.left !== null && current.right.right === null) {
                    current.right = current.right.left;
                }
                //if right has two children
                else if(current.right.left && current.right.right){
                    var tempNode = this.getSmallestFromSubtree(current.right.right);
                    var tempVal = current.right.val;
                    current.right.val= tempNode.val;
                    tempNode.val = tempVal;
                    this.removeSmallest(current.right.right);
                }
                return node;
            }
            if (current.val > val) {
                current = current.left;
            }
            else if (current.val < val) {
                current = current.right;
            }
        }

    }

    // delete(val, current){
    //     // if current is undefined, set as root
    //     if(current === undefined){
    //         current = this.root;
    //     };

    //     // if root is null, give up
    //     if(current === null){
    //         return null;
    //     };

    //     // check if val is smaller or greater
    //     if(val < current.val){
    //         // if smaller, ask again on the left subtree
    //         current.left = this.delete(val, current.left);
    //     }else if(val > node.val){
    //         // if larger, ask again on the right subtree
    //         current.right = this.delete(val, current.right);
    //     }else{
    //         //otherwise val is === to current.val

    //         // one child to the right, or empty
    //         if(!current.left){
    //             temp = current;
    //             current = current.right;
    //             return temp;
    //         // one child to the left
    //         }else if(!node.right){
    //             temp = current;
    //             current = current.left;
    //             return temp;
    //         }

    //         // two children

    //         // get the smallest value from the right subtree
    //         temp = this.getSmallestFromSubtree(current.right);

    //         // swap it with our current (might even be the root, who cares)
    //         current.val = temp.val;

    //         // call delete again, on the val we stole out of temp and swapped to current
    //         // this is always a leaf node with one or less children.
    //         current.right = this.delete(temp.val, current.right);
    //     }
    // }
//
//Find the node value
//Get the smallest from the tree on the right side of the node
//Swap the values of the smallest and the node
//Delete smallest from the tree on the right

    // am i deleting the root node?
    // am i deleting a node with no children? Done
    // am i deleting a node with one child? Done
    // am i deleting a node with two children? Done


// Preorder (DFS)
// (Root / Parent, Left, Right)
// 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    printPreorder(current){
        if(current === undefined){
            current = this.root;
        }

        if(current){
            // read everything, then recurse
            console.log(current.val);
            this.printPreorder(current.left);
            this.printPreorder(current.right);
        }
    }
    // BST.printPreorder();

// Inorder (DFS)
// (Left, Root / Parent, Right)
// 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
    printInorder(current){
        if(current === undefined){
            current = this.root;
        }

        if(current){
            // recurse left, then read, then recurse right
            this.printInorder(current.left);
            console.log(current.val);
            this.printInorder(current.right);
        }
    }

// Postorder (DFS)
// (Left, Right, Root / Parent)
// 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
    printPostorder(current){
        if(current === undefined){
            current = this.root;
        }

        if(current){
            // recurse in both directions, then read
            this.printPostorder(current.left);
            this.printPostorder(current.right);
            console.log(current.val);
        }
    }

// Preorder (DFS)
// (Root / Parent, Left, Right)
// 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    returnPreorderArray(current, array){
        if(current === undefined){
            current = this.root;
        }

        if(array === undefined){
            array = [];
        }

        if(current){
            array.push(current.val);
            this.printPreorderArray(current.right, array);
            this.printPreorderArray(current.left, array);
        }

        return array; // => [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
    }


// BONUS
// Levelorder (BFS)
// Row-by-row left-right top-down
// 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90
// HINT: you can use a queue, stack, or array to store nodes
    printLevelorder(current){
        if(current === undefined){
            current = this.root;
        };

        var queue = []; // "queue"

        if(current){
            queue.push(current);
        }

        while (queue.length > 0){
            var dequeuedNode = queue.shift(); // should probably import our actual queue
            console.log(dequeuedNode.val);

            if(dequeuedNode.left){
                queue.push(dequeuedNode.left);
            }

            if(dequeuedNode.right){
                queue.push(dequeuedNode.right);
            }
        }
    }

    // return true / false if the value exists within the given tree
    // if no tree is given, start a this.root
    // this.find(7)
    find(val, current){
        if(current === undefined){
            current = this.root;
        }

        if(current === null){
            return false;
        }

        if(current.val === val){
            return true;
        }

        if(current.val > val){
            current = current.left;
        }else{
            current = current.right;
        }

        return this.find(val, current);
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current){
        if(current === undefined){
            current = this.root;
        }

        if(current.left === null){
            this.root = current.right;
            current.right = null;
            return current;
        }

        if(current.left && (current.left.left === null)){
            var smallest = current.left;
            current.left = smallest.right;
            smallest.right = null;
            return smallest;
        }

        return this.removeSmallest(current.left);

    }

    // remove and return the largest node of a given tree
    removeLargest(node){}

    isEmpty(){
    };

    insert(node, node){
        if(tree === undefined){
            tree = this.root;
        };

        if(tree === null){
            this.root = node;
            return;
        };

        // go left
        if(tree.val > node.val){
            // check if null and add
            if(tree.left === null){
                tree.left = node;
                return;
            }else{
                // else recurse left
                return this.insert(node, tree.left);
            }
        // else go right
        }else if(tree.val < node.val){
            // check if null and add
            if(tree.right === null){
                tree.right = node;
                return;
            }else{
                // else recurse right
                return this.insert(node, tree.right);
            }
        }
    };

    getLargestFromSubtree(node){
        if(tree === undefined){
            tree = this.root;
        }

        // ... cont
    };

    getSmallestFromSubtree(node){
        // if no tree, tree is root
        if(tree === undefined){
            tree = this.root;
        }

        // if tree becomes null, return null
        if(tree === null){
            return null;
        }

        // if there is no further nodes, return tree
        if(tree.left === null){
            return tree;
        }

        // else recurse to the left and try again
        return this.getSmallestFromSubtree(tree.left);
    };
}

// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.htmlan