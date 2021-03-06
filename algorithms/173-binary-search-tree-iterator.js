/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function(root) {
    this.stack = [];
    this.root = root;
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    while (this.root) {
        if (this.root.left) {
            const pre = this.root
            this.root = this.root.left;
            pre.left = null;
            this.stack.push(pre);
        } else {
            const val = this.root.val;

            if (this.root.right) {
                this.root = this.root.right;
            } else if (this.stack.length) {
                this.root = this.stack.pop();
            } else {
                this.root = null;
            }

            return val;
        }
    }
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.root !== null;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
