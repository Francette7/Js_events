/*addEventListener("click", function(){
	footer.textContent = "Clique"});
console.log("Clique")*/

// Fonctionnalité 1-bis
i = 0
let clicFooter = document.querySelector("footer")
clicFooter.addEventListener("click", function(){
	i++
	console.log(`Le compteur est : ${i}` )
})

// Fonctionnalité 2 :

let menuBtn = document.querySelector(".navbar-toggler")
let menu = document.getElementById("navbarHeader")
function menuToggle(){
	menu.classList.toggle('collapse');
}
menuBtn.addEventListener("click", menuToggle);

// Fonctionnalité 3 :
let card = document.querySelector(".btn-group");
let btnEdit = card.querySelector('button:nth-child(2)')
function changeColor(){
	document.querySelector(".card-text").style.color = "red";
}
btnEdit.addEventListener("click", changeColor);

// Fonctionnalité 4 :
let cardNum2 = document.getElementsByClassName("card-text")[1];
let cardBtnEdit2 = document.querySelectorAll('.btn.btn-sm.btn-outline-secondary')[1];
let x = false;
cardBtnEdit2.addEventListener("click", function() {
	if (x ==false){
		cardNum2.style.color = "green";
		x = true;
	} else if (x == true){
		cardNum2.style.color = "black";
		x = false;
	}
});

// Fonctionnalité 5 :
let getCDN = document.querySelector(".navbar")
let getLink = document.querySelector("link")
let y = false;
getCDN.addEventListener("click", function() {
	if (y == false) {
		getLink.setAttribute("href", "#");
		y = true;
	} else if (y == true) {
		getLink.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css")
		y = false;
	}
});

// Fonctionnalité 6 :