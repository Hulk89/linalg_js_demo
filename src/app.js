import Equation from "./components/equation.js"
import InputMatrix from "./components/matrix.js"
import {matrix_to_latex} from "./utils/array_to_latex.js"
import {det} from "./utils/matrix.js"
import Plotly from 'plotly.js/dist/plotly.min'

class App {
  constructor (target) {
    let plot = document.createElement('div')
    let eq = document.createElement('div')
    let det_div = document.createElement('div')
    let mat = document.createElement('div')

    target.append(plot)
    target.appendChild(eq)
    target.append(det_div)
    target.appendChild(mat)
    
    let eq_obj = new Equation(eq)
    let input_matrix = new InputMatrix(mat)

    let data = [[1, 0, 0],[0, 1, 0],[0, 0, 1]]

    let layout = {
        autosize: true,
        height: 480,
        scene: {
            xaxis: {
                type: 'linear',
                zeroline: true
            },
            yaxis: {
                type: 'linear',
                zeroline: true
            },
            zaxis: {
                type: 'linear',
                zeroline: true
            }
        },
        title: '3d point clustering',
        width: 477
    }
    Plotly.newPlot(plot, [{x: [0,1,1,0], y:[1,0,1,0], z:[1,0,1,0], mode:'markers', marker: {
		size: 12,
		line: {
		color: 'rgba(217, 217, 217, 0.14)',
		width: 0.5},
		opacity: 0.8},
	type: 'scatter3d'}], layout)

    eq_obj.setState({equation: matrix_to_latex(data)})
    det_div.innerHTML = `determinant of matrix: ${det(data)}`

    input_matrix.setState({
        data: data, 
        callback: (data) => {
          eq_obj.setState({equation: matrix_to_latex(data)})
          det_div.innerHTML = `determinant of matrix: ${det(data)}`
        }
      })
  }
}

let target = document.getElementById('app')
new App(target)

