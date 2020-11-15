const auth = firebase.auth();

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const loginEmailId = document.getElementById("user_email");
const loginPassword = document.getElementById("user_password");
const UserLoginBtn = document.getElementById("userLogin_btn");
const AdminLoginBtn = document.getElementById("userAdmin_btn");

const username = document.getElementById("user_name");
const newEmali = document.getElementById("new_email");
const newPassword = document.getElementById("new_password");
const confirmPassword = document.getElementById("confirm_password");
const signupBtn = document.getElementById("signup_btn");
const messages = document.getElementById("messages");


signupBtn.onclick = () => {
    var email = newEmali.value;
    var password = newPassword.value;
    auth.createUserWithEmailAndPassword(email, password).then(() => {
        messages.innerHTML = " account created succesfully!";
        messages.hidden = false;
    }).catch((err) => {
        messages.innerHTML = err.message;
        messages.hidden = false;
    });

}

UserLoginBtn.onclick = () => {
    var email2 = loginEmailId.value;
    var password2 = loginPassword.value;

    auth.signInWithEmailAndPassword(email2, password2).then(() => {
        messages.innerHTML = " login succesfully!";
        messages.hidden = false;
    }).catch((err) => {
        messages.innerHTML = err.message;
        messages.hidden = false;
    });
}


sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});