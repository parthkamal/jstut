// console.log("welcome to post");
// console.log(window.location.pathname);

// window.onpopstate =(e)=>{
//     console.log(JSON.stringify(e.state))
//     location.reload();
// }

const points ='this is the first point .*this is the second point';
const pointArray = points.split('*');
pointArray.forEach((point)=>{
  console.log(point);
})