TESTER = document.getElementById('tester')
TESTER2 = document.getElementById('tester2')

for (let [title, t, d] of [
  [
    'Filter by two fields: \'type\', \'car\': <br>js: data.filter((e) => e.type === "one place" && e.car === "honda"),<br>jsonPath: $[?(@.type=="one place" && @.car=="honda")]                .',
    TESTER,
    dataEx1
  ],
  [
    "Filter by one field: 'car': <br>js: data.filter((e) => ['honda', 'lamborghini'].includes(e.car)),<br>jsonPath: $[?(@.car==\"honda\"||@.car==\"lamborghini\")]      .",
    TESTER2,
    dataEx2
  ]
]) {
  const dy = {
    x: d.x,
    y: d.json,
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
    x: d.x,
    y: d.string,
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
    title: title,
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

  Plotly.newPlot(t, [dx, dy], layout)
}
