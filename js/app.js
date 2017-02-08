function toList () {
  var item = document.getElementById("item").value;
  var qtd = document.getElementById("quantity").value;
  var price = document.getElementById("price").value;
  var total_price = qtd * price;

  var tr = "<tr>";

  tr += "<td><!-- <input type=\"checkbox\" value=\"\">  --></td>";
  tr += "<td>" + item + "</td>";
  tr += "<td>" + qtd + "</td>";
  tr += "<td>" + (parseFloat(price)).toFixed(2) + "</td>";
  tr += "<td class=\"total\">" + (parseFloat(total_price)).toFixed(2) + "</td>";
  tr += "<td><span class=\"glyphicon glyphicon-remove\" onclick=\"removeRow(this)\"></span></td>";

  tr += "</tr>";

  var table = document.getElementById("table-shoplist");
  table.tBodies[0].innerHTML += tr;
  calculateTotal();
}

function calculateTotal () {
  var individual_totals = document.getElementsByClassName("total");
  var total = 0;

  for (var i = 0; i < individual_totals.length; i++) {
    var value = individual_totals[i].innerHTML;
    total += parseFloat(value);
  }

  document.getElementById("display-total").innerHTML = "Total: $ " + total;
}

function removeRow (button){
  button.parentElement.parentElement.remove();
  calculateTotal();
}
