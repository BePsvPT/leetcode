/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (! (l1 || l2)) {
        return null
    } else if (! l1) {
        return l2
    } else if (! l2) {
        return l1
    } else if (l1.val > l2.val) {
        [l1, l2] = [l2, l1]
    }
    
    let head = l1
    
    while (l1 || l2) {
        if (! l2 || ! l1.next) {
            l1.next = l1.next || l2
            
            break
        } else if (l1.next.val > l2.val) {
            let temp = l2
            
            l2 = l2.next
            temp.next = l1.next
            l1.next = temp
        }
        
        l1 = l1.next
    }
    
    return head
};
