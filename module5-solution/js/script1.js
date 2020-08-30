//DOM manipulation
//Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    //console.log(document.getElementById("title"));
    function sayHello(event) {
      var name = document.getElementById("name").value;
      var message = "<h2>Hello " + name + " !</h2>";
      
      //document.getElementById("content").textContent = message;
      
      document.getElementById("content").innerHTML = message;
      if(name === "student") {
        var title = document.querySelector("#title").textContent;
        title += " & Lovin' it!!";
        document.querySelector("#title").textContent = title;
        //OR document.querySelector("h1").textContent = title;
      }
    }

    //Unobstrusive event binding
    //document.querySelector("button").addEventListener("click", sayHello);

    document.querySelector("button").onclick = sayHello;

    // document.querySelector("button").addEventListener("mousemove",
    //   function (event) {
    //     console.log("x: " + event.clientX);
    //     console.log("y: " + event.clientY);
    //   } 
    // );


  }
);
