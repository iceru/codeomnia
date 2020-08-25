<template>
<div class="homepage">
    <div class="cta d-flex justify-content-between align-items-center">
        <div class="cta-text">
            <h1>Utilize your business with the newest technology</h1>
            <p>CodeOmnia is an IT Consultant and Website Developer based in Indonesia who driven in newest technology and always bringing the best for your business or company.</p>
            <a name="" id="" class="btn" href="#" role="button">Contact Us</a>
        </div>
        <div class="cta-image">
            <img src="@/assets/a.png" alt="">
        </div>
    </div>

    <div class="projects">
        <h1 class="text-center text-uppercase">Our Projects</h1>
        <div class="project-cat d-flex justify-content-center">
            <a href="">Web Development</a>
            <a href="">Android Application</a>
        </div>
    </div>

    <div class="contact">
        <h1 class="text-center text-uppercase">Get In Touch With Us</h1>
        <div class="row mt-5">
            <div class="contact-image col-md-7">
                <img src="@/assets/contact.png" alt="">
            </div>
            <div class="contact-form col-md-5">
                <p>Contact us by filling out the information below</p>
                <div class="form-group">
                    <label for="">Email</label>
                    <input type="email" class="form-control" name="email" id="" aria-describedby="helpId" placeholder="">
                    <small id="helpId" class="form-text text-muted">We will not share your email to anyone</small>
                </div>
                <div class="form-group">
                    <label for="">Your Messages</label>
                    <textarea class="form-control" name="message" id="" rows="5"></textarea>
                </div>
            </div>
        </div>
    </div>

    <div class="our-team">
        <h1 class="text-center text-uppercase">Our Team</h1>
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
export default {

}
</script>

<style scoped>
.cta {
    background: linear-gradient(96.39deg, #3AA5E1 14.58%, #3AA5E1 14.59%, rgba(58, 165, 225, 0.78) 88.06%);
    padding: 20px 15%;
    color: white;
    padding-bottom: 200px;
}

.btn {
    background: white;
    color: #3AA5E1;
}

.projects {
    margin: 50px 15%;
    margin-top: -150px;
    background: white;
    box-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    padding: 20px;
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

@media only screen and (max-width: 1000px) {
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
</style>
