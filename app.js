  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        type:'loop',
        autoplay:true,
        interval:2000
    });
    splide.mount();
  } );




  const shoppingCart= document.querySelector(".shopping-cart")
  const panierSection = document.querySelector(".panier-section")
  const menuBtn = document.querySelector(".menu")
  const navbar = document.querySelector("nav ul")
  
  shoppingCart.addEventListener('click',affichePanier)
  
  function affichePanier(){
        
    panierSection.classList.toggle('panier-sectionactive')
  }

    
  menuBtn.addEventListener('click',afficheNavbar)
  
  function afficheNavbar(){
    menuBtn.querySelector("i").classList.toggle("fa-close")
    navbar.classList.toggle("open")    
    
  }
  