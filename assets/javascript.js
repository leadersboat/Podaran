// carousel auto-slides

// $(document).ready(function() {
//     $('.carousel').carousel({
//     interval: .5
// });
// });

$('#myCarousel').carousel(); 
  
        // Enable Carousel Indicators 
        $('.carousel-item').click(function () { 
            $('#myCarousel').carousel($(this) 
                            .index()); 
        }); 
  
        // Pause the carousel when the mouse is over it 
        $('#myCarousel').hover(function () { 
            $(this).carousel('pause'); 
        }, function () { 
            $(this).carousel('cycle'); 
        }); 


document.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(function(section) {
        if (scrollPosition > section.offsetTop + 100) {
            section.classList.add('show');
        }
    });
});

// SCROLL OPTION

