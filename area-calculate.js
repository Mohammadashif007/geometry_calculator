function calculateTriangleArea(){
    const triangleWidth = getElementValueById('base');
    const triangleHeight = getElementValueById('height');

    const area = 0.5 * triangleWidth * triangleHeight;

    const totalArea = document.getElementById('total-area');
    totalArea.innerText = area;
}


function calculateRectangleArea(){
    const rectangleWidth = getElementValueById('rectangle-width');
    const rectangleHeight = getElementValueById('rectangle-height');

    const area = rectangleWidth * rectangleHeight;

    const totalArea = document.getElementById('rectangle-area');
    totalArea.innerText = area;
}


function calculateParallelogramArea(){
    const baseValue = getElementValueById('parallelogram-base');
    const heightValue = getElementValueById('parallelogram-height');

    const totalArea = baseValue * heightValue;
    
    const area = document.getElementById('parallelogram-area');
    area.innerText = totalArea;
}

// common function

function getElementValueById(elementById){
    const inputFiled = document.getElementById(elementById);
    const inputFieldValue = parseFloat(inputFiled.value);
    return inputFieldValue;
}
