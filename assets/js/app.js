document.getElementById("login-btn").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passField = document.getElementById("user-password");
    const userPass = passField.value;

    if (userEmail == "shehabnuntu@hotmail.com" && userPass == 'nadupadu') {
        window.location.href = "bank.html";
    }
    else {
        alert("Please use correct id(shehabnuntu@hotmail.com) and password(nadupadu)!")
    }
    emailField.value = "";
    passField.value = "";
})