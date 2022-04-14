let error1 = document.getElementById("error1")
let error2 = document.getElementById("error2")
let password = document.getElementById("password")
let confirmPassword = document.getElementById("confirm_Password")
let resetPassword = document.getElementById("reset_password")
let card=document.getElementById("card")
let validation= new RegExp(/^[A-Za-z]{8,}$/)


let confirmMessage=`
<h1 class="text-2xl font-bold">Password Changed</h1>
<p class="text-sm mt-5">Your password has been updated! Now get back in the driver seat ,
races are waiting for you!
</p>
<button class="w-full bg-gray-900 p-2 mt-20 rounded text-white  tracking-wider text-lg uppercase ">Join a Race</button>
`


password.addEventListener("input", function () {
    if (!validation.test(password.value)) {
        error1.innerHTML = "Password must be at least 8 characters long and only contain alphabtes"
    } else {
        error1.innerHTML = ""
    }
})


confirmPassword.addEventListener("input", function () {
  if (confirmPassword.value != password.value) {
        error2.innerHTML = "Passwords do not match"
    } else {
        error2.innerHTML = ""
    }
})



resetPassword.addEventListener("click", function () {
  if (!validation.test(password.value)) {
        error1.innerHTML = "Password must be at least 8 characters long"
    } else if (confirmPassword.value != password.value) {
        error2.innerHTML = "Passwords do not match"
    } else {
 card.innerHTML=confirmMessage
    }
})



