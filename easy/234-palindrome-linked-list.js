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
var isPalindrome = function(head) {
    if (! head) {
        return true
    }
    
    let ptr1 = head, ptr2 = head, last = null, temp, count = 0, result = 1
    
    while (ptr2) {
        if (! ptr2.next) {
            count += 1
            break
        } else {
            ptr2 = ptr2.next.next
            count += 2
        }
        
        temp = ptr1
        ptr1 = ptr1.next
        temp.next = last
        last = temp
    }
    
    ptr2 = (count & 1) ? ptr1.next : ptr1
    
    temp = last
    last = ptr1
    ptr1 = temp
    
    while (ptr2) {
        result &= ptr1.val === ptr2.val
        
        ptr2 = ptr2.next
        
        temp = ptr1
        ptr1 = ptr1.next
        temp.next = last
        last = temp
    }
    
    return 1 === result
};
