const loginBtn = document.getElementById("login")

loginBtn.onclick = () => {
    loginBtn.innerHTML = "...جار التحميل "
    setTimeout(()=> {
        window.location.href = "result.html"
    }, 3000)
}