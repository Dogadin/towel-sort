
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if(!matrix) return arr
  matrix.forEach((item,ind) =>{
    if(ind%2==0){
      item.sort((a,b)=>a-b)
    }else{
      item.sort((a,b)=>b-a)
    }
    arr = [...arr,...item]
  })
  return arr;
}
