<template>
<div id="app">
    <div class="d-flex navb justify-content-between">
        <div class="logo">
            <img src="./assets/Vector.png" alt="">
        </div>
        <div class="navigation" id="nav">
            <ul class="d-flex">
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#team">Our Team</a></li>
            </ul>
        </div>
    </div>
    <router-view />

    <div class="footer">
        <div class="logo-contact">
            <img src="./assets/logo2.png" alt="">
            <div class="d-flex justify-content-between mt-4 footer-item">
                <div class="contact-footer">
                    <p><i class="fa fa-envelope fa-fw mr-1" aria-hidden="true"></i> contact@codeomnia.com</p>
                    <p><i class="fa fa-phone-alt fa-fw mr-1" aria-hidden="true"></i> +6285771074950</p>
                </div>

                <div class="link-footer">
                    <ul>
                        <li><a href=""><i class="fa fa-file fa-fw mr-1" aria-hidden="true"></i> Terms of Service</a></li>
                        <li><a href=""><i class="fas fa-question-circle fa-fw mr-1"></i> FAQ</a></li>
                    </ul>
                </div>

                <div class="social-media">
                    <ul>
                        <li><i class="fab fa-instagram fa-fw mr-1"></i> Instagram</li>
                        <li><i class="fab fa-twitter fa-fw mr-1"></i> Twitter</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>

    <div class="gototop">
        <a href="#top">
            <i style="color: #E06868" class="fa fa-arrow-circle-up fa-2x" aria-hidden="true"></i>
        </a>
    </div>

</div>
</template>

<script>
export default {
    name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo:wght@400;700&display=swap');

* {
    font-family: "Archivo", sans-serif;
}

.navb {
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

.navb a {
    text-decoration: none;
    color: white;
    font-size: 1.2em;
}

.footer {
    padding: 40px 15%;
}

.contact-footer p {
    color: #3AA5E1;
    margin-bottom: 10px;
}

.footer a {
    color: #3AA5E1;
    text-decoration: none;
}

.gototop {
    position: fixed;
    bottom: 2em;
    right: 1em;
    z-index: 5;
}

.footer li {
    color: #3AA5E1;
    margin-bottom: 10px;
}

@media only screen and (max-width: 900px) {
    .navb {
        padding: 20px 5%;
        flex-direction: column;
        justify-content: center;
    }

    .navb ul {
        padding: 20px 0;
    }

    .footer {
        padding: 40px 5%;
    }

    .contact-footer {
        margin: 10px 0;
    }

    .footer-item {
        flex-direction: column;
        justify-content: start;
    }

    .footer-item ul {
        padding: 10px 0;
    }

    .footer-item li {
        margin-left: 0;
    }
}

@media only screen and (max-width: 1360px) {
    .navb {
        padding: 20px 10%
    }

    .footer {
        padding: 40px 10%;
    }
}

/**
 * Smooth scrolling inside an element
 */
#projects,
#contact,
#team {
    scroll-behavior: smooth;
}

/**
 * Smooth scrolling on the whole document
 */
html {
    scroll-behavior: smooth;
}
</style>
