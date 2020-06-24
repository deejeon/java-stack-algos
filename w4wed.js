// jerry , isaac, daniel, bilal

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

// functionCall(data);
// functionCall(data2);

// Preorder (DFS)
// (Root / Parent, Left, Right)
// 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90

// Inorder (DFS)
// (Left, Root / Parent, Right)
// 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90

// Postorder (DFS)
// (Left, Right, Root / Parent)
// 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25

// BONUS
// Levelorder (BFS)
// Row-by-row left-right top-down
// 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90


class BST {
    constructor() {
        this.root = null;
    }

    printPreorder(current){
        if(current === undefined){
            current = this.root;
        }

        if(current){
            console.log(current.val);
            this.printPreorder(current.right);
            this.printPreorder(current.left);
        }


    }

    printInorder(current = this.root){
        if (current) {
            this.printInorder(current.left);
            console.log(current.val);
            this.printInorder(current.right);
        }
    }

    printPostorder(current = this.root){
        if (current) {
            this.printPostorder(current.left);
            this.printPostorder(current.right);
            console.log(current.val);
        }
    }

    returnPreorderArray(current = this.root, array = []){
        if (current) {
            array.push(current.val);
            this.returnPreorderArray(current.left, array);
            this.returnPreorderArray(current.right, array);
        }
        return array;
    }

    // bonus
    // HINT: you can use a queue, stack, or array to store nodes
    printLevelorder(current){}

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