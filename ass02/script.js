function task1() {
  var x = document.getElementById("p1").value.split(" ");
  var y = document.getElementById("p2").value.split(" ");
  var z = document.getElementById("p3").value.split(" ");

  var commonWords = _.intersection(x, y, z);
  var resultP1 = _.head(_(x).countBy().entries().maxBy(_.last));
  var resultP2 = _.head(_(y).countBy().entries().maxBy(_.last));
  var resultP3 = _.head(_(z).countBy().entries().maxBy(_.last));

  document.getElementById("PRES").innerHTML = commonWords;
  document.getElementById("P1RES").innerHTML = resultP1;
  document.getElementById("P2RES").innerHTML = resultP2;
  document.getElementById("P3RES").innerHTML = resultP3;
}
