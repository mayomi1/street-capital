function showMenu () {
    document.getElementById('show-nav').style.display = "inline";
    document.getElementById('hamberger').style.display = "none";
    document.getElementById('close').style.display = "inline";
}

function closeMenu () {
    document.getElementById('show-nav').style.display = "none";
    document.getElementById('hamberger').style.display = "inline";
    document.getElementById('close').style.display = "none";
}

function login() {
    document.getElementById('login').style.display = "none";
    document.getElementById('register').style.display = "none";
    document.getElementById('logout').style.display = "inline";
    document.getElementById('login-mobile').style.display = "none";
    document.getElementById('register-mobile').style.display = "none";
    document.getElementById('logout-mobile').style.display = "block";
    document.getElementById('dashboard').style.display = "block";
    document.getElementById('login-form').style.display = "none";

    
}

function logout() {
    document.getElementById('login').style.display = "inline";
    document.getElementById('register').style.display = "inline";
    document.getElementById('logout').style.display = "none";
    document.getElementById('login-mobile').style.display = "block";
    document.getElementById('register-mobile').style.display = "block";
    document.getElementById('logout-mobile').style.display = "none";
    document.getElementById('dashboard').style.display = "none";
    document.getElementById('login-form').style.display = "flex";

}

function submit() {
    document.getElementById('dashboard').style.display = "block";
    login();
}