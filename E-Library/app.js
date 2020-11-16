const auth = firebase.auth();

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

const loginEmailId = document.getElementById("user_email");
const loginPassword = document.getElementById("user_password");
const UserLoginBtn = document.getElementById("userLogin_btn");
const AdminLoginBtn = document.getElementById("userAdmin_btn");
const messages2 = document.getElementById("messages2");
const bar2 = document.getElementById("progress2");

const username = document.getElementById("user_name");
const newEmali = document.getElementById("new_email");
const newPassword = document.getElementById("new_password");
const confirmPassword = document.getElementById("confirm_password");
const signupBtn = document.getElementById("signup_btn");
const messages1 = document.getElementById("messages1");
const bar1 = document.getElementById("progress1");



signupBtn.onclick = () => {

    if (newPassword.value == confirmPassword.value) {
        var email = newEmali.value;
        var password = newPassword.value;
        bar1.hidden = false;
        messages1.hidden = true;
        setTimeout(() => {
            auth.createUserWithEmailAndPassword(email, password).then(() => {
                messages1.innerHTML = " account created succesfully!";
                messages1.hidden = false;
                bar1.hidden = true;
            }).catch((err) => {
                messages1.innerHTML = err.message;
                messages1.hidden = false;
                bar1.hidden = true;
            });
        }, 3000);


    } else {
        messages1.innerHTML = "Password does not match";
        messages1.hidden = false;
        console.log(username.value);
    }

}




UserLoginBtn.onclick = () => {
    var email2 = loginEmailId.value;
    var password2 = loginPassword.value;
    bar2.hidden = false;
    messages2.hidden = true;
    setTimeout(() => {
        auth.signInWithEmailAndPassword(email2, password2).then(() => {
            messages2.innerHTML = " login succesfully!";
            messages2.hidden = false;
            bar2.hidden = true;
        }).catch((err) => {
            messages2.innerHTML = err.message;
            messages2.hidden = false;
            bar2.hidden = true;
        });
    }, 3000);

}


sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

//progress bar