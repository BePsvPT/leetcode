/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const treeToArray = (arr, node, level) => {
    if (!node) {
        return;
    }

    if (!arr.hasOwnProperty(level)) {
        arr[level] = [];
    }

    arr[level].push(node.val);

    treeToArray(arr, node.left, level + 1);
    treeToArray(arr, node.right, level + 1);
};

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    const arr = {}, sum = {};
    let idx = 1, max = Number.MIN_SAFE_INTEGER;

    treeToArray(arr, root, 1);

    Object.keys(arr).forEach((level) => {
        const sum = arr[level].reduce((acc, val) => acc + val, 0);

        if (sum > max) {
            max = sum;
            idx = level;
        }
    });

    return idx;
};
