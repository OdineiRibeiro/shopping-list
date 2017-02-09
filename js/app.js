function toList () {
  var item = document.getElementById("item");
  var qtd = document.getElementById("quantity");
  var price = document.getElementById("price");
  var total_price = (normalizeNumber(qtd.value) * normalizeNumber(price.value)).toFixed(2);

  var tr = "<tr>";

  tr += "<td><!-- <input type=\"checkbox\" value=\"\">  --></td>";
  tr += "<td class=\"item-name\">" + item.value + "</td>";
  tr += "<td>" + qtd.value + "</td>";
  tr += "<td>" + (normalizeNumber(price.value)).toFixed(2) + "</td>";
  tr += "<td class=\"total\">" + (parseFloat(total_price)).toFixed(2) + "</td>";
  tr += "<td><span class=\"glyphicon glyphicon-edit\" onclick=\"editRow(this)\"></span></td>";
  tr += "<td><span class=\"glyphicon glyphicon-trash\" onclick=\"removeRow(this)\"></span></td>";

  tr += "</tr>";

  var table = document.getElementById("table-shoplist");
  table.tBodies[0].innerHTML += tr;

  item.value = "";
  qtd.value = "";
  price.value = "";

  calculateTotal();
}

function calculateTotal () {
  var individual_totals = document.getElementsByClassName("total");
  var total = 0;

  for (var i = 0; i < individual_totals.length; i++) {
    var value = individual_totals[i].innerHTML;
    total += parseFloat(value);
  }

  document.getElementById("display-total").innerHTML = "Total: $ " + total.toFixed(2);
}

function removeRow (button) {
  if(confirm("You really want remove?")){
    button.parentElement.parentElement.remove();
    calculateTotal();
  }
}

function editRow(button) {
  var tds = button.parentElement.parentElement.getElementsByTagName("td");

  document.getElementById("item").value = tds[1].innerHTML;
  document.getElementById("quantity").value = tds[2].innerHTML;
  document.getElementById("price").value = tds[3].innerHTML;

  button.parentElement.parentElement.remove();
  calculateTotal();
}

function normalizeNumber(number) {
  number = number.gsub(",", ".");
  number = parseFloat(number);
  return number;
}

String.prototype.gsub = function(search, replacement) {
  return this.split(search).join(replacement);
};
