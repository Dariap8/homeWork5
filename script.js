function calculation() {
  let dividend = prompt("Enter number");
  let divisor = prompt("Enter another number");
  if (dividend % divisor == 0) {
    alert("There's no remainder");
  } else {
    alert("There's a remainder");
  }
}
