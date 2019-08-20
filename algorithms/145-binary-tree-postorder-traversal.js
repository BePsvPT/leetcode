/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    const stack = [], result = [];

    while (root) {
        const pre = root;

        if (root.left) {
            root = root.left;
            pre.left = null;
            stack.push(pre);
        } else if (root.right) {
            root = root.right;
            pre.right = null;
            stack.push(pre);
        } else {
            result.push(root.val);

            if (stack.length) {
                root = stack.pop();
            } else {
                root = null;
            }
        }
    }

    return result;
};
