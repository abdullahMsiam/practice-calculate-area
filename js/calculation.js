document.getElementById('triangle-cal-btn').addEventListener('click', function () {
    const actualInput1 = getInputValue('triangle-input-1');

    const actualInput2 = getInputValue('triangle-input-2');
    if (isNaN(actualInput1) || isNaN(actualInput2) || actualInput1 < 0 || actualInput2 < 0) {
        alert('You have to provide two number');
    }

    else {
        const triangleArea = (0.5 * actualInput1 * actualInput2);

        addedElement('Triangle Area:  ', triangleArea);
    }



})

document.getElementById('rectangle-cal-btn').addEventListener('click', function () {
    const actualInput1 = getInputValue('rectangle-input-1');

    const actualInput2 = getInputValue('rectangle-input-2')

    if (isNaN(actualInput1) || isNaN(actualInput2) || actualInput1 < 0 || actualInput2 < 0) {
        alert('You have to provide two number');
    }

    else {
        const rectangleArea = (actualInput1 * actualInput2);
        addedElement('Rectangle Area:  ', rectangleArea);
    }


})

document.getElementById('parallelogram-cal-btn').addEventListener('click', function () {
    const actualInput1 = getInputValue('parallelogram-input-1');
    const actualInput2 = getInputValue('parallelogram-input-2');

    if (isNaN(actualInput1) || isNaN(actualInput2) || actualInput1 < 0 || actualInput2 < 0) {
        alert('You have to provide two number');
    }
    else {
        const parallelogramArea = actualInput1 * actualInput2;
        addedElement('Parallelogram:  ', parallelogramArea);
    }

})

document.getElementById('rhombus-cal-btn').addEventListener('click', function () {
    const actualInput1 = getInputValue('rhombus-input-1');
    const actualInput2 = getInputValue('rhombus-input-2');
    if (isNaN(actualInput1) || isNaN(actualInput2) || actualInput1 < 0 || actualInput2 < 0) {
        alert('You have to provide two number');
    }
    else {
        const rhombusArea = (0.5 * actualInput1 * actualInput2);
        addedElement('Rhombus Area:  ', rhombusArea);
    }
})

document.getElementById('pentagon-cal-btn').addEventListener('click', function () {
    const actualInput1 = getInputValue('pentagon-input-1');
    const actualInput2 = getInputValue('pentagon-input-2');
    if (isNaN(actualInput1) || isNaN(actualInput2) || actualInput1 < 0 || actualInput2 < 0) {
        alert('You have to provide two number');
    }
    else {
        const pentagonArea = (0.5 * actualInput1 * actualInput2);
        addedElement('Pentagon Area:  ', pentagonArea);
    }
})

document.getElementById('ellipse-cal-btn').addEventListener('click', function () {
    const actualInput1 = getInputValue('ellipse-input-1');
    const actualInput2 = getInputValue('ellipse-input-2');
    if (isNaN(actualInput1) || isNaN(actualInput2) || actualInput1 < 0 || actualInput2 < 0) {
        alert('You have to provide two number');
    }
    else {
        const ellipseArea = (3.14 * actualInput1 * actualInput2);
        addedElement('Ellipse Area:  ', ellipseArea);
    }
})

document.getElementById('blog-btn').addEventListener('click', function () {
    window.open('blog.html');
})