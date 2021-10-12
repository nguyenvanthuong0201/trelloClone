// Sort theo thứ tự của 1 array khác
export const mapOther = (array,order,key)=>{
    array.sort((a,b)=>order.indexOf(a[key]) - order.indexOf(b[key]))
    return array
}