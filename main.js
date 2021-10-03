const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

 function animeScroll(){
     const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
     target.forEach(function(element){
         if((windowTop) > element.offsetTop){
             element.classList.add(animationClass);
         }else{
             element.classList.remove(animationClass);
         }
     })
 }
 window.addEventListener('scroll', function(){
     animeScroll();
 })

 /*$('.escolha').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });*/