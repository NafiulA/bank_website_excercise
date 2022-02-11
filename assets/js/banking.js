//handle deposit button event

document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById("deposit-amount");

    const prevDeposit = depositTotal.innerText;
    const currentDeposit = parseFloat(prevDeposit) + parseFloat(newDepositAmount);

    depositTotal.innerText = currentDeposit;

    const currentBalancetext = document.getElementById("balance-total");
    const currentBalanceValue = currentBalancetext.innerText;

    const newBalanceTotal = parseFloat(currentBalanceValue) + parseFloat(newDepositAmount);
    currentBalancetext.innerText = newBalanceTotal;


    depositInput.value = "";

})
//withdraw button handle
document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById("deposit-amount");

    const prevDeposit = depositTotal.innerText;
    const currentDeposit = parseFloat(prevDeposit) + parseFloat(newDepositAmount);

    depositTotal.innerText = currentDeposit;

    const currentBalancetext = document.getElementById("balance-total");
    const currentBalanceValue = currentBalancetext.innerText;

    const newBalanceTotal = parseFloat(currentBalanceValue) + parseFloat(newDepositAmount);
    currentBalancetext.innerText = newBalanceTotal;


    depositInput.value = "";

})