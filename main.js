let calculate_button = document.getElementById('calculate');
let bill_amount = document.getElementById('bill_amount');
let tip_percent = document.getElementById('percent');
let total = document.getElementById('total');


calculate_button.onclick = function() {

  // tip amount = calculate bill input times tip input
  const tip_amount = (bill_amount.value * tip_percent.value/100).toFixed(2);
  // console.log(tip_percent.value)

  tip.innerHTML = tip_amount

  const total_amount = Number(bill_amount.value) + Number(tip_amount);
  total.innerHTML = total_amount.toFixed(2);
}
