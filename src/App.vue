<template>
<div id="app">
    <div class="d-flex navbar justify-content-between">
        <div class="logo">
            <img src="./assets/Vector.png" alt="">
        </div>
        <div class="navigation">
            <ul class="d-flex">
                <li><a href="">Projects</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
        </div>
        <div class="sign-in">
            <a href="">Login</a>
        </div>
    </div>
    <router-view />

    <div class="d-flex footer">
        <div class="logo-contact">
            <img src="./assets/logo2.png" alt="">

            <div class="contact">
                <p>contact@codeomnia.com</p>
                <p>+6285771074950</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
.navbar {
    background: linear-gradient(96.39deg, #3AA5E1 14.58%, #3AA5E1 14.59%, rgba(58, 165, 225, 0.78) 88.06%);
    padding: 20px 15%;
}

.logo img {
    width: 260px;
}

ul {
    list-style-type: none;
    margin-bottom: 0;
}

ul li {
    margin: 0 1em;
}

.sign-in {
    width: 260px;
    text-align: right;
}

.navbar a {
    text-decoration: none;
    color: white;
}

.footer {
    padding: 40px 15%;
}
</style>
