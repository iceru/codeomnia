<template>
<div class="homepage">
    <div class="cta d-flex justify-content-between align-items-center">
        <div class="cta-text">
            <h1>Utilize your business with the newest technology</h1>
            <p>CodeOmnia is an IT Consultant and Website Developer based in Indonesia who driven in newest technology and always bringing the best for your business or company.</p>
            <a name="" id="" class="btn btn-white" href="#" role="button">Contact Us</a>
        </div>
        <div class="cta-image">
            <img src="@/assets/a.png" alt="">
        </div>
    </div>

    <div class="projects" id="projects">
        <h1 class="text-center text-uppercase title-pro">Our Projects</h1>
        <div class="project-cat d-flex justify-content-center">
            <a href="#">Web Development</a>
        </div>
        <div class="web mt-4">
            <div class="senimart d-flex">
                <div id="carouselId" class="carousel slide mr-4" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                        <li data-target="#carouselId" data-slide-to="3"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src="@/assets/sm1.png" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/sm3.png" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/sm4.png" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/sm5.png" alt="">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="text">
                    <h2 class="m-0">Senimart</h2>
                    <a href="https://senimart.id/" target="_blank" rel="noopener noreferrer">
                        <p style="color: #3AA5E1" class="my-1">senimart.id</p>
                    </a>
                    <p>Senimart is an online platform that is an alternative for art connoisseurs in finding and buying works of art without having to come to an art gallery. Senimart is also intended as a forum for artists to connect with other new artists and to open opportunities for collaboration between artists or their work with various artistic or non-art activations in an effort to introduce and develop the potential of the artists and their works.</p>
                </div>
            </div>
            <div class="stemcell d-flex mt-5">
                <div id="carouselId2" class="carousel slide mr-4" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselId" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselId" data-slide-to="1"></li>
                        <li data-target="#carouselId" data-slide-to="2"></li>
                        <li data-target="#carouselId" data-slide-to="3"></li>
                        <li data-target="#carouselId" data-slide-to="4"></li>
                    </ol>
                    <div class="carousel-inner" role="listbox">
                        <div class="carousel-item active">
                            <img src="@/assets/asc1.png" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/asc2.png" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/asc3.png" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/asc4.png" alt="">
                        </div>
                        <div class="carousel-item">
                            <img src="@/assets/asc5.png" alt="">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselId2" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselId2cd" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="text">
                    <h2 class="m-0">Asia Stem Cell Center</h2>
                    <a href="https://asiastemcellcenter.com/" target="_blank" rel="noopener noreferrer">
                        <p style="color: #3AA5E1" class="my-1">asiastemcellcenter.com</p>
                    </a>
                    <p>Asia Stem Cell Center (ASC) is a stem cell processing laboratory that has an operational permit certificate from the Indonesian Ministry of Health where stem cell processing and processing uses Good Manufacturing Practice (GMP) standards.</p>
                </div>
            </div>

        </div>
    </div>

    <div class="contact" id="contact">
        <h1 class="text-center text-uppercase title-contact">Get In Touch With Us</h1>
        <div class="row mt-5">
            <div class="contact-image col-md-12 col-lg-7">
                <img src="@/assets/contact.png" class="w-100" alt="">
            </div>
            <div v-if="show_contact == true" class="contact-form col-md-12 col-lg-5">
                <p>Contact us by filling out the information below</p>

                <div v-if="contact_notice !=  ''" class="alert alert-warning">
                    There was a problem submitting your message. {{ contact_notice }}
                </div>

                <form @submit.prevent="sendContactMessage()">
                    <div class="form-group">
                        <label for="">Email</label>
                        <input v-model="contact_email" type="email" class="form-control" name="email" id="" aria-describedby="helpId" placeholder="">
                        <small id="helpId" class="form-text text-muted">We will not share your email to anyone</small>
                    </div>
                    <div class="form-group">
                        <label for="">Your Messages</label>
                        <textarea v-model="contact_message" class="form-control" name="message" id="" rows="5"></textarea>
                    </div>

                    <button type="submit" class="btn btn-red">Submit</button>
                </form>
            </div>

            <div class="contact-form col-md-12 col-lg-5 d-flex flex-column justify-content-center" v-else>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for contacting us, we'll get back to you as soon as we can.</p>
            </div>
        </div>
    </div>

    <div class="our-team" id="team">
        <h1 class="text-center text-uppercase title-team">Our Team</h1>
        <div class="d-flex flex-wrap justify-content-between">
            <div class="team-item">
                <h3>Muhamad Hafiz</h3>
                <p>UI/UX Designer - Front End Developer</p>
                <div class="image-team text-center">
                    <img src="@/assets/pp.jpg" alt="">
                </div>

            </div>
            <div class="team-item">
                <h3>Reza Mukhlis Qurbany</h3>
                <p>Back End Developer</p>
                <div class="image-team text-center">
                    <img src="@/assets/reza.jpeg" alt="">
                </div>

            </div>
            <div class="team-item">
                <h3>Elvandio Frinandy</h3>
                <p>System Analyst - QA Tester</p>
                <div class="image-team text-center">
                    <img src="@/assets/elvan.jpg" alt="">
                </div>

            </div>
        </div>
    </div>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
        <path fill="#3AA5E1" fill-opacity="1" d="M0,96L48,96C96,96,192,96,288,101.3C384,107,480,117,576,122.7C672,128,768,128,864,117.3C960,107,1056,85,1152,80C1248,75,1344,85,1392,90.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
    </svg>
