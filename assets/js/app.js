class ListNode {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  function addTwoNumbers() {
    const num1Input = document.getElementById("num1").value.trim();
    const num2Input = document.getElementById("num2").value.trim();
  
    const num1Array = num1Input.split(",").map(num => parseInt(num.trim()));
    const num2Array = num2Input.split(",").map(num => parseInt(num.trim()));
  
    const l1 = buildLinkedList(num1Array);
    const l2 = buildLinkedList(num2Array);
  
    const result = addTwoLinkedLists(l1, l2);
  
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<strong>Result:</strong> " + printLinkedList(result);
  }
  
  function buildLinkedList(nums) {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
  
    for (const num of nums) {
      current.next = new ListNode(num);
      current = current.next;
    }
  
    return dummyHead.next;
  }
  
  function addTwoLinkedLists(l1, l2) {
    const dummyHead = new ListNode(0);
    let p = l1;
    let q = l2;
    let current = dummyHead;
    let carry = 0;
  
    while (p || q) {
      const x = p ? p.val : 0;
      const y = q ? q.val : 0;
      const sum = x + y + carry;
      carry = Math.floor(sum / 10);
  
      current.next = new ListNode(sum % 10);
      current = current.next;
  
      if (p) p = p.next;
      if (q) q = q.next;
    }
  
    if (carry > 0) {
      current.next = new ListNode(carry);
    }
  
    return dummyHead.next;
  }
  
  function printLinkedList(head) {
    let result = "";
    let current = head;
  
    while (current) {
      result += current.val + " -> ";
      current = current.next;
    }
  
    result += "null";
    return result;
  }
  