const htmlCode=document.getElementById("html-code");
const cssCode=document.getElementById("css-code");
const jsCode=document.getElementById("js-code");
const output= document.getElementById("output");

// html code
htmlCode.addEventListener("keyup",run);
cssCode.addEventListener("keyup",run);
jsCode.addEventListener("keyup",run);


function run(){
  const htmlCodeValue=htmlCode.value;
  
 const cssCodeValue=cssCode.value;
  
 const jsCodeValue=jsCode.value;
  
  
  output.contentDocument.body.innerHTML = htmlCodeValue + "<style>"+cssCodeValue + "</style>";
  output.contentWindow.eval(jsCodeValue);
}