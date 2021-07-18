import Component from "../core/Component.js"

import Plotly from 'plotly.js/dist/plotly.min'

function to_volume(array, color='blue') {
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

function to_points(array, color='blue') {
  return {
    x: array[0],
    y: array[1],
    z: array[2],
    color: color,
    opacity: 0.5,
    type: 'scatter3d'}
}

export default class Plot3D extends Component {
  setup () {
    this.$state = {data:[], height: 480, width: 600, title: ""}
  }
  /* Plotly는 직접 target element를 조작하므로 template를 쓰지 않고 직접 render함수를 바꾸게 되었다. */
  render () {
    let {data, height, width, title} = this.$state
    let layout = {}
    layout = {...layout, ...{height, width, title}}
    Plotly.newPlot(this.$target,
                   data.map((d) => to_points(d.data, d.color)).concat(data.map((d) => to_volume(d.data, d.color))),
                   layout) 
  }
}
