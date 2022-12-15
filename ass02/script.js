function task1() {
  var x = document.getElementById("p1").value.split(" ");
  var y = document.getElementById("p2").value.split(" ");
  var z = document.getElementById("p3").value.split(" ");

  var commonWords = _.intersection(x, y, z);
  document.getElementById("P1RES").innerHTML = commonWords;
}
