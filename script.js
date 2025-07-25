// Typing (no cursor)
new Typed('.typing',{strings:document.querySelector('.typing').dataset.typedItems.split(','),typeSpeed:60,backSpeed:30,loop:true,showCursor:false});

// AOS
AOS.init({duration:800,easing:'ease-in-out',once:true});

// Scroll-spy
const sections=document.querySelectorAll('.section');
const navLinks=document.querySelectorAll('.navbar ul li a');
window.addEventListener('scroll',()=>{
  let scrollPos=window.scrollY+200;
  sections.forEach(section=>{
    if(scrollPos>section.offsetTop && scrollPos<section.offsetTop+section.offsetHeight){
      navLinks.forEach(link=>link.classList.remove('active'));
      let id=section.id;
      document.querySelector('.navbar ul li a[href="#'+id+'"').classList.add('active');
    }
  });
});

// Hamburger toggle
const hamburger=document.getElementById('hamburger');
const navUl=document.querySelector('.navbar ul');
hamburger.addEventListener('click',()=>navUl.classList.toggle('show'));