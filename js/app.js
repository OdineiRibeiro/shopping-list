function toList(){
  var product_name = document.getElementById('item');
  var quantity_element = document.getElementById('quantity');
  var price_element = document.getElementById('price');

  if (product_name.value == '')
    return;

  quantity = quantity_element.value.isNumeric() ? parseFloat(quantity_element.value) : 1;
  price = price_element.value.isNumeric() ? parseFloat(price_element.value.replace(',', '.')) : 0;

  incrementTable(product_name.value, quantity, price);
  cleanFields([product_name, quantity_element, price_element]);
}

function cleanFields(fields){
  for (var i = 0; i < fields.length; i++) {
    fields[i].value = "";
  }
}

function incrementTable(product, quantity, price) {
  var tr = "<tr>";

  tr += "<td class=\"item-name\">" + product + "</td>";
  tr += "<td class=\"text-center\">" + quantity + "</td>";
  tr += "<td class=\"text-center\">" + price + "</td>";
  tr += "<td class=\"text-center total-price\">" + (quantity * price).toFixed(2) + "</td>";
  tr += "<td><span class=\"text-center glyphicon glyphicon-edit\" onclick=\"editRow(this)\"></span></td>";
  tr += "<td><span class=\"text-center glyphicon glyphicon-trash\" onclick=\"removeRow(this)\"></span></td>";

  tr += "</tr>";

  var table = document.getElementById("table-shoplist");
  table.tBodies[0].innerHTML += tr;

  calculateTotal();
}

function calculateTotal() {
  var individual_totals = document.getElementsByClassName("total-price");
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
  debugger;
  var tds = button.parentElement.parentElement.getElementsByTagName("td");

  document.getElementById("item").value = tds[0].innerHTML;
  document.getElementById("quantity").value = tds[1].innerHTML;
  document.getElementById("price").value = tds[2].innerHTML;

  button.parentElement.parentElement.remove();
  calculateTotal();
}

String.prototype.isNumeric = function() {
  return !isNaN(parseFloat(this));
}
