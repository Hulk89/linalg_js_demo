import Component from "../core/Component.js"

import Plotly from 'plotly.js/dist/plotly.min'

export default class Plot extends Component {
  setup () {
    this.$state = {data:[], height: 480, width: 480, title: ""}
  }
  render () {
    let {data, height, width, title} = this.$state
    let layout = {}
    layout = {...layout, ...{height, width, title}}
    Plotly.newPlot(this.$target, data, layout) 
  }
}
