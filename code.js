var btnAdd = document.querySelector("#add");
var btnSubstract = document.querySelector("#substract");
var input = document.querySelector("input");

btnAdd.addEventListener("click", () =>{
  input.value = + (input.value) +1;

});
btnSubstract.addEventListener("click", () =>{
    input.value = + (input.value) -1;
  
});







function seeMore(){
    
var text ="Hi there! My name is Saqib Ali and by profession I am a web developer I have more than 1 year experience in web developing and I have been working in software development firm for last 6 months. I have expertise in HTML 5, CSS 3, Media Query , Java Script, Firebase hosting and React.Net.";
 var p_text = document.getElementById("foo");
 foo.innerHTML = text;
}


// function webForm(){
// var sbfrom = document.getElementById("sb")
// console.log(sbfrom.value);
// }


