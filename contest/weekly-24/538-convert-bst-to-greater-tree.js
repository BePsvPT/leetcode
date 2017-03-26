/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

let nums = []
let sums = []

const treeToArray = root => {
    if (! root) {
        return []
    }
    
    return [root.val].concat(treeToArray(root.left), treeToArray(root.right))
}

const transformTree = (root) => {
    if (! root) {
        return
    }
    
    if (root.left) {
        transformTree(root.left)
    }
    
    if (root.right) {
        transformTree(root.right)
    }
    
    let index = nums.findIndex(num => { return num > root.val })
    
    if (index > -1) {
        root.val += sums[index]
    }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    nums = treeToArray(root).sort((a, b) => b - a)
    sums = Array.from(nums)
    
    for (let i = 1; i < sums.length; ++i) {
        sums[i] += sums[i-1]
    }
    
    nums = nums.reverse()
    sums = sums.reverse()
    
    transformTree(root)
    
    return root
};
