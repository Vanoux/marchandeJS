/*Créez une classe Produit :

    nom
    prix

Créez une classe Panier avec :

    une méthode ajoute( produit )
    une méthode retire( produit )
    une proprieté totalHT
    une proprieté totalTTC

Utilisation : ajouter ce qu'il faut à ce code de base pour qu'il fonctionne.*/

function Produit(A, B){
  this.nom = A;
  this.prix = B;  
}

var baguette = new Produit( 'Baguette', 0.85); // prix HT
var croissant = new Produit( 'Croissant', 0.80);
var chocolatine = new Produit ('Chocolatine', 0.90);

//console.log(baguette.prix)


function Panier(){
  this.poche = [];
  this.totalHT = 0;
  this.totalTTC = 0;
    this.ajouterProduit = function(paramêtre){
      this.poche.push(paramêtre);
      this.totalHT += paramêtre.prix;
      this.totalTTC += (1 + 20/100) * paramêtre.prix;
     // this.totalTTC += Math.fix((1 + 5.5/100) * paramêtre.prix);
      
    }, 
    this.retirerProduit = function(){
      this.poche.splice(0);
    } 
       
  };


var panier1 = new Panier();
var panier2 = new Panier();

panier1.ajouterProduit(croissant);
panier1.ajouterProduit(baguette);
panier2.ajouterProduit(croissant);
panier2.ajouterProduit(croissant);
panier1.ajouterProduit(chocolatine);


//panier1.retirerProduit();


console.log(panier1.poche);
console.log(panier1.totalHT);
console.log(panier1.totalTTC);   

console.log(panier2.poche);
console.log(panier2.totalHT);
console.log(panier2.totalTTC);
