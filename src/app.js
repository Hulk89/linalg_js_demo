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

import Equation from "./components/equation.js";

class App {
  constructor (target) {
    let eq_obj = new Equation(target)
    eq_obj.setState("$\\frac{1}{3}$")
  }
}

let target = document.getElementById('app')
let app = new App(target)

/*
let svg = document.getElementById('plot')
let src = document.getElementById('src')

function to_matrix_latex_form(box) {
  let str = ''
  for (let i = 0 ; i < box.length ; i++) {
    let point = box[i]
    for (let j = 0 ; j < point.length ; j++) {
      str += `${point[j]}`
      if (j != point.length-1) str+= '&&'
    }
    if (i != box.length-1) str += ` \\\\ `
  }
  return '\\begin{bmatrix}' + str + '\\end{bmatrix}'
}

function matmul(mat1, mat2) {
  const m = mat1.length
  const n = mat1[0].length
  const r = mat2[0].length
  
  let res = []
  for (let i = 0 ; i < m ; i++) {
    let arr = []
    for (let j = 0 ; j < r ; j++) {
      let tmp = 0
      for (let k = 0 ; k < n ; k++) {
        tmp += mat1[i][k] * mat2[k][j]
      }
      arr.push(tmp)
    }
    res.push(arr)
  }
  return res
}
src.innerText = 'rectangle: ' + '$' + to_matrix_latex_form(src_box) + '$'


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
