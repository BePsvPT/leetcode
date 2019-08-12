/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root, depth = 1) {
    if (!root) {
        return depth - 1;
    }

    const depthes = [];

    root.children.forEach((child) => {
        depthes.push(maxDepth(child, depth + 1));
    });

    return depthes.length ? Math.max(...depthes) : depth;
};
