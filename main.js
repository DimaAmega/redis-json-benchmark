TESTER = document.getElementById('tester')

const dy = {
  x: dataEx1.x,
  y: dataEx1.json,
  type: 'box',
  name: 'filter via pathJson',
  marker: {
    color: 'rgb(7,40,89)'
  },
  boxmean: 'sd',
  boxpoints: false,
  legendgroup: 'group'
}

const dx = {
  x: dataEx1.x,
  y: dataEx1.string,
  type: 'box',
  name: 'filter via js',
  marker: {
    color: 'rgb(255,2,82)'
  },
  boxmean: 'sd',
  boxpoints: false,
  legendgroup: 'group2'
}

const layout = {
  title: "Filter by two fields: 'type', 'car' ",
  xaxis: {
    title: 'size of objects'
  },
  yaxis: {
    title: 'ms',
    autorange: true,
    showgrid: true,
    zeroline: false,
    dtick: 50,
    gridcolor: 'rgb(255, 255, 255)',
    gridwidth: 1,
    zerolinecolor: 'rgb(255, 255, 255)',
    zerolinewidth: 2
  },
  margin: {
    l: 40,
    r: 30,
    b: 80,
    t: 100
  },
  paper_bgcolor: 'rgb(243, 243, 243)',
  plot_bgcolor: 'rgb(243, 243, 243)'
}

Plotly.newPlot(TESTER, [dx, dy], layout)
