// VARIABLES 
const name = document.getElementById("nameInput");
const email = document.getElementById("emailInput");
const phone = document.getElementById("phoneInput");
const message = document.getElementById("messageInput");
const submitBtn = document.getElementById("submitBtn");
console.log(submitBtn)

name.addEventListener('change', (e) => {
    console.log(name.value)
})

email.addEventListener('change', (e) => {
    console.log(email.value)
})

phone.addEventListener('change', (e) => {
    console.log(phone.value)
})

message.addEventListener('change', (e) => {
    console.log(message.value)
})



