
const produits ={
    data: [
        {
            nomProduit: "Samsung",
            categorie: "Smartphone",
            prix:"29",
           image: "Images/electronics/telephone (9).jfif"
        },
        {
            nomProduit: "Samsung",
            categorie: "Smartphone",
            prix:"29",
           image: "Images/electronics/telephone (4).png"
        },
        {
            nomProduit: "Iphone",
            categorie: "Smartphone",
            prix:"189",
            image: "Images/electronics/telephone (10).jfif"
        },
        {
            nomProduit: "Samsung",
            categorie: "Smartphone",
            prix:"129",
            image: "Images/electronics/telephone (5).png"
        },
       
        {
            nomProduit: "Samsung",
            categorie: "Smartphone",
            prix:"189",
           image: "Images/electronics/telephone (8).jfif"
        },
        {
            nomProduit: "Samsung",
            categorie: "Smartphone",
            prix:"89",
            image: "Images/electronics/telephone (2).png"
        },
        {
            nomProduit: "Iphone 15",
            categorie: "Smartphone",
            prix:"189",
            image: "Images/electronics/telephone.jfif"
        },
        {
            nomProduit: "Iphone",
            categorie: "Smartphone",
            prix:"89",
            image: "Images/electronics/telephone (1).png"
        },
        {
            nomProduit: "Laptop",
            categorie: "Laptop",
            prix:"189",
            image: "Images/electronics/ordinateur (5).avif"
        },
        
        {
            nomProduit: "Laptop",
            categorie: "Laptop",
            prix:"49",
           image: "Images/electronics/ordinateur (4).avif"
        },
        

        {
            nomProduit: "Laptop",
            categorie: "Laptop",
            prix:"189",
            image: "Images/electronics/ordinateur (3).avif"
        },
        {
            nomProduit: "Laptop",
            categorie: "Laptop",
            prix:"189",
            image: "Images/electronics/ordinateur (1).avif"
        },
        {
            nomProduit: "Laptop",
            categorie: "Laptop",
            prix:"189",
             image: "Images/electronics/ordinateur (1).png"
        },
        {
            nomProduit: "Laptop",
            categorie: "Laptop",
            prix:"189",
            image: "Images/electronics/ordinateur (1).jpg"
        },

        {
            nomProduit: "Earphone",
            categorie: "Audio",
            prix:"189",
            image: "Images/electronics/earphone.jfif"
        },
        {
            nomProduit: "Headphone",
            categorie: "Audio",
            prix:"189",
            image: "Images/electronics/headphone.png"
        },
        {
            nomProduit: "Haut parleur",
            categorie: "Audio",
            prix:"189",
            image: "Images/electronics/speaker.png"
        },
        {
            nomProduit: "Haut parleur",
            categorie: "Audio",
            prix:"189",
            image: "Images/electronics/speaker1.jfif"
        },
        {
            nomProduit: "Headphone",
            categorie: "Audio",
            prix:"189",
           image: "Images/electronics/headphone (4).jpg"
        },

        {
            nomProduit: "Earphone",
            categorie: "Audio",
            prix:"189",
           image: "Images/electronics/earphone.png"
        },
        {
            nomProduit: "Headphone",
            categorie: "Audio",
            prix:"189",
            image: "Images/electronics/headphone (3).jpg"
        },
        {
            nomProduit: "Haut parleur",
            categorie: "Audio",
            prix:"189",
            image: "Images/electronics/speaker2.jfif"
        },
        {
            nomProduit: "Headphone",
            categorie: "Audio",
            prix:"189",
            image: "Images/electronics/headphone (5).jpg"
        },
       
        {
            nomProduit: "Headphone",
            categorie: "Audio",
            prix:"89",
            image: "Images/electronics/headphone (2).jpg"
        },
       
        {
            nomProduit: "Casque Réalité Virtuelle",
            categorie: "Gaming",
            prix:"189",
             image: "Images/electronics/gaming (1).jpg"
        },
        {
            nomProduit: "Casque Réalité Virtuelle",
            categorie: "Gaming",
            prix:"49",
            image: "Images/electronics/crv2.jfif"
        },
        {
            nomProduit: "Casque Réalité Virtuelle",
            categorie: "Gaming",
            prix:"189",
             image: "Images/electronics/gaming (1).png"
        },
        {
            nomProduit: "Casque Réalité Virtuelle",
            categorie: "Gaming",
            prix:"49",
            image: "Images/electronics/crv1.jfif"
        },
        {
            nomProduit: "Manette de jeux",
            categorie: "Gaming",
            prix:"189",
             image: "Images/electronics/gaming (1).jfif"
        },
        {
            nomProduit: "Casque Réalité Virtuelle",
            categorie: "Gaming",
            prix:"49",
            image: "Images/electronics/crv.jfif"
        },

        {
            nomProduit: "Manette de jeux",
            categorie: "Gaming",
            prix:"49",
            image: "Images/electronics/gaming (1).avif"
        },
        {
            nomProduit: "Smartwatch",
            categorie: "Smartwatch",
            prix:"189",
             image: "Images/electronics/smartwatch (1).jpg"
        },
        {
            nomProduit: "Smartwatch",
            categorie: "Smartwatch",
            prix:"49",
            image: "Images/electronics/smartwatch (1).png"
        },

        {
            nomProduit: "Smartwatch",
            categorie: "Smartwatch",
            prix:"49",
            image: "Images/electronics/smartwatch (2).png"
        },
        {
            nomProduit: "Smartwatch",
            categorie: "Smartwatch",
            prix:"49",
            image: "Images/electronics/smartwatch (3).jfif"
        },
        {
            nomProduit: "Smartwatch",
            categorie: "Smartwatch",
            prix:"49",
            image: "Images/electronics/smartwatch (4).jfif"
        },
        {
            nomProduit: "Smartwatch",
            categorie: "Smartwatch",
            prix:"49",
            image: "Images/electronics/smartwatch (5).jfif"
        },
       

    ],
};


