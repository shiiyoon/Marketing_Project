
    let screenHeight = $(window).height();
    
    $(window).scroll(function(){
         let currentHeight = $(this).scrollTop();
         console.log(currentHeight);
         if(currentHeight > screenHeight-100){
             $(".site-nav").addClass("site-nav-2");
         }else{
            $(".site-nav").removeClass("site-nav-2");
            setActive("home");
         }
         
     });

$(".navbar-toggler").click(function(){
   let result = $(".navbar-collapse").hasClass("show");
    console.log(result);

    if(result){
        $(".menu-icon").addClass("feather-menu").removeClass("feather-x");
    }else{
        $(".menu-icon").addClass("feather-x").removeClass("feather-menu");    
    }
});

function setActive(current){
    $(".nav-link").removeClass("borderactive");
    $(`.nav-link[href = '#${current}']`).addClass("borderactive");
    
}
function setScroll(){
    let currentsection = $("section[id]");
    currentsection.waypoint (function(direction){

        if(direction == "down"){
          let currentsectionId = $(this.element).attr('id');
          console.log(currentsectionId);
          setActive(currentsectionId);
        }
    },{ offset: '150px'});
    
    currentsection.waypoint (function(direction){

        if(direction == "up"){
          let currentsectionId = $(this.element).attr('id');
          console.log(currentsectionId);
          setActive(currentsectionId);

        }
    },{ offset: '-1px'});

}
setScroll();

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
    }
            )
    wow.init();
    
 $(".prices-slide").slick({
        arrows:false,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
});
$(window).on("load",function(){
    $(".loaderContainer").fadeOut(500,function(){
        $(this).remove();
    });
});