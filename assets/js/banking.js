//handle deposit button event

document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;

    const prevDepositTotal = document.getElementById("deposit-amount");

    const prevDeposit = prevDepositTotal.innerText;
    const currentDeposit = parseFloat(prevDeposit) + parseFloat(newDepositAmount);

    prevDepositTotal.innerText = currentDeposit;

    const currentBalancetext = document.getElementById("balance-total");
    const currentBalanceValue = currentBalancetext.innerText;

    const newBalanceTotal = parseFloat(currentBalanceValue) + parseFloat(newDepositAmount);
    currentBalancetext.innerText = newBalanceTotal;


    depositInput.value = "";

})
//withdraw button handle
document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const newWithdrawAmount = withdrawInput.value;

    const prevWithdrawTotal = document.getElementById("withdraw-amount");

    const prevWithdraw = prevWithdrawTotal.innerText;
    const currentWithdraw = parseFloat(prevWithdraw) + parseFloat(newWithdrawAmount);

    prevWithdrawTotal.innerText = currentWithdraw;

    const currentBalancetext = document.getElementById("balance-total");
    const currentBalanceValue = currentBalancetext.innerText;

    const newBalanceTotal = parseFloat(currentBalanceValue) - parseFloat(newWithdrawAmount);
    currentBalancetext.innerText = newBalanceTotal;


    withdrawInput.value = "";

})