$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Learner", "Developer", "Editor", "Designer", "Freelancer"],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Learner", "Developer", "Editor", "Designer", "Freelancer"],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Learner", "Developer", "Editor", "Designer", "Freelancer"],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Learner", "Developer", "Editor", "Designer", "Freelancer"],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const statusMessage = document.getElementById("statusMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);

        fetch("https://formspree.io/f/mvojzgrw", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                statusMessage.textContent = "Thank you for contacting us!";
                statusMessage.classList.remove("error");
                statusMessage.style.display = "block";
            } else {
                statusMessage.textContent = "Oops! There was a problem submitting your form";
                statusMessage.classList.add("error");
                statusMessage.style.display = "block";
            }
        })
        .catch(error => {
            statusMessage.textContent = "Oops! There was a problem submitting your form";
            statusMessage.classList.add("error");
            statusMessage.style.display = "block";
        });
    });
});
 const menuBtn = document.querySelector(".menu-btn i");
        const menu = document.querySelector(".menu");
        const menuLinks = document.querySelectorAll(".menu li a");

        // Toggle menu when hamburger icon is clicked
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("active");
        });

        // Close the menu when a link is clicked
        menuLinks.forEach(link => {
            link.addEventListener("click", () => {
                menu.classList.remove("active");
            });
        });
document.querySelectorAll('.btn-readmore').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const card = this.closest('.project-card');
        const shortDesc = card.querySelector('.short-desc');
        const fullDesc = card.querySelector('.full-desc');
        const isExpanded = fullDesc.style.display === 'block';

        if (isExpanded) {
            shortDesc.style.display = 'block';
            fullDesc.style.display = 'none';
            this.textContent = 'Read More';
        } else {
            shortDesc.style.display = 'none';
            fullDesc.style.display = 'block';
            this.textContent = 'Read Less';
        }
    });
});
// Get the current year
    const currentYear = new Date().getFullYear();
    
    // Set the year in the footer
    document.getElementById('current-year').textContent = currentYear;

// Get the current year
const currentYear = new Date().getFullYear();

// Set the year in the footer
document.getElementById('current-year').textContent = currentYear;
