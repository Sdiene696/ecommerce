




  
function afficheproduits(value){
    
    const buttons = document.querySelectorAll(".btns-categories-value");
    buttons.forEach(button => {
       
        if(value.toUpperCase() == button.innerText.toUpperCase()){
           button.classList.add("active");
        }
        else{
            button.classList.remove("active");  
        }
    });
    
    const elements = document.querySelectorAll(".card");
    
    elements.forEach(element =>{
       
       if (value == "Toutes") {
        element.classList.remove("hidden");
       }
       else{
       
        if (element.classList.contains(value)) {
            
            element.classList.remove("hidden");
        }
        else{
            element.classList.add("hidden");   
        }
       }
    });

}

window.onload = () => {
    afficheproduits('Toutes')
}


 