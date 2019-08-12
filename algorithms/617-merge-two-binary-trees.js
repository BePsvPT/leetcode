/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const mergeVal = (t1, t2) => {
    if (!t1 && !t2) {
        return null;
    } else if (t1 && t2) {
        return t1.val + t2.val;
    } else if (t1) {
        return t1.val;
    } else {
        return t2.val;
    }
}

/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1 || !t2) {
        return t1 || t2;
    }

    t1.val += t2.val;

    if (t2.left) {
        if (!t1.left) {
            t1.left = new TreeNode(0);
        }

        mergeTrees(t1.left, t2.left);
    }

    if (t2.right) {
        if (!t1.right) {
            t1.right = new TreeNode(0);
        }

        mergeTrees(t1.right, t2.right);
    }

    return t1;
};
