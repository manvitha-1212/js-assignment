colors = new Array("red","yellow ","orange","green","blue","brown","purple","gray","white","pink","wheat")

colorIndex = 0

function changeColor() {
 document.bgColor = colors[colorIndex]
 colorIndex = (colorIndex + 1) % colors.length
}

function startColorChange() {
 setInterval("changeColor()",5000)
}

window.onload = startColorChange




