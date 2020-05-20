window.addEventListener('load', start);

let red = null;
let green = null;
let blue = null;

function start() {
    red = document.querySelector('#red');
    green = document.querySelector('#green');
    blue = document.querySelector('#blue');
    rgbValue();
}

function rgbValue() {
    let redLength = document.querySelector('#redLength');
    let greenLength = document.querySelector('#greenLength');
    let blueLength = document.querySelector('#blueLength');
    let color = document.querySelector('#color');
    let rgb = null;

    function showColor() {
        rgb = 'rgb('+redLength.value+','+greenLength.value+','+blueLength.value+')';
        color.style.backgroundColor = rgb;
    }

    function pickColor(primaryColor, primaryValue){
        primaryColor.addEventListener('change', function(){
            primaryValue.value = primaryColor.value;
            showColor();
        }, false);
    }
    
    pickColor(red, redLength);
    pickColor(green, greenLength);
    pickColor(blue, blueLength);
}