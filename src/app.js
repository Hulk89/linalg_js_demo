/*
let src_box = [[0, 5, 5, 0], [0, 0, 5, 5]]
let width = 30

let transpose = (box) => box[0].map((_, colIndex) => box.map(row => row[colIndex]))
let transform_view = (box, width) => box.map((point) => point.map((p, colIndex) => {
  if (colIndex == 0) return p
  else return width-p}
))

function draw(svg, box, color='blue') {
  let t_box = transform_view(transpose(box), width)
  const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon')
  polygon.setAttributeNS(null, 'points', t_box.flat().join(' '))
  polygon.setAttributeNS(null, 'fill', color)
  polygon.setAttributeNS(null, 'stroke', color)
  polygon.setAttributeNS(null, 'fill-opacity', '50%')
  svg.append(polygon)
  
  let colors = ['red', 'black', 'gray', 'orange']
  for (let i = 0 ; i < 4 ; i++) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
    circle.setAttributeNS(null, 'cx', t_box[i][0])
    circle.setAttributeNS(null, 'cy', t_box[i][1])
    circle.setAttributeNS(null, 'r', 1)
    circle.setAttributeNS(null, 'stroke', colors[i])
    svg.append(circle)
  }
}
*/
import Equation from "./components/equation.js"
import InputMatrix from "./components/matrix.js"
import {matrix_to_latex} from "./utils/array_to_latex.js"
import {det} from "./utils/matrix.js"


class App {
  constructor (target) {
    let eq = document.createElement('div')
    let mat = document.createElement('div')
    let det_div = document.createElement('div')

    target.appendChild(eq)
    target.append(det_div)
    target.appendChild(mat)
    
    let eq_obj = new Equation(eq)
    let input_matrix = new InputMatrix(mat)

    let data = [[1, 0, 0],[0, 1, 0],[0, 0, 1]]

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

/*
let svg = document.getElementById('plot')
let src = document.getElementById('src')


let apply_btn = document.getElementById('apply-btn')
apply_btn.addEventListener('click', () => {
  let matrix = [[document.getElementById('1').value,         
                 document.getElementById('2').value],
                [document.getElementById('3').value,
                 document.getElementById('4').value]]
  
  let transformed_box = matmul(matrix, src_box)
  
  let det = document.getElementById('det')
  
  
  det.innerText = `determinant of A = $ ${matrix[0][0]} \\times ${matrix[1][1]} - ${matrix[0][1]} \\times ${matrix[1][0]} = ${matrix[0][0]*matrix[1][1] - matrix[0][1]*matrix[1][0]} $`
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, det])
  
  let dst = document.getElementById('dst')
  
  dst.innerText = 'translated box: ' + '$' + 
    to_matrix_latex_form(matrix) + '\\times' + to_matrix_latex_form(src_box) + '=' + to_matrix_latex_form(transformed_box)+ '$'
  MathJax.Hub.Queue(["Typeset", MathJax.Hub, dst])

  while (svg.firstChild) {
    svg.firstChild.remove()
  }
  
  draw(svg, src_box)
  draw(svg, transformed_box, color='green')
})
*/
