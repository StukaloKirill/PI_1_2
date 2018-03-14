function callback(){
alert("Hello, вас приветствуют на несанкционированном митинге");
}

var element = document.getElementById("form-click");
if(element.addEventListener){
element.addEventListener("submit",callback,false);
}
