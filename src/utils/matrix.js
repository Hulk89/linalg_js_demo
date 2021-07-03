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
