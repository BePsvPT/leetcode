/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    if (!root) {
        return [];
    }

    const stack = [root];
    const result = [];

    while (stack.length) {
        const node = stack.pop();

        if (!node.children.length) {
            result.push(node.val);
        } else {
            stack.push(node, ...node.children.reverse());
            node.children = [];
        }
    }

    return result;
};
