var typed = new Typed(".text", {
    strings:["Frontend Developer" , "Full Stack Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});


const btn1=document.getElementById("button1");
const btn2=document.getElementById("button2");
const btn3=document.getElementById("button3");
const btn4=document.getElementById("button4");
const btn5=document.getElementById("button5");
const btn6=document.getElementById("button6");
const sp = document.querySelectorAll(".progress-line");
const sp1 = document.getElementsByTagName("span");

btn1.addEventListener("click", ()=> {
    animate();
});
btn2.addEventListener("click", ()=> {
    animate();
});
btn3.addEventListener("click", ()=> {
    animate();
});
btn4.addEventListener("click", ()=> {
    animate();
});
btn5.addEventListener("click", ()=> {
    animate();
});
btn6.addEventListener("click", ()=> {
    animate();
});

function animate(){
    setTimeout(()=>
        {window.location.reload();},200
    );

}
