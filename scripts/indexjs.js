//preload the 3 images, by assigning them to a unused variable
var my_image = new Image();
my_image.src = 'Images/4H.jpg';
console.log("preloaded banner1");
my_image.src = 'Images/BCKConsulting.png';
console.log("preloaded banner2");
my_image.src = 'Images/tcmaker.png';
console.log("preloaded banner3");
my_image.src = 'Images/Gormans_edited.png';
console.log("preloaded banner4");
my_image.src = 'Images/PANlogo.png';
console.log("preloaded banner5");
my_image.src = 'Images/flightfaction.png':
console.log("prelaoded banner6");

//Rotate Images on Index Page, with the 2 images starting at different points
function showimg(){
document.getElementById('indexSponsor').src="Images/4H.jpg";
setTimeout(show2,8000);
}
function show2()
{
document.getElementById('indexSponsor').src="Images/tcmaker.png";
setTimeout(show3,8000);
}
function show3()
{
document.getElementById('indexSponsor').src="Images/BCKConsulting.png";
setTimeout(show4,8000);
}
function show4()
{
document.getElementById('indexSponsor').src="Images/Gormans_edited.png";
setTimeout(show5,8000);
}
function show5()
{
document.getElementById('indexSponsor').src="Images/PANlogo.png";
setTimeout(show6,8000);
}
function show6()
{
  document.getElementByID('indexSponsor').src="Images/flightfaction.png";
  setTimeout(showimg,8000);
}
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
}
