
function myFunction(element, color) {
    element.style.color = color;
}

function increaseFontSizeBy50px() {
    document.getElementById('a').style.fontSize = "50px";
}

function backToNormal() {
    document.getElementById('a').style.fontSize = "20px";
}

const mybtn = document.getElementById('mybtn');
mybtn.addEventListener('click',buttonClicked);

function buttonClicked(e){   
    document.getElementById("title").className="hover";
}