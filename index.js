var button1 = document.getElementById("btn1");
var fadeIn = document.getElementById("fadeIn");

button1.addEventListener("click", function onClick(event){

document.getElementsByClassName("startDiv")[0].style.display = "none" ;
document.getElementsByClassName("viewportDiv")[0].style.display = "contents";
document.getElementById("audio").play();
// fadeIn.classList.add("fadeIn");
// fadeIn.classList.add("fadeInButtom");

});

var button2 = document.getElementById("btn2");

button2.addEventListener("click", function onClick(event){

    document.getElementsByClassName("viewportDiv")[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "contents";
    document.getElementById("audio2").play();
    document.getElementById("audio").pause();
    
    });



const post = document.getElementsByClassName("post");
const p = post.length;
let i = 0;

setInterval(next, 2000)

function next() {
  if (i === 0) {
    post[i + 1].style = "left:100%;z-index:1";

    
    post[p - 1].style = "left:-100%;z-index:1";


    post[i].style = "left:0;z-index:3";

    i++;
  } else if (i > 0 && i < p - 1) {
    post[i - 1].style = "left:-100%;z-index:1";

    post[i].style = "left:0;z-index:3";

    post[i + 1].style = "left:100%;z-index:1";
    i++;
  } else if (i === p - 1) {
    post[i - 1].style = "left:-100%px;z-index:1";

    post[i].style = "left:0;z-index:3";

    i = 0;

    post[i].style = "left:100%;z-index:1";
  }
}

