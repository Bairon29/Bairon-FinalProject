var Cart = [];
//this code is almost like the ShoppingCart.js just that
//does not display by document.getelementsbyclass
//proble since in order html pages except for the shopping cart html
//there is no id to refference. javascript gives a error
Items = function (name, price, count) {
	// body...
	this.name = name;
	this.price = price;
	this.count = count;
}

function AddItem(name, price, count)
{
	for (var i in Cart) {//for(var i =0; i<cart.lenght; i++)
		if (Cart[i].name === name) {
			Cart[i].count++;
			return;
		}
	}
	var newitem = new Items(name, price, count);
	if(Cart == null){
	Cart = [];
	//ClearCart();
	Cart.push(newitem);}
	else{
		Cart.push(newitem);
	}
	SaveCart();
	add();
	}

function RemoveAllItems(name)
{
	for (var i in Cart) {
		if (Cart[i].name === name){
			Cart.splice(i, 1);
			break;
		}
	}
	SaveCart();

}


function TotalCount()
{
	var totalcount = 0;
	for (var i in Cart) {
	   totalcount += Cart[i].count;
	}
	return totalcount;
}

function TotalCost()
{
	var totalcost = 0;
	for (var i in Cart) {
	totalcost += Cart[i].price;
	}
	return totalcost;
}

function DisplayItems()
{
	//ps4
	var psone1 = document.getElementsByClassName('psone');
	var pstwo1 = document.getElementsByClassName('pstwo');
	var psthree1 = document.getElementsByClassName('psthree');
	var psfour1 = document.getElementsByClassName('psfour');
	var psfive1 = document.getElementsByClassName('psfive');
	 for (var t in Cart) {
	 	 if (Cart[t].name == "psone"){
	 for (var i = 0; i < psone1.length; i++) {
	 	psone1[i].style.display = "block";
	 			}
		}
		if (Cart[t].name == "pstwo"){
	 for (var i = 0; i < pstwo1.length; i++) {
	 	pstwo1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "psthree"){
	 for (var i = 0; i < psthree1.length; i++) {
	 	psthree1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "psfour"){
	 for (var i = 0; i < psfour1.length; i++) {
	 	psfour1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "psfive"){
	 for (var i = 0; i < psfive1.length; i++) {
	 	psfive1[i].style.display = "block";
	 			}
		}

	}
	//xbox
	var xboxone1 = document.getElementsByClassName('xboxone');
	var xboxtwo1 = document.getElementsByClassName('xboxtwo');
	var xboxthree1 = document.getElementsByClassName('xboxthree');
	var xboxfour1 = document.getElementsByClassName('xboxfour');
	var xboxfive1 = document.getElementsByClassName('xboxfive');
	for (var t in Cart) {
	 	 if (Cart[t].name == "xboxone"){
	 for (var i = 0; i < xboxone1.length; i++) {
	 	xboxone1[i].style.display = "block";
	 			}
		}
		if (Cart[t].name == "xboxtwo"){
	 for (var i = 0; i < xboxtwo1.length; i++) {
	 	xboxtwo1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "xboxthree"){
	 for (var i = 0; i < xboxthree1.length; i++) {
	 	xboxthree1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "xboxfour"){
	 for (var i = 0; i < xboxfour1.length; i++) {
	 	xboxfour1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "xboxfive"){
	 for (var i = 0; i < xboxfive1.length; i++) {
	 	xboxfive1[i].style.display = "block";
	 			}
		}

			}

			//pc
	var pcone1 = document.getElementsByClassName('pcone');
	var pctwo1 = document.getElementsByClassName('pctwo');
	var pcthree1 = document.getElementsByClassName('pcthree');
	var pcfour1 = document.getElementsByClassName('pcfour');
	var pcfive1 = document.getElementsByClassName('pcfive');
	for (var t in Cart) {
	 	 if (Cart[t].name == "pcone"){
	 for (var i = 0; i < pcone1.length; i++) {
	 	pcone1[i].style.display = "block";
	 			}
		}
		if (Cart[t].name == "pctwo"){
	 for (var i = 0; i < pctwo1.length; i++) {
	 	pctwo1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "pcthree"){
	 for (var i = 0; i < pcthree1.length; i++) {
	 	pcthree1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "pcfour"){
	 for (var i = 0; i < pcfour1.length; i++) {
	 	pcfour1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "pcfive"){
	 for (var i = 0; i < pcfive1.length; i++) {
	 	pcfive1[i].style.display = "block";
	 			}
		}

			}

			//sale
	var saleone1 = document.getElementsByClassName('saleone');
	var saletwo1 = document.getElementsByClassName('saletwo');
	var salethree1 = document.getElementsByClassName('salethree');
	var salefour1 = document.getElementsByClassName('salefour');
	var salefive1 = document.getElementsByClassName('salefive');
	for (var t in Cart) {
	 	 if (Cart[t].name == "saleone"){
	 for (var i = 0; i < saleone1.length; i++) {
	 	saleone1[i].style.display = "block";
	 			}
		}
		if (Cart[t].name == "saletwo"){
	 for (var i = 0; i < saletwo1.length; i++) {
	 	saletwo1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "salethree"){
	 for (var i = 0; i < salethree1.length; i++) {
	 	salethree1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "salefour"){
	 for (var i = 0; i < salefour1.length; i++) {
	 	salefour1[i].style.display = "block";
	 			}
		}
			 if (Cart[t].name == "salefive"){
	 for (var i = 0; i < salefive1.length; i++) {
	 	salefive1[i].style.display = "block";
	 			}
		}

			}

	 	Zero();
}

function SaveCart()
{
	localStorage.setItem("ItemsInShoppingCart", JSON.stringify(Cart));
}

function LoadCart()
{
	Cart = JSON.parse(localStorage.getItem("ItemsInShoppingCart"));
	DisplayItems();
	add();
	
}


/****************************************cartamount******/


var nitems = 0;
	function add() {
		// body...
		nitems++;
		document.getElementById('number').innerHTML = String(TotalCount());

		Zero();
	}
	function Zero()
	{
		if (document.getElementById('number').innerHTML == 0){
			document.getElementById('cir').style.display = "none";
		}
		else
		{
			document.getElementById('cir').style.display = "block";
		}
	}

	