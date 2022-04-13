    $(document).ready(function(){
        $('.nav-list').on('click', 'li', function() {
            $('.nav-list li.active').removeClass('active');
            $(this).addClass('active');
        });
        // $('.nav-list').click(function() {

        //     console.log("Clicked");
        //     // $('.nav-list li').removeClass('active');

        //     $('.nav-list li').addClass('active');

        // });


        var li=document.querySelectorAll(".nav-item");
        var sec=document.querySelectorAll("section");

        function activeMenu(){
            let len=sec.length;
            while(--len && window.scrollY + 97 < sec[len].offsetTop){}
            li.forEach(ltx=>ltx.classList.remove("active"));
            li[len].classList.add("active");
        }
        activeMenu();
        window.addEventListener("scroll",activeMenu);

        $(function(){
            $('.timer').countTo();
        });

        $('.owl-carousel').owlCarousel({
            loop:false,
            margin:10,
            nav:false,
            autoplay:true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1
                },
                1000:{
                    items:1
                }
            }
        })
        
      });
 