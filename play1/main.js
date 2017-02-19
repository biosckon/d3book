var body = d3.select('body');
var p = body.append('p');
p.text('new paragraph');

d3.csv('food.csv', (error, data) => {
  if (error) {
    console.log(error);
  } else {
    dataset = data;
    body.selectAll('p')
      .data(dataset)
      .enter()
      .append('p')
      .text(d => { return `${d.Food} ${d.Deliciousness}`})
      .style('color', 'red');
  }
});
