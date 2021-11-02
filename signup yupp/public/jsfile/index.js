
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()

function add10(){
  let value = parseInt($("#num").val());
  value = isNaN(value) ? 0 : value;
  value = value+10;
  $("#num").val(value);
}
function add5(){
  let value = parseInt($("#num").val());
  value = isNaN(value) ? 0 : value;
  value = value+5;
  $("#num").val(value);
}
function sub10(){
  let value = parseInt($("#num").val());
  value = isNaN(value) ? 0 : value;
  value = value-10;
  $("#num").val(value);
}
function sub5(){
  let value = parseInt($("#num").val());
  value = isNaN(value) ? 0 : value;
  value = value-5;
  $("#num").val(value);
}


// Events
function pageShow(){
  alert("Welcome to our Website!!!");
}

window.onscroll = function() {scrollButton()};

function scrollButton(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.getElementById("scroll-icon").style.display = "block";
  } else{
    document.getElementById("scroll-icon").style.display = "none";
  }
}

function Resize(){
  //alert("website window resized...");
}

function lightBulbOnOff(image){
  if(image.src.match("images/light-bulb-on.png")){
    image.src = "images/light-bulb-off.png";
  } else{
    image.src = "images/light-bulb-on.png";
  }
  
}

function lightOnMouseOver(x){
  x.src = "images/light-bulb-on.png";
}

function lightOnMouseOut(x){
  x.src = "images/light-bulb-off.png";
}

function lOnOff(){
  let image = document.getElementById("bulb");
  if(image.src.match("images/light-bulb-on.png")){
    image.src = "images/light-bulb-off.png";
  } else{
    image.src = "images/light-bulb-on.png";
  }
}

function onFocus(text){
  text.style.background = "#0d6efd";
  text.style.color = "#ffffff";
}

function onKeypress(text){
  text.style.background = "#ffc107";
  text.style.color = "#000000";
  document.getElementById("text1").innerHTML = "Text Changed ! New Text: " + text.value;

}

function onBlur(text){
  text.style.background = "";
  text.value = text.value.toUpperCase();
  text.style.color = "#000";
}

function onInput(text){
  let result = document.getElementById("text2");
  // result.innerHTML = text.value;
  if(text.value.toLowerCase() == "help"){
    result.innerHTML = `[name - return Admin's Name] 
                        [age - return Age ]
                        [city - return city]
                        [lorem - dummy text]`;
  } else if(text.value == "name"){
    result.innerHTML = "Niyam Muliya";
  } else if(text.value == "age"){
    result.innerHTML = "19";
  } else if(text.value == "city"){
    result.innerHTML = "Surat ";
  } else if(text.value == "lorem"){
    result.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quae temporibus velit ipsum numquam eius. Explicabo hic in eligendi tempora exercitationem deserunt id? Molestias laboriosam vero amet. Reprehenderit quae hic harum provident. Vel fugit ratione suscipit sed, dolorem dolores! Error, expedita dolorem? Tenetur exercitationem fugiat pariatur omnis et itaque quo.";
  } else{
    result.innerHTML = "Please Enter valid command"
  } 
}



