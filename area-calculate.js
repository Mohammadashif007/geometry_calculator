function calculateTriangleArea(){
    const inputFieldBase = document.getElementById('base');
    const inputFieldBaseValue = parseFloat(inputFieldBase.value);


    const inputFieldHeight = document.getElementById('height');
    const inputFieldHeightValue = parseFloat(inputFieldHeight.value);

    const area = 0.5 * inputFieldBaseValue * inputFieldHeightValue;

    const totalArea = document.getElementById('total-area');
    totalArea.innerText = area;
}

function calculateRectangleArea(){
    const inputFiendWidth = document.getElementById('rectangle-width');
    const inputFieldsWidthValue = parseFloat(inputFiendWidth.value);

    const inputFieldRectangleHeight = document.getElementById('rectangle-height');
    const inputFieldRectangleHeightValue = parseFloat(inputFieldRectangleHeight.value);

    const area = inputFieldsWidthValue * inputFieldRectangleHeightValue;

    const totalArea = document.getElementById('rectangle-area');
    totalArea.innerText = area;
}