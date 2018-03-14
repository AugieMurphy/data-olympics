var svgC = document.getElementById("svgc");
var switchB = document.getElementById("switch");
var titel = d3.select("#titel");
var status = 0;

var Switzerland = [5, 4, 6];
var OAR = [2, 6, 9];

var createCircles = function () {
    for (var i = 0; i < 3; i++) {
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttributeNS(null, "cx", (1280 * (i + 1)) / 4);
        circle.setAttributeNS(null, "cy", (720 / 2));
        switch(i) {
            case 0:
                circle.setAttributeNS(null, "fill", "#FFD700");
                break;
            case 1:
                circle.setAttributeNS(null, "fill", "#C0C0C0");
                break;
            case 2:
                circle.setAttributeNS(null, "fill", "#8C7853");
                break;
        }
        svgC.appendChild(circle);
    }
};

createCircles();

var changeTitel = function() {
    switch(status) {
        case "0":
            titel.html("data olympics!!! for Switzerland");
            break;
        case "1":
            titel.html("data olympics!!! for Olympic Athlete from Russia");
            break;
    }
};

var circles = d3.selectAll("circle");

circles.data(Switzerland);

var changeData = function () {
    circles.attr("r", function (d) {
        return d * 10;
    });
};

var pressToggle = function () {
    switch(status) {
        case "0":
            circles.data(OAR);
            status = 1;
            break;
        case "1":
            circles.data(Switzerland);
            status = 0;
            break;
    }
    changeTitel();
    changeData();
};

pressToggle();

switchB.addEventListener("click", pressToggle);
