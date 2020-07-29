/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// for every given node going to grab the value from the first linked list and second linked list and add them together and also add any carry over from the previous input
// as every single node element only has a single digit number, the highest number we can get is 18 (9 + 9) and the maximum carry over is 1
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode(0)
    let node = head
    let carry = 0
    
    // traverse both l1 and l2 once both of these are false we will exit out of this while loop
    while (l1 || l2) {
        // extract either l1 or l2. 
        // if l1 is present then grab value from l1 else just return 0
        let l1Value = l1 ? l1.val : 0
        // if l1 is present then grab value from l1 else just return 0
        let l2Value = l2 ? l2.val : 0
        // sum the values and for every iteration see if you need to update value of carry to 1 or not
        let sum = l1Value + l2Value + carry
        // reset carry to 0 unless sum is greater than 9
        carry = 0
        let newValue = sum
        if (sum > 9) {
            newValue = sum % 10
            // update carry to be 1 max
            carry = 1
        }
        // create new linked list node and pass in newValue
        node.next = new ListNode(newValue)
        // update linked list
        node = node.next

        if (l1) {
            l1 = l1.next
        }

        if (l2) {
            l2 = l2.next
        }
    }
    // if the last node in the linked list has a carry over of 1 then you need to add one more node at the end which is the value of the carry over
    if (carry) {
        node.next = new ListNode(carry)
    }

    return head.next
};

console.log(addTwoNumbers([2,4,3], [5,6,4]))