var svgC = document.getElementById("svgc"); // SVG Container
var switchB = document.getElementById("switch"); // Button to toggle
var titel = d3.select("#titel"); // Title
var status = 0; // 0 for Swiss or 1 for OAR

var Switzerland = [5, 4, 6];
var OAR = [2, 6, 9];

var createCircles = function () { // Function to create the circles
    for (var i = 0; i < 3; i++) { // Creates 3 circles
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttributeNS(null, "cx", (1280 * (i + 1)) / 4); // 1st circle is 1/4 of the way, 2nd is 2/4 etc...
        circle.setAttributeNS(null, "cy", (720 / 2)); // Half the svg container height
        switch(i) {
            case 0: // If circle 1 then gold
                circle.setAttributeNS(null, "fill", "#FFD700");
                break;
            case 1: // If circle 2 then silver
                circle.setAttributeNS(null, "fill", "#C0C0C0");
                break;
            case 2: // If circle 3 then bronze
                circle.setAttributeNS(null, "fill", "#8C7853");
                break;
        }
        svgC.appendChild(circle); // Append circle to svg container
    }
};

createCircles(); // Create circles

var changeTitel = function() { // Function to change the title
    switch(status) {
        case "0": // If 0 then change title to Swiss
            titel.html("data olympics!!! for Switzerland");
            break;
        case "1": // If 1 then change title to OAR
            titel.html("data olympics!!! for Olympic Athlete from Russia");
            break;
    }
};

var circles = d3.selectAll("circle"); // Selects all the circles

circles.data(Switzerland); // Initially binds swiss data to circles

var changeData = function () {
    circles.attr("r", function (d) { // For each circle, radius from the data
        return d * 10; // Radius is data * 10
    });
    changeTitel(); // Changes the title
};

var pressToggle = function () { // Toggle event handler
    switch(status) {
        case "0": // If 0
            circles.data(OAR); // Bind OAR data
            status = 1; // Change status
            break;
        case "1": // If 1
            circles.data(Switzerland); // Bind swiss data
            status = 0; // Change status
            break;
    }
    changeData(); // Changes data to reflect changes
};

changeData(); // Sets initial radii for the circles

switchB.addEventListener("click", pressToggle); // Toggle event listener
