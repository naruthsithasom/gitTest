function changeColor(){
  // alert("change color run")
  let tcolor = document.querySelector('#in1').value;
  let bcolor = document.querySelector('#in2').value;

  document.querySelector('h1').style.color = tcolor;
  document.querySelector('h1').style.backgroundColor = bcolor;
}
