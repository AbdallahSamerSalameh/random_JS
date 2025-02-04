// var bold=document.getElementById("bold")
// bold.addEventListener("click", function() {
// 	document.getElementById("txt").style.fontWeight="bold";
// });

// document.getElementById("bold").addEventListener("onclick",document.getElementById("txt").style.fontWeight="bolder");

document.getElementById("bold").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    if (txtElement.style.fontWeight === "bolder") {
        txtElement.style.fontWeight = "normal";
    } else {
        txtElement.style.fontWeight = "bolder";
    }
});
document.getElementById("italic").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    if (txtElement.style.fontStyle === "italic") {
        txtElement.style.fontStyle = "normal";
    } else {
        txtElement.style.fontStyle = "italic";
    }
});
document.getElementById("left").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    if (txtElement.style.textAlign === "left") {
        txtElement.style.textAlign = "justify";
    } else {
        txtElement.style.textAlign = "left";
    }
});
document.getElementById("center").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    if (txtElement.style.textAlign === "center") {
        txtElement.style.textAlign = "justify";
    } else {
        txtElement.style.textAlign = "center";
    }
});
document.getElementById("right").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    if (txtElement.style.textAlign === "right") {
        txtElement.style.textAlign = "justify";
    } else {
        txtElement.style.textAlign = "right";
    }
});
document.getElementById("lower").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    if (txtElement.style.textTransform === "lowercase") {
        txtElement.style.textTransform = "none";
    } else {
        txtElement.style.textTransform = "lowercase";
    }
});
document.getElementById("upper").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    if (txtElement.style.textTransform === "uppercase") {
        txtElement.style.textTransform = "none";
    } else {
        txtElement.style.textTransform = "uppercase";
    }
});
document.getElementById("capital").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    if (txtElement.style.textTransform === "capitalize") {
        txtElement.style.textTransform = "none";
    } else {
        txtElement.style.textTransform = "capitalize";
    }
});
document.getElementById("clear").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    var text=document.getElementById("txt").innerText;
    if (txtElement.innerText === "") {
        txtElement.innerText = text;
    } else {
        txtElement.innerText = "";
    }
});
document.getElementById("color").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    txtElement.style.color == document.getElementById("collor").value;
});
document.getElementById("bgcolor").addEventListener("click", function() {
    var txtElement = document.getElementById("bg");
    txtElement.style.color == document.getElementById("bgcollor").value;
});
document.getElementById("fsize").addEventListener("click", function() {
    var txtElement = document.getElementById("txt");
    txtElement.style.fontSize == document.getElementById("fontsize").value;
});