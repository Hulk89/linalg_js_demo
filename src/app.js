import Equation from "./components/equation.js"
import InputMatrix from "./components/matrix.js"
import Plot from "./components/plot.js"

import {matrix_to_latex} from "./utils/array_to_latex.js"
import {det, transpose} from "./utils/matrix.js"

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

    let data = [[1, 0, 0, 0],[0, 1, 0, 0],[0, 0, 1, 0], [0, 0, 0, 1]]
    
    let arr = [[0, 0, 1, 1, 0, 0, 1, 1],
               [0, 1, 1, 0, 0, 1, 1, 0],
               [0, 0, 0, 0, 1, 1, 1, 1]]
    let arr2 = [[1,1,2,2,1,1,2,2],
                [1,2,2,1,1,2,2,1],
                [1,1,1,1,2,2,2,2]]

    let plot_data = [{data:arr, color:'blue'}, {data:arr2, color:'green'}]
    console.log(plot_data)

    plot.setState({data:plot_data, title:"3D view"})
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

