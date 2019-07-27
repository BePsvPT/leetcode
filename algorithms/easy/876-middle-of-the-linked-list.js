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
var middleNode = function(head) {
    let total = 0, half = 0, current = 0, target = head;

    while (head) {
        ++total;

        half = (total - (total & 1 ? 1 : 0)) / 2;

        if (current < half) {
            ++current;

            target = target.next;
        }

        head = head.next;
    }

    return target;
};
