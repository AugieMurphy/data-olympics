switchB = document.getElementById("switch");

var status = "OAR";

Switzerland = [5,4,6];
OAR = [2,6,9];

var dataset = [2,6,9];

var body = d3.select("body");

var svg = body.append("svg")
    .attr("width",750)
    .attr("height",2800)
    .style("border-style","solid")
    .style("border-width","5px");

var circles = svg.selectAll("circle")
    .data(OAR)
    .enter()
    .append("circle")

var display = function(){
    return circles.attr("cx", function(n,i){ return 200*(i+1); })
    .attr("cy",250)
    .attr("r", function(n){ return n*10; })
    .style("fill", function(n,i){
	if( i === 0 ){ return "#FFD700"; }
	else if( i === 1 ){ return  "#C0C0C0"; }
	else if( i === 2 ){ return "#8C7853"; }
    });
}

display();

var react = function(){
    if( status == "OAR" ){
	status = "Switzerland";
	svg.selectAll("circle")
	    .data(Switzerland)
	    .enter();
    }
    else{
	status = "OAR";
	svg.selectAll("circle")
	    .data(OAR)
	    .enter();
    }
    display();
}

switchB.addEventListener("click",react);
