const area = document.getElementById("p");

area.onmouseover = function () {
    texto.style.visibility = "visible";
}

// Quando o mouse sai da área
area.onmouseout = function () {
    texto.style.visibility = "hidden";
}