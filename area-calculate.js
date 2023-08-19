function calculateTriangleArea(){
    const triangleWidth = getElementValueById('base');
    const triangleHeight = getElementValueById('height');

    if(isNaN(triangleWidth) || isNaN(triangleHeight)){
        alert('please inter a valid Number');
        return;
    }
    // errorHandling(triangleHeight, triangleWidth);
    const area = 0.5 * triangleWidth * triangleHeight;
    setElementInnerText('total-area', area);


}


function calculateRectangleArea(){
    const rectangleWidth = getElementValueById('rectangle-width');
    const rectangleHeight = getElementValueById('rectangle-height');

    if(isNaN(rectangleWidth) || isNaN(rectangleHeight)){
        alert('please inter a valid Number');
        return;
    }

    const area = rectangleWidth * rectangleHeight;

    setElementInnerText('rectangle-area', area);
}


function calculateParallelogramArea(){
    const baseValue = getElementValueById('parallelogram-base');
    const heightValue = getElementValueById('parallelogram-height');

    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('please inter a valid Number');
        return;
    }

    const totalArea = baseValue * heightValue;
    
    setElementInnerText('parallelogram-area', totalArea);
}

function calculateEllipseArea(){
    const a = getElementValueById('ellipse-major-axis');
    const b = getElementValueById('ellipse-minor-axis');

    if(isNaN(a) || isNaN(b)){
        alert('please inter a valid Number');
        return;
    }

    const area = Math.PI*a*b;

    setElementInnerText('ellipse-area', area.toFixed(2));
}

function calculatePentagonArea(){
    const perimeter = getElementValueById('pentagon-perimeter');
    const apothem = getElementValueById('pentagon-apothem');

    if(isNaN(perimeter) || isNaN(apothem)){
        alert('please inter a valid Number');
        return;
    }

    const area = 1/2 * perimeter * apothem;

    setElementInnerText('pentagon-area', area);
}


function calculateRhombusArea(){
    const diagonalP = getElementValueById('diagonalP');
    const diagonalQ = getElementValueById('diagonalQ');

    if(isNaN(diagonalP) || isNaN(diagonalQ)){
        alert('please inter a valid Number');
        return;
    }

    const area = (diagonalP * diagonalQ) / 2;

    setElementInnerText('rhombus-area', area);
}

// common function

function getElementValueById(elementById){
    const inputFiled = document.getElementById(elementById);
    const inputFieldValue = parseFloat(inputFiled.value);
    return inputFieldValue;
}

function setElementInnerText(elementById, area){
    const element = document.getElementById(elementById);
    element.innerText = area;
}


// function errorHandling(value1, value2){
//     if(isNaN(value1) || isNaN(value2)){
//         alert('Please give a valid value');
//         return
//     }
// }