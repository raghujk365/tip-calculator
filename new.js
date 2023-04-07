function calculateTip() {
    // Get the bill amount and tip percentage
    const billAmount = document.getElementById("bill-amount").value;
    const tipPercentage = document.getElementById("tip-percentage").value;
  
    // Calculate the tip amount and total bill
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalBill = parseFloat(billAmount) + parseFloat(tipAmount);
  
    // Display the tip percentage and total bill
    document.getElementById("tip-display").textContent = tipPercentage;
    document.getElementById("total-display").textContent = totalBill.toFixed(2);
  }
  