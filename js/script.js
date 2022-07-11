

    //SWIPER JS INITIALIZE
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      loop: true,
      // grabCursor:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
   
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


// const body = document.querySelector('.body'),
//             navMenu = body.querySelector('.menu-content'),
//             navCloseBtn = navMenu.querySelector('.navClose-btn') 

const   body       =    document.querySelector('body')
const  navOpen = document.getElementById('navOpen') 
const  navClose = document.getElementById('navClose') 
const  navMenu = document.getElementById('menuContent') 

if ( navOpen    &&      navClose){
    navOpen.addEventListener('click', ()=>  {
        navMenu.classList.add('open')
        // body.style.overflowY = "hidden"
    })
}

if ( navOpen    &&      navClose){
    navClose.addEventListener('click', ()=>  {
        navMenu.classList.remove('open')
        // body.style.overflowY = "scroll"
    })
}


    // NAVBAR ON SCROLL 
   
const  backToTopIcon = document.querySelector(" .bactToTop-icon")
var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
// We add pageYOffset for compatibility with IE.
if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
document.getElementsByTagName("header")[0].classList.add(className);
backToTopIcon.style.opacity = 1
} else {
document.getElementsByTagName("header")[0].classList.remove(className);
backToTopIcon.style.opacity = 0
}


  // AcTIVE NAV

  const  sections = document.querySelectorAll("section[id]")
  sections.forEach(section=> {
              
              let scrollTop = section.offsetTop -80
              let scrollHeight = section.offsetHeight
             let  navId = document.querySelector(`.menu-content a[href*=${section.id}]`)
             
             if(window.scrollY > scrollTop && window.scrollY <= scrollHeight + scrollTop){
               navId.classList.add("active-navlink")
               
              }else{
             navId.classList.remove("active-navlink")
              }
              navId.addEventListener("click", ()=>{
                navMenu.classList.remove('open')
                body.style.overflowY = "scroll"
              })
  });

};


// LANGUAGE SELCET DROPDOWN
const dropDownIcon = document.querySelector(".dropdown-icon")
const langSelct = document.querySelector('.language-select'),
          langDropdown = document.querySelector('.language-options')
            langSelct.addEventListener("click", ()=>{
                      
                        
                          dropDownIcon.classList.toggle("iconRotate")
                          langDropdown.classList.toggle("drop")
                          
                          // if(!(dropDownIcon.classList.contains("iconRotate"))){
                          //   dropDownIcon.classList.remove("iconRotate")
                          //   languagelist.classList.remove("drop")
                          // }
                    }
        )

        
// LANGUAGE SELCET choose
                    language = 'lang-options'
                  let  langOptions = document.querySelectorAll('.lang-options')

                 langOptions.forEach(language => {

                      language.addEventListener('click', ()=>{
                              langOptions.forEach(language => {
                                language.classList.remove('active-lang')
                              })
                        
                           let langDisplayed = document.querySelector('.lang-displayed')
                          let langName = language.innerHTML.trim()
                          let langnewName= langName
                          console.log(langnewName)
                          langDisplayed.innerHTML= langName
                   
                              language.classList.add('active-lang')
                       
                          // console.log(langName)
                          // console.log(langDisplayed.innerHTML)

                    })

                 });

                 
// SCROLL REVEAL ANIMATIONS

const sr = ScrollReveal({
  origin: 'top',
  distance:'30px' ,
  duration: 2000,
  delay: 100,
})

sr.reveal('.review-heading h2, .team-heading h2, .menu-heading h2 , .awards-wrapper,.review-footer h1 , .tc2, .mc2, .review-heading h2, .review-heading p, .review-heading h4',{interval:16,reset: true})
sr.reveal('.about-details,.cta-content, .home-intro, .menu-table , .tc3, .mc3', {origin:'right', reset: true})
sr.reveal('.about-imagecontent, .menu-items, .tc1, .home-header , .mc1', {origin:'left' ,reset: true})
sr.reveal('.menu-body, .footer-main , .mc4', {origin:'bottom' ,reset: true})