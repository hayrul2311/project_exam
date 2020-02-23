// Api data 
const api_url = 'https://api.spacexdata.com/v3/dragons/dragon1';
async function getData(){
	const response = await fetch(api_url);
	const data = await response.json();
	const { name, type, sidewall_angle_deg, dry_mass_kg, first_flight, description, flicker_images } = data;
	document.getElementById('name').textContent = name;
	document.getElementById('type').textContent = type;
	document.getElementById('swad').textContent = sidewall_angle_deg;
	document.getElementById('mass').textContent = dry_mass_kg;
	document.getElementById('flight1').textContent = first_flight;
	document.getElementById('description').textContent = description;
}
getData();

const api_url2 = 'https://api.spacexdata.com/v3/launches/next';
async function getLaunch(){
	const response = await fetch(api_url2);
	const launchData = await response.json();
	const { flight_number, mission_name, launch_year, launch_date_utc, launch_date_local, payload_id, } = launchData;
	document.getElementById('fNumber').textContent = flight_number;
	document.getElementById('mName').textContent = mission_name;
	document.getElementById('lYear').textContent = launch_year;
	document.getElementById('lDateUtc').textContent = launch_date_utc;
	document.getElementById('lDateLocal').textContent = launch_date_local;
}
getLaunch();
// Slider main
var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(ss) {
  showSlides(slideIndex += ss);
}

function currentSlide(ss) {
  showSlides(slideIndex = ss);
}

function showSlides(ss) {
  var i;
  var slides = document.getElementsByClassName("slides");
  if (ss > slides.length) {slideIndex = 1}    
  if (ss < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
// form validating
var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var phoneNumber = document.getElementById('phone');
var email = document.getElementById('email');
var message = document.getElementById('message');
var firstNameError = document.getElementById('firstNameError');
var lastNameError = document.getElementById('lastNameError');
var phoneError = document.getElementById('phoneError');
var emailError = document.getElementById('emailError');
var messageError = document.getElementById('messageError');
var phoneRegEx = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
function validateName(){
	
	if(firstName.value == ""){
		firstNameError.style.display = 'block';
	}
	else{
		firstNameError.style.display = 'none';
	}
	if(lastName.value == ""){
		lastNameError.style.display = 'block';
	}
	else{
		lastNameError.style.display = 'none';
	}
	if(phoneNumber.value.match(phoneRegEx)){
		phoneError.style.display = 'none';
	}
	else{
		phoneError.style.display = 'block';
	}
	if(email.value.match(emailRegEx)){
		emailError.style.display = 'none';
	}
	else{
		emailError.style.display = 'block';
	}
	if(message.value == ""){
		messageError.style.display = 'block';
	}
	else{
		messageError.style.display = 'none';
	}
}
