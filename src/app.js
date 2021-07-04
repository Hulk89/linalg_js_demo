import Equation from "./components/equation.js"
import InputMatrix from "./components/matrix.js"
import Plot from "./components/plot.js"

import {matrix_to_latex} from "./utils/array_to_latex.js"
import {det, matmul} from "./utils/matrix.js"

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

    let examples = [
      {m: [[1,0,0],[0,1,0],[0,0,1]], desc: "identity matrix"},
      {m: [[1,0,1],[0,1,0],[1,0,1]], desc: "determinant 0(rank=2)"},
      {m: [[1,1,1],[1,1,1],[1,1,1]], desc: "determinant 0(rank=1)"},
    ]

    this.$state = {
      outlet: {
        plot: plot,
        equation: eq,
        det_div: det_div,
        input_form: input_form,
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

    let examples_div = document.createElement('div')
    target.append(examples_div)
    examples.forEach((ex) => {
      let ex_button = document.createElement('button')
      ex_button.addEventListener('click', () => {
        this.$state.data.m = ex.m
        this.render()
      })
      ex_button.innerHTML = ex.desc
      examples_div.append(ex_button)
    })
  }
  render() {
    let {plot, equation, det_div, input_form}  = this.$state.outlet
    let {m, src_points} = this.$state.data

    let dst_points = matmul(m, src_points)

    let plot_data = [{data:src_points, color:'blue'}, {data:dst_points, color:'green'}]

    input_form.setState({data: m})
    plot.setState({data:plot_data, title:"3D view"})
    equation.setState({equation: `${matrix_to_latex(dst_points)} = ${matrix_to_latex(m)} \\times ${matrix_to_latex(src_points)}`})
    det_div.innerHTML = `determinant of matrix: ${det(m)}`
  }
}

let target = document.getElementById('app')
new App(target)