for (const i of produits.data){
  const card = document.createElement("div");
  card.classList.add("card",i.categorie,"hidden");
  
  const imgContainer = document.createElement("div");
  
//   image
  const img = document.createElement("img");
  img.setAttribute("src",i.image);
  imgContainer.appendChild(img);  
  imgContainer.classList.add("imgContainer")
  card.appendChild(imgContainer);

  
  const container = document.createElement("div");
  container.classList.add("container");
  card.appendChild(container);
  
//   name
  const nom = document.createElement("h3");
  nom.classList.add("nomproduit");
  nom.innerHTML=i.nomProduit.toUpperCase();
  container.appendChild(nom);

//   prix
  const prix = document.createElement("h4");
  prix.innerHTML="XOF " + i.prix;
  prix.classList.add("prixproduit");
  container.appendChild(prix);

//boutton
const containerbtn =document.createElement("div");
containerbtn.classList.add("containerbtn");
container.appendChild(containerbtn);

const btn = document.createElement("div");
btn.innerHTML = '<i class="fa fa-shopping-cart"></i>';
btn.classList.add("btnajouter");
containerbtn.appendChild(btn);

const btnvoir = document.createElement("div");
btnvoir.innerHTML = '<i class="fa fa-eye"></i>';
btnvoir.classList.add("btnajouter");

const anchor = document.createElement('a');
anchor.href='produitDetails.html';
anchor.appendChild(btnvoir);
containerbtn.appendChild(anchor);



document.getElementById("produits").appendChild(card);


const buttonAcheter= document.querySelector(".buttonAcheter");
const nombreAchat=document.querySelector(".nombreAchat");
const panierSectionCard = document.querySelector(".panier-section-card");
const panierSectionVide = document.querySelector(".panier-section-vide");
const total = document.querySelector(".panier-section-total");


btn.addEventListener('click',ajoutPanier)

function ajoutPanier(){
    const cardPanier = document.createElement("div");
    cardPanier.classList.add("cardPanier");
    
    const imgContainerPanier = document.createElement("div");
    
  //   image
    const imgPanier = document.createElement("img");
    imgPanier .setAttribute("src",i.image);
    imgContainerPanier.appendChild(imgPanier);
    imgContainerPanier.classList.add("imgContainerPanier")
    cardPanier.appendChild(imgContainerPanier);
    
    const containerPanier = document.createElement("div");
    containerPanier.classList.add("container");
    cardPanier.appendChild(containerPanier);
    
  //   name
    const nomPanier = document.createElement("h3");
    nomPanier.classList.add("nomproduit");
    nomPanier.innerHTML=i.nomProduit.toUpperCase();
    containerPanier.appendChild(nomPanier);
  
  //   prix
    const prixPanier = document.createElement("h4");
    prixPanier.innerHTML="XOF " + i.prix;
    prixPanier.classList.add("prixproduit");
    containerPanier.appendChild(prixPanier);
  //button supprimer  
    const itemtrash = document.createElement("div");
    itemtrash.innerHTML='<i class="fa fa-trash"></i>'
    itemtrash.classList.add("itemtrash");
    cardPanier.appendChild(itemtrash);
 
    



  panierSectionVide.innerHTML=" ";
  nombreAchat.innerHTML=parseInt(nombreAchat.innerHTML)+1;
  total.innerHTML=parseInt(total.innerHTML)+parseInt(i.prix);
  buttonAcheter.style.display="block";

  
  itemtrash.addEventListener('click',supPanier)
  
  function supPanier(){
    cardPanier.remove();
        nombreAchat.innerHTML= parseInt(nombreAchat.innerHTML)-1; 
        total.innerHTML=parseInt(total.innerHTML)-parseInt(i.prix);
  }
 
  panierSectionCard.appendChild(cardPanier);

  const payement = document.querySelector(".payement");
  const payementClose = document.querySelector(".payement i");
  buttonAcheter.addEventListener('click',afficheSectionPayement);
  function afficheSectionPayement() {
    payement.classList.add("active");
  }

  payementClose.addEventListener('click',deactiveSectionPayement);
  function deactiveSectionPayement() {
    payement.classList.remove("active");
  }
  
  
}
   
   
const shopSection =document.querySelector('#shop');


    btnvoir.addEventListener('click', () => {
        
      
        shopSection.insertAdjacentHTML('afterbegin',`<div class="shop row mt-5 pt-5">
           <div class="images col-lg-6 col-md-12 col-12">
            <img src="${i.image}" alt=""  class="img-fluid w-100" >
            <div class="images-small">
                <div class="images-small-col">
                    <img src="Images/electronics/headphone (1).jpg" alt="" width="100%" class="small-img">
                </div>
                <div class="images-small-col">
                    <img src="Images/electronics/headphone (2).jpg" alt="" width="100%" class="small-img">
                </div>
                <div class="images-small-col">
                    <img src="Images/electronics/headphone (3).jpg" alt="" width="100%" class="small-img">
                </div>
                <div class="images-small-col">
                    <img src="Images/electronics/headphone (4).jpg" alt="" width="100%" class="small-img">
                </div>
                
            </div>
           </div>
           <div class="details  col-lg-5 col-md-12 col-12">
              <p>Acceuil/ <span class="categorie">${i.categorie}"</span></p>
              <h3 class="nomProduit">${i.nomProduit}"</h3>
              <h4 class="prix">${i.prix}"</h4>
              <button class="buttonAcheterDetails">Au panier</button>
              <h5>Détails Produit</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Illo et, nobis nihil fuga quasi nostrum quidem officia labore 
                impedit reiciendis deserunt fugit voluptate obcaecati cupiditate
                temporibus ipsa alias. Impedit, alias.</p>
           </div>
        </div>`)
  
    
    });


}
