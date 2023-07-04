import "./styles/subscriptionStyles.css"

const userEmail = document.getElementById("userEmail");

const urlSearchParams = new URLSearchParams(window.location.search);
const {email} = Object.fromEntries(urlSearchParams.entries());

userEmail.textContent = email;