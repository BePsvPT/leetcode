/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 
const leftBoundaries = root => {
    if (! root) {
        return []
    }
    
    return leftBoundaries(root.left ? root.left : root.right).concat(root.val)
}

const rightBoundaries = root => {
    if (! root) {
        return []
    }
    
    return rightBoundaries(root.right ? root.right : root.left).concat(root.val)
}

const treeLeaves = root => {
    if (! root) {
        return []
    }
    
    let leaves = root.left === root.right ? [root.val] : []
    
    return leaves.concat(treeLeaves(root.left), treeLeaves(root.right))
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var boundaryOfBinaryTree = function(root) {
    if (! root) {
        return []
    } else if ((root.left === null) && (root.left === root.right)) {
        return [root.val]
    }
    
    let lefts = leftBoundaries(root.left).reverse()
    let rights = rightBoundaries(root.right)
    let leaves = treeLeaves(root)
    
    lefts.pop()
    rights.shift()
    
    return [root.val].concat(lefts, leaves, rights)
};
