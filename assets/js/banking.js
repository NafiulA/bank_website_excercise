//handle input 

function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const newInputAmountText = inputField.value;
    const inputValue = parseFloat(newInputAmountText);

    inputField.value = "";

    return inputValue;
}

//total updater funtion

function updateTotal(fieldID, amount) {
    const totalElement = document.getElementById(fieldID);
    const totalElementText = totalElement.innerText;
    const previousTotal = parseFloat(totalElementText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceField = document.getElementById("balance-total");
    const currentBalanceText = balanceField.innerText;
    const currentBalanceValue = parseFloat(currentBalanceText);
    return currentBalanceValue;
}

//update balance function

function updateBalance(amount, isAdd) {
    const balanceField = document.getElementById("balance-total");
    const currentBalanceValue = getCurrentBalance();
    if (isAdd == true) {
        balanceField.innerText = currentBalanceValue + amount;
    }
    else {
        balanceField.innerText = currentBalanceValue - amount;
    }
}
//handle deposit button event

document.getElementById("deposit-btn").addEventListener("click", function () {
    const depositAmount = getInputValue("deposit-input");

    if (depositAmount > 0) {
        updateTotal("deposit-amount", depositAmount);
        updateBalance(depositAmount, true);
    }
    else {
        alert("Please enter a valid amount")
    }
})
//withdraw button handle

document.getElementById("withdraw-btn").addEventListener("click", function () {
    const withdrawAmount = getInputValue("withdraw-input");
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotal("withdraw-amount", withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    else if (withdrawAmount > currentBalance) {
        alert("You cannot withdraw what you don't have.");
    }
    else {
        alert("Please enter a valid amount");
    }

})