
function getPosts(callback){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
  xhr.send();
  console.log(xhr);
  xhr.addEventListener('readystatechange',()=>{
    if(xhr.readyState===4&&xhr.status===200){
      callback(undefined,xhr.responseText)
    }else if(xhr.readyState===4){
      callback("something is going to wrong",undefined)
    }
  })
}

function post(err,data){
  if (err===undefined){
    console.log(data);
  }else if (data===undefined){
    console.log(err);
  }
}

getPosts(post);


// xhr.onload = function() {
//   if (xhr.status != 200) {
//   console.log(`Error ${xhr.status}: ${xhr.statusText}`);
//   } else {
//   console.log(`Done, got ${xhr.response.length} bytes`);
//   }
// };

// xhr.onprogress = function(event) {
//   if (event.lengthComputable) {
//   console.log(`Received ${event.loaded} of ${event.total} bytes`);
//   } else {
//   console.log(`Received ${event.loaded} bytes`);
//   }
// };

// xhr.onerror = function() {
// console.log("Request failed");
// };