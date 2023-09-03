var coll = document.getElementsByClassName("collapsible");
var up = document.querySelector('.up');
var down = document.querySelector('.down');
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    up.style.display = "none";
    down.style.display = "block";
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
    up.style.display = "block";
    down.style.display = "none";
    } 
});
}

var btn = document.getElementsByClassName("collapsephone");
var x = document.querySelector(".X-icon");
var y = document.querySelector(".Y-icon")
    
btn[0].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = document.getElementById("smth");
    if (content.style.display === "block") {
        content.style.display = "none";
        x.style.display = "none";
        y.style.display = "block";
    } else {
        content.style.display = "block";
        x.style.display = "block";
        y.style.display = "none";
    }
});


var coll = document.getElementsByClassName("collapsible-for");
var upn = document.querySelector('.upn');
var downn = document.querySelector('.downn');
var i;

for (i = 0; i < coll.length; i++) {
coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        content.style.padding = 0 + "px";
        upn.style.display = "none";
        downn.style.display = "block";
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        upn.style.display = "block";
        downn.style.display = "none";
    } 
});
}