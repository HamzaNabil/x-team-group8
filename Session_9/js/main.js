// How To Send Request And Receive Data (Response)
// Promises ( Resolve ) ( Reject )

// https://jsonplaceholder.typicode.com/posts

// Send Request
// Where
// first Itration => info about request
// second Step => Info about response

// let btn = document.querySelector("button");
let divElm = document.querySelector("#data");

// btn.addEventListener("click", fetchPosts);

function fetchPosts(cb) {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((x) => x.json())
    .then((res) => cb(res))
    // .then((res) => drawPosts(res))
    .catch((err) => console.log(err));
}
// W3schools
fetchPosts(function (res) {
  // Map | forEach
  for (var i = 0; i < res.length; i++) {
    divElm.innerHTML += `
            <div class="box">
                <h2> ${res[i].title} </h2>
                <p> ${res[i].body} </p>
            </div>
        `;
  }
});

// function drawPosts(res) {
//     for (var i = 0; i < res.length; i++) {
//         divElm.innerHTML += `
//                 <div class="box">
//                     <h2> ${res[i].title} </h2>
//                     <p> ${res[i].body} </p>
//                 </div>
//             `;
//       }
// }

// function view(x) {
//   // x = function (o) {console.log("hello");}
//   x(2);
//   console.log(x);
// }

// view(function (o) {
//   console.log("hello");
// });

// function hamad(x) {

// }

// hamad( function (r) {})

// // x = function(r) {}

// x(2);
