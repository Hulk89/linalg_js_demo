
export function matrix_to_latex(box) {
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
