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
      .style('height', d => {
        return (d.Deliciousness * 5) + 'px';
      });
  }
});
