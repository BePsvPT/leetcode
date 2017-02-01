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
var addTwoNumbers = function(l1, l2) {
    let temp = [], sum = 0
    
    do {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + Math.floor(sum / 10)
        
        temp.push(sum % 10)
        
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    } while (l1 || l2)
    
    if (sum >= 10) {
        temp.push(1)
    }
    
    return temp.reverse().reduce((acc, val) => {
        let result = new ListNode(val)
        
        result.next = acc
        
        return result
    }, null)
};