</div>
</template>

<script>
import {
    Auth
} from '@/firebase/auth.js'

export default {
    data() {
        return {
            title: 'CodeOmnia',
            show_contact: true,
            contact_email: '',
            contact_message: '',
            contact_notice: '',
        }
    },
    methods: {
        sendContactMessage() {
            if (!this.validEmail(this.contact_email)) {
                this.contact_notice = 'The email address format is wrong';
            } else if (this.contact_message.length < 10) {
                this.contact_notice = 'Your message is too short';
            } else {
                const url = `https://us-central1-codeomnia-ccb68.cloudfunctions.net/sendEmail?email_from=${this.contact_email}&message=${this.contact_message}`
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                };
                fetch(url, requestOptions);
                this.show_contact = false;
            }
        },

        validEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
            return re.test(email);
        }
    }
}
</script>

<style scoped>
.cta {
    background: linear-gradient(96.39deg, #3AA5E1 14.58%, #3AA5E1 14.59%, rgba(58, 165, 225, 0.78) 88.06%);
    padding: 20px 15%;
    color: white;
    padding-bottom: 200px;
}

.cta-text h1 {
    font-weight: bold;
}

.btn-white {
    background: white;
    color: #3AA5E1;
    border-color: white;
}

.btn-red {
    background: white;
    color: #E06868;
    border-color: white;
}

.title-pro {
    color: #E06868;
    font-weight: bold;
}

.title-contact {
    color: #3AA5E1;
    font-weight: bold;
}

.title-team {
    font-weight: bold;
    margin-bottom: 1em;
}

.projects {
    margin: 50px 15%;
    margin-top: -150px;
    background: white;
    box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 2em;
    min-height: 500px;
}

.project-cat a {
    margin: 10px 20px;
    text-decoration: none;
    color: black;
}

.contact {
    margin: 150px 15%;
    background: white;
    border-radius: 10px;
    padding: 20px;
    z-index: 10;
}

.contact-form {
    background: linear-gradient(108.02deg, #E06868 9.77%, rgba(224, 104, 104, 0.84) 88.7%);
    padding: 1.3em;
    border-radius: 10px;
    color: white;
}

.contact-form small {
    color: white !important;
}

.our-team {
    background: #3AA5E1;
    padding: 50px 15% 20px 15%;
    z-index: 1;
    color: white;
}

.team-item {
    background: #64b3e0;
    border-radius: 10px;
    padding: 20px;
    color: white;
    margin: 20px;
    width: 28%;
}

@media only screen and (max-width: 900px) {
    .team-item {
        width: 100%;
    }
}

.team-item img {
    border-radius: 300px;
    width: 220px;
    height: 220px;
    object-fit: cover;
    object-position: center;
}

.web img {
    width: 600px;
}

.web .text h2 {
    color: #E06868;
    font-weight: bold;
}

@media only screen and (max-width: 900px) {
    .cta {
        padding: 20px 5%;
        padding-bottom: 100px;
        flex-direction: column;
    }

    .cta img {
        width: 400px;
    }

    .projects {
        margin: 50px 5%;
        margin-top: -50px;
        padding: 2em 1em;
    }

    .senimart,
    .stemcell {
        flex-direction: column;
    }

    .senimart img,
    .stemcell img {
        width: 350px;
        margin: 10px auto !important;

    }

    .contact {
        margin: 100px 5%;
    }

    .contact img {
        width: 400px;
        margin-bottom: 3em;
    }

    .team-item {
        margin: 1em 0;
    }
}
</style>
