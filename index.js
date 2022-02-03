console.log("hello from the server ")
const postBtn= document.querySelector("#post-btn");

// postBtn.addEventListener('click',(e)=>{
//   window.location.replace('localhost:5050/post')
// })
// window.addEventListener('popstate',(e)=>{
//   console.log(e);
// })
// history.pushState({},{},window.location.origin);
// history.lo
// postBtn. ('click',(e)=>{
//   e.preventDefault();
//   window.history.pushState({},'ffsdkhf',window.location.origin+"/"+"post.html");
//   window.history.forward();
//   // location.reload();
// })
window.onpopstate =(e)=>{
  console.log(JSON.stringify(e.state))
  location.reload();
}

history.replaceState({},{},location.origin);
console.log(window.history.state,location.pathname)

postBtn.addEventListener('click',(e)=>{
  console.log(window.history.state);
  history.pushState({},'fdshfskhf','post.html');
  console.log(location.pathname)
  location.reload();
})