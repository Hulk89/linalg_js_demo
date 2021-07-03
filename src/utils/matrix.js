export function det(M) {
  if (M.length==2)
  {
    return (M[0][0]*M[1][1])-(M[0][1]*M[1][0])
  }
  let answer = 0
  for (let i = 0 ; i < M.length ; i++)
  {
    answer += Math.pow(-1,i) * M[0][i] * det(deleteRowAndColumn(M,i))
  }
  return answer
}

function deleteRowAndColumn(M,index) {
  let temp = [];
  for (let i = 0 ; i < M.length ; i++)
  {
    temp.push(M[i].slice(0))
  } 
  temp.splice(0, 1) 
  for (let i = 0 ; i < temp.length ; i++)
  {
    temp[i].splice(index, 1)
  } 
  return temp
}
export function transpose (box) {
  return box[0].map((_, colIndex) => box.map(row => row[colIndex]))
}

export function matmul(mat1, mat2) {
  /* mat1 : m x n matrix 
   * mat2 : n x r matrix
   */
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
