$(document).ready(function () {

    $('.banner_slider').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 2000,
        navText: ['<i class="fa-sharp fa-solid fa-arrow-right"></i> ', '<i class="fa-sharp fa-solid fa-arrow-left"></i>'],
        nav: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    $('.counter').counterUp({
        delay: 30,
        time: 5000
    });

    /* count dwon js*/
    loopcounter('counter-class');

});

$('.testi_slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                
            }
    },
    
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            step = Math.abs(Math.floor(duration / range)),
            timer = setInterval(() => {
                current += increment;
                obj.textContent = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, step);

    }
    counter("count1", 0, 287, 3000);
    counter("count2", 100, 756, 2500);
    counter("count3", 0, 440, 3000);
   
});


/* blog_part start */

const btn1 = document.querySelector('.read_btn1');
const blogRead1 = document.querySelector('.blog_read1');
btn1.addEventListener("click", () => {
    blogRead1.classList.toggle("blog_read_all");
    if (btn1.innerText === 'Read More') {
        btn1.innerText = 'Read Less';
    } else {
        btn1.innerText = 'Read More';
    };
});

const btn2 = document.querySelector('.read_btn2');
const blogRead2 = document.querySelector('.blog_read2');
btn2.addEventListener("click", () => {
    blogRead2.classList.toggle("blog_read_all");
    if (btn2.innerText === 'Read More') {
        btn2.innerText = 'Read Less';
    } else {
        btn2.innerText = 'Read More';
    };
});

const btn3 = document.querySelector('.read_btn3');
const blogRead3 = document.querySelector('.blog_read3');
btn3.addEventListener("click", () => {
    blogRead3.classList.toggle("blog_read_all");
    if (btn3.innerText === 'Read More') {
        btn3.innerText = 'Read Less';
    } else {
        btn3.innerText = 'Read More';
    };
});


/* blog_part end */