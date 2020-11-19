console.log ("yay life!");
let eventsData;
fetch ("events.json")
    .then(resp => resp.json())
    .then(edata=>{
        console.log(edata)
        eventsData = edata;
        drawCircles(eventsData)
    })
let svg = d3.select ("#container").append("svg")
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight);
svg.append("rect")
    .attr("x",10).attr("y",20)
    .attr("width", 100).attr("height", 20);

function drawCircles(eventsData){
    svg.selectAll("circle")
    .data(eventsData.events)
    .enter()
    .append("circle")
    .attr("cx", (datum,index)=>{
        return index*50;
    }
    )
    .attr("cy", 20)
    .attr("r", 200)
    .attr("fill", "blue");
    console.log("drawingthecircles");
    
    
}
