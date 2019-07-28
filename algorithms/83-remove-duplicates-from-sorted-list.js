/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let ptr = head
    
    while (ptr) {
        while (ptr.next) {
            if (ptr.val !== ptr.next.val) {
                break
            }
            
            ptr.next = ptr.next.next
        }
        
        ptr = ptr.next
    }
    
    return head
};
