const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "indigo",
    "voilet",
  ];
  
  const h1 = document.querySelector("h1");
  const changeColor = function (evt) {
    console.log(evt)
    h1.style.color = this.style.backgroundColor;
  };
  
  const container = document.querySelector("#boxes");
  
  for (let color of colors) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;
    container.append(box);
    box.addEventListener("click", changeColor);
  }


  document.body.addEventListener('keypress',function(e){
    console.log(e);
  })
  