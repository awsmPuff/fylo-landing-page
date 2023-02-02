const email = document.querySelector(".email-input");
const submit = document.querySelector(".submit");
const message = document.querySelector(".message");

const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

email.addEventListener("keypress", (e) => {
  if (!email.value) {
    submit.textContent = "Get Started For Free";
    submit.style.filter = "none";
    submit.style.cursor = "pointer";
  }
  if (e.key === "Enter") {
    e.preventDefault();
    submit.click();
  }
});

submit.addEventListener("click", () => {
  if (!email.value) {
    message.innerHTML = "Email address cannot be empty";
    submit.textContent = "Get Started For Free";
    submit.style.filter = "none";
    submit.style.cursor = "pointer";
  } else {
    if (regex.test(email.value)) {
      message.innerHTML = "";
      submit.textContent = "Subscribed!";
      submit.style.filter = "brightness(115%) grayscale(45%)";
      submit.style.cursor = "auto";
    } else {
      message.innerHTML = "Please enter a valid email address";
      submit.textContent = "Get Started For Free";
      submit.style.filter = "none";
      submit.style.cursor = "pointer";
    }
  }
});

