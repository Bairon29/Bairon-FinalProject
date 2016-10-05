var slideIndex = 1;
var id;
var onetime = true;
showDivs(slideIndex, id);

//to display a differet slide show
function Divs(num, n)
{
	id = n;
	slideIndex = 1;
	showDivs(slideIndex);
}
//to go to the next photo in the current slide show
function plusDivs(n)
{
	showDivs(slideIndex +=n);
}
//to jump from the current photo to the photo you want to see (dot)
function currentslide(n)
{
	showDivs(slideIndex = n);
}
//slideshow
function showDivs(n)
{
	//global variable for the function showdivs
	var i;
	//variable for each slide show
	var x = document.getElementsByClassName("slide");
	var y = document.getElementsByClassName("slide1");
	var z = document.getElementsByClassName("slide2");
	var t = document.getElementsByClassName("slide3");
	var e = document.getElementsByClassName("slide4");

	var dots = document.getElementsByClassName("dot");
	//if pass last photo go back to first one
	if(n> x.length)
	{
	slideIndex = 1;
	}
	//if pass first photo (previous) go to last
	if(n<1)
	{
	slideIndex = x.length;
	}
	//set initial display
	for(i=0; i<x.length;i++)
	{
	x[i].style.display = "none";
	y[i].style.display = "none";
	z[i].style.display = "none";
	t[i].style.display = "none";
	e[i].style.display = "none";
	}
	//toggle to class to give effect to dots
	for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  //to start the no value in id so for one time the i set a variable to 
  //true so it can present the first slideshow
  //then it remembers
	if (id=='slide' || onetime) {
	x[slideIndex-1].style.display = "block";
	id='slide';
	onetime = false;}
	if (id=='slide1') {
	y[slideIndex-1].style.display = "block";}
	if (id=='slide2') {
	z[slideIndex-1].style.display = "block";
	onetime = false;}
	if (id=='slide3') {
	t[slideIndex-1].style.display = "block";}
	if (id=='slide4') {
	e[slideIndex-1].style.display = "block";
	onetime = false;}
	
	}

	