import Equation from "./components/equation.js"
import InputMatrix from "./components/matrix.js"
import Plot from "./components/plot.js"

import {matrix_to_latex} from "./utils/array_to_latex.js"
import {det, matmul} from "./utils/matrix.js"

/* TODO: Add state manager and add example buttons*/
class App {
  $state = {}

  constructor (target) {
    let plot_div = document.createElement('div')
    let eq_div = document.createElement('div')
    let det_div = document.createElement('div')
    let mat_div = document.createElement('div')

    target.append(plot_div)
    target.appendChild(eq_div)
    target.append(det_div)
    target.appendChild(mat_div)
    
    let plot = new Plot(plot_div)
    let eq = new Equation(eq_div)
    eq.setState({inline: true})
    let input_form = new InputMatrix(mat_div)

    let m = [[1, 0, 0],
             [0, 1, 0],
             [0, 0, 1]]
    
    let src_points = [[0, 0, 1, 1, 0, 0, 1, 1],
                      [0, 1, 1, 0, 0, 1, 1, 0],
                      [0, 0, 0, 0, 1, 1, 1, 1]]

    this.$state = {
      outlet: {
        plot: plot,
        equation: eq,
        det_div: det_div,
      },
      data: {
        m: m,
        src_points: src_points
      }
    }
    this.render()

    input_form.setState({
        data: m,
        callback: (data) => {
          this.$state.data.m = data
          this.render()
        }
      })
  }
  render() {
    let {plot, equation, det_div}  = this.$state.outlet
    let {m, src_points} = this.$state.data

    let dst_points = matmul(m, src_points)

    let plot_data = [{data:src_points, color:'blue'}, {data:dst_points, color:'green'}]

    plot.setState({data:plot_data, title:"3D view"})
    equation.setState({equation: `${matrix_to_latex(dst_points)} = ${matrix_to_latex(m)} \\times ${matrix_to_latex(src_points)}`})
    det_div.innerHTML = `determinant of matrix: ${det(m)}`
  }
}

let target = document.getElementById('app')
new App(target)

