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
var removeZeroSumSublists = function(head) {
    let nums = [];

    while (head) {
        if (head.val !== 0) {
            nums.push(head.val);
        }

        head = head.next;
    }

    let idx = 0;

    while (idx < nums.length) {
        let i = idx + 1, sum = nums[idx];

        for (; i < nums.length; ++i) {
            if ((sum += nums[i]) === 0) {
                nums = [...nums.slice(0, idx), ...nums.slice(i + 1)];
                idx = i = -1;
                break;
            }
        }

        ++idx;
    }

    if (nums.length === 0) {
        return null;
    }

    let result = new ListNode(nums.shift());
    let end = result;

    while (nums.length) {
        end.next = new ListNode(nums.shift());
        end = end.next;
    }

    return result;
};
