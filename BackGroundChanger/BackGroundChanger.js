const firstColor = document.getElementById("Input-1");
console.log(firstColor);
function backGroundSelector(){
    const firstColor = document.getElementById("Input-1").value;
    const secondColor = document.getElementById("Input-2").value;
    document.getElementById("gradientBackground").style.backgroundImage = `linear-gradient(to right, ${firstColor}, ${secondColor})`;
}