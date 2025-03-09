document.addEventListener("DOMContentLoaded", () => {
    const animateYElements = document.querySelectorAll(".transform_Y");
    const swipers = document.querySelectorAll(".swiper");

    //animate y transition
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "transform 0.6s ease-out"; 
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target); // Optional: Stop observing after the animation
            }
        });
    }, { threshold: 0.5 });

     //adding y animation observer 
     animateYElements.forEach(element => {
        observer.observe(element);
    });

    /******* swiper intersection observer *********/

    const options = {
        threshold: 0,
        rootMargin: "-300px" //how much of target should be in space before observer starts 
        //where in viewport should the obvserver kick in 
    }; 

    const swiperObserver = new IntersectionObserver(function(entries, 
        swiperObserver) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log(entry.target);
                    entry.target.style.opacity = "1";
                }
            })
        }, options); 


    swipers.forEach(element => {
            swiperObserver.observe(element)
     })





});

/*
gsap.registerPlugin(ScrollTrigger);



let tl = gsap.timeline({
    scrollTrigger: { //create scroll trigger object 
        trigger: '.animated-element', //select element in dom to be animated
        start: 'top center',
        end: 'top center',
        scrub: true,
        markers: true,
    }
})

tl.to('.animated-element',{
    x: 800,
})

console.log("hello");

*/