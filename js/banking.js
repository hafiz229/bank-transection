// handle doposit button event
document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    // get the amount deposited
    const depositInput = document.getElementById("deposit-input");
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    // update deposit total
    const depositTotal = document.getElementById("deposit-total");
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    // update account balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceTotal = parseFloat(balanceTotal.innerText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    // clear the deposit input field
    depositInput.value = "";
  });

// handle withdraw event handler
document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    // get the withdraw input field
    const withdrawInput = document.getElementById("withdraw-input");
    // collect the withdraw amount (string format)
    const withdrawAmountText = withdrawInput.value;
    // convert the string format into float
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    // set withdraw total
    // get the existing withdraw total
    const withdrawTotal = document.getElementById("withdraw-total");
    // collect the existing withdraw total (string format)
    const previousWithdrawText = withdrawTotal.innerText;
    // conver the string format into float
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // add previousWithdrawTotal & newWithdrawAmount
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // update the withdrawTotal
    withdrawTotal.innerText = newWithdrawTotal;

    // update balance
    const balanceTotal = document.getElementById("balance-total");
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw input
    withdrawInput.value = "";
  });
