const findNode = (node, target) => {
    if (!node) {
        return null;
    } else if (node.val === target) {
        return node;
    }

    return findNode(node.left, target) || findNode(node.right, target);
}

const childNodes = (node) => {
    if (!node) {
        return 0;
    }

    return 1 + childNodes(node.left) + childNodes(node.right);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} n
 * @param {number} x
 * @return {boolean}
 */
var btreeGameWinningMove = function(root, n, x) {
    const target = findNode(root, x);
    const not_child = childNodes(target);
    const left_child = childNodes(target.left);
    const right_child = childNodes(target.right);

    if ((n - not_child) > not_child) {
        return true;
    } else if (left_child > (n - left_child)) {
        return true;
    } else if (right_child > (n - right_child)) {
        return true;
    }

    return false;
};
