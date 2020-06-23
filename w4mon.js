// Daniel, Niv, Jerry

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // return true / false if the value exists within the given tree
    // if no tree is given, start a this.root
    find(val, node = this.root){
        if(node.val === val){
            return true;
        }
        if (val<node.val){
            if(node.left===null){
                return false;
            }
            else {
                return this.find(val, node.left);
            }
        }
        if (val>node.val){
            if(node.right===null){
                return false;
            }
            else{
                return this.find(val, node.right);
            }
        }
    }

    // remove and return the smallest node of a given tree
    removeSmallest(node=this.root, prevNode=null){
        if (this.isEmpty()){
            return null;
        }
        if (this.root.left === null){
            this.root = this.root.right;
            node.right = null;
            return node;
        }
        if (node.left === null){
            prevNode.left = node.right;
            node.right = null;
            return node;
        } else {
            return this.removeSmallest(node.left, node);
        }
    }

    // remove and return the largest node of a given tree
    removeLargest(node=this.root, prevNode=null){
        if (this.isEmpty()){
            return null;
        }
        if (this.root.right === null){
            this.root = this.root.left;
            node.left = null;
            return node;
        }
        if (node.right === null){
            prevNode.right = node.left;
            node.left = null;
            return node;
        } else {
            return this.removeLargest(node.right, node);
        }
    }

    isEmpty(){
        return this.root === null;
    };

    insert(node, tree){
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

    getLargestFromSubtree(tree){
        if(tree === undefined){
            tree = this.root;
        }

        // ... cont
    };

    getSmallestFromSubtree(tree){
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

var tree = new BST();
// tree.insert(new BSTNode(10), tree.root);
tree.insert(new BSTNode(111), tree.root);
tree.insert(new BSTNode(3), tree.root);
tree.insert(new BSTNode(1), tree.root);
tree.insert(new BSTNode(2), tree.root);
console.log(tree);

console.log(tree.removeSmallest());
console.log(tree);

console.log(tree.removeLargest());
console.log(tree);