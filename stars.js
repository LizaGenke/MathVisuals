var sizeSlider = document.getElementById("starSize");
var outputSize = document.getElementById("starSizeOutput");
outputSize.innerHTML = sizeSlider.value; // Display the default slider value

var stepSlider = document.getElementById("starStep");
var outputStep = document.getElementById("starStepOutput");
outputStep.innerHTML = stepSlider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
sizeSlider.oninput = function() {
    outputSize.innerHTML = this.value;
    newStarPlot(this.value, stepSlider.value);
}

stepSlider.oninput = function() {
    outputStep.innerHTML = this.value;
    newStarPlot(sizeSlider.value, this.value);
}

function getYCoords(starSize, starStep)
{
    output_y_coords = []
    for (let i = 0; i < (starSize + 1); i++)
    {
        angle_rad = i*starStep*2*Math.PI/starSize;
        output_y_coords.push(Math.cos(angle_rad));
    }
    return output_y_coords;
}

function getXCoords(starSize, starStep)
{
    output_x_coords = []
    for (let i = 0; i < (starSize + 1); i++)
    {
        angle_rad = i*starStep*2*Math.PI/starSize;
        output_x_coords.push(Math.sin(angle_rad));
    }
    return output_x_coords;
}

function makeTrace(starSize, starStep) {
    return {
        y: getYCoords(starSize, starStep),
        x: getXCoords(starSize, starStep),
        line: {
            color: 'black'
        },
        visible: true,
        name: 'Star',
    };
}

function newStarPlot(starSize, starStep) {
    Plotly.newPlot('graph', Array(makeTrace(starSize, starStep)), {
        yaxis: {
            scaleanchor: "x",
            scaleratio: 1,
        },
    });
}