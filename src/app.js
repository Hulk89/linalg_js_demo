import Equation from "./components/equation.js"
import InputMatrix from "./components/matrix.js"
import Plot from "./components/plot.js"

import {matrix_to_latex} from "./utils/array_to_latex.js"
import {det} from "./utils/matrix.js"

class App {
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
    let input_matrix = new InputMatrix(mat_div)

    let data = [[1, 0, 0],[0, 1, 0],[0, 0, 1]]

    let plot_data = [{
      x: [0,1,1,0], 
      y: [1,0,1,0],
      z: [1,0,1,0], 
      mode:'markers', 
      marker: {
		    size: 12,
		    line: {
		      color: 'rgba(217, 217, 217, 0.14)',
		      width: 0.5
        },
		  opacity: 0.8
      },
	    type: 'scatter3d'}]

    plot.setState({data:plot_data, title:"scatter3d"})
    eq.setState({equation: matrix_to_latex(data)})
    det_div.innerHTML = `determinant of matrix: ${det(data)}`

    input_matrix.setState({
        data: data, 
        callback: (data) => {
          eq.setState({equation: matrix_to_latex(data)})
          det_div.innerHTML = `determinant of matrix: ${det(data)}`
        }
      })
  }
}

let target = document.getElementById('app')
new App(target)

