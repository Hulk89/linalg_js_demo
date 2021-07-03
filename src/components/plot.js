import Component from "../core/Component.js"

import Plotly from 'plotly.js/dist/plotly.min'

function to_data(array, color='blue') {
  return {
    x: array[0],
    y: array[1],
    z: array[2], 
    i: [7, 0, 0, 0, 4, 4, 6, 6, 4, 0, 3, 2],
    j: [3, 4, 1, 2, 5, 6, 5, 2, 0, 1, 6, 3],
    k: [0, 7, 2, 3, 6, 7, 1, 1, 5, 5, 7, 6],
    color: color,
    opacity: 0.5,
    type: 'mesh3d'}
}

export default class Plot3D extends Component {
  setup () {
    this.$state = {data:[], height: 480, width: 600, title: ""}
  }
  render () {
    let {data, height, width, title} = this.$state
    let layout = {}
    layout = {...layout, ...{height, width, title}}
    Plotly.newPlot(this.$target,
                   data.map((d) => to_data(d.data,d.color)),
                   layout) 
  }
}
