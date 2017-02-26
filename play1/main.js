var body = d3.select('body');
var p = body.append('p');
p.text('new paragraph');

d3.csv('food.csv', (error, data) => {
    if (error) {
        console.log(error);
    } else {
        dataset = data;
        body.selectAll('div')
        .data(dataset)
        .enter()
        .append('div')
        .attr('class', 'bar')
        .style('height', d => (d.Deliciousness * 5) + 'px');
    }
});

var ds2 = [];
for (var i = 0; i < 25; i++) {
    var newNum = Math.random() * 30;
    ds2.push(newNum);
}

body.selectAll('div')
    .data(ds2)
    .enter()
    .append('div')
    .attr('class', 'bar2')
    .style('height', d => d + 'px');


// SVG
var w = 500;
var h = 80;

var svg = body.append('svg');
svg.attr('width', w).attr('height', h);
var circles = svg.selectAll('circle')
    .data(ds2)
    .enter()
    .append('circle');

circles.attr('cx', (d, i) => (i * 50) + 25)
    .attr('cy', h / 2)
    .attr('r', d => d)
    .attr('fill', 'yellow')
    .attr('stroke', 'orange')
    .attr('stroke-width', d => d/2);

// bar chart with SVG
var barPadding = 1;
var svg2 = body.append('svg');
svg2.attr('width', w).attr('height', h * 2)
    .selectAll('rect').data(ds2).enter()
    .append('rect')
    .attr({
        x: (_, i) => i * (w / ds2.length),
        y: d => h * 2 - d * 4,
        width: w / ds2.length - barPadding,
        height: d => d * 4,
        fill: d => `rgb(0, 0, ${Math.round(d * 10)})`
    });

// labels
svg2.selectAll('text')
    .data(ds2).enter().append('text')
    .text(d => Math.round(d))
    .attr({
        x: (_, i) => (i + 0.5) * (w / ds2.length),
        y: d => Math.round(h * 2 - d * 4) + 14,
        'font-family': 'sans-serif',
        'font-size': '11px',
        'fill': 'white',
        'text-anchor': 'middle'
    });


// ds3
var ds3 = [];
for (var i = 0; i < 25; i++) {
    var newx = Math.random() * w;
    var newy = Math.random() * h;
    ds3.push([newx, newy]);
}

var svg3 = body.append('svg');
svg3.attr({
    width: w,
    height: h
});
svg3.selectAll('circle')
    .data(ds3).enter().append('circle')
    .attr({
        cx: d => d[0],
        cy: d => d[1],
        r: d => Math.sqrt(h - d[1])
    })

svg3.selectAll('text')
    .data(ds3).enter().append('text')
    .text(d => `${Math.round(d[0])}, ${Math.round(d[1])}`)
    .attr({
        x: d => Math.round(d[0]),
        y: d => Math.round(d[1]),
        'font-family': 'sans-serif',
        'font-size': '11px',
        'fill': 'red',
        'text-anchor': 'middle'
    });

//
