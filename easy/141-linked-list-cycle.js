/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let a = head, b = head
    
    while (a && b) {
        a = a.next
        b = b.next
        
        if (! b) {
            return false
        }
        
        b = b.next
        
        if (a == b) {
            return true
        }
    }
    
    return false
};
