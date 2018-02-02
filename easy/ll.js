/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let cur = 0;
    let ind = 0;
    let curNode = head;
    let indNode = head;
    
    while(curNode.next) {
        cur++;
        curNode = curNode.next;

        if (cur - ind > n) {
            ind++;
            indNode = indNode.next;
        }
    }
    
    if (cur === ind) {
        return null;
    }
    if (n === 1) {
        indNode.next = null;            
    }
    else if (cur - ind < n) {
        head = head.next;
    }
    else {
        indNode.next.val = indNode.next.next.val;
        indNode.next.next = indNode.next.next.next;
    }

    return head;
    
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let a = l1;
    let b = l2;
    let head =null;
    let c = null;

    while(a || b) {
        if (!!a && (!b || a.val <= b.val)) {
            !head ? head = a : c.next = a;
            c = a;
            a = a.next;
        }
        else if (!!b && (!a || a.val > b.val)) {
            !head ? head = b : c.next = b;
            c = b;
            b = b.next;
        }
    }

    return head;
};


let a1 = new ListNode(1);
// let a2 = new ListNode(2);
// a1.next = a2;
// let a3 = new ListNode(3);
// a2.next = a3;
// let a4 = new ListNode(4);
// a3.next = a4;
console.log(removeNthFromEnd(a1, 1));