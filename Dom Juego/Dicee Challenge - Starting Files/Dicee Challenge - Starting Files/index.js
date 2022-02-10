var RandomNubmer1 = Math.floor(Math.random()) * 6 + 1;

var Random0iceImage = "dice" + RandomNubmer1 + ".png";

var RandomImage = "images/"  + Random0iceImage;

var Imagen1 = document.querySelectorAll("img")[0];

Imagen1.setAttribute("src", RandomImage);