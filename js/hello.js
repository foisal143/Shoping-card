function plusValue(id) {
  const ipInputs = document.getElementById(id);
  const ipString = ipInputs.value;
  const ipvalue = parseInt(ipString);
  const newValue = ipvalue + 1;
  ipInputs.value = newValue;
}
//  decrease the quantity
function minusValue(id) {
  const ipInputs = document.getElementById(id);
  const ipString = ipInputs.value;
  const ipvalue = parseInt(ipString);
  const newValue = ipvalue - 1;
  ipInputs.value = newValue;
}
//  get the input value
function inputValue(id) {
  const inputField = document.getElementById(id);
  const inputString = inputField.value;
  const inputValue = parseInt(inputString);
  return inputValue;
}
// get the innerTexts from html element
// plus total cost
function totalCalculation(id1, id2, value) {
  const ipPrices = document.getElementById(id1);
  const inputsValue = inputValue(id2);

  const totalPrice = inputsValue * value;

  ipPrices.innerText = totalPrice;
}
function innerValue(id) {
  const innerField = document.getElementById(id);
  const innerTextValue = innerField.innerText;
  const innerParseValue = parseInt(innerTextValue);
  return innerParseValue;
}
// set the value by getElementById
function setInner(id, value) {
  const subTotal = document.getElementById(id);
  subTotal.innerText = value;
}
//  subtotal calculations
function totalCost() {
  const phonePrice = innerValue('ipPrice');
  const casePrice = innerValue('bgPrice');
  const sumOfprice = phonePrice + casePrice;
  setInner('sub', sumOfprice);
  const taxString = (sumOfprice * 0.02).toFixed(2);
  const taxs = parseFloat(taxString);
  setInner('tax', taxs);
  const total = taxs + sumOfprice;
  setInner('total', total);
}

document.getElementById('ipPlus').addEventListener('click', () => {
  plusValue('iPInput');

  totalCalculation('ipPrice', 'iPInput', 1219);
  totalCost();
});
const minus = document.getElementById('ipMinus');
minus.addEventListener('click', () => {
  minusValue('iPInput');
  totalCalculation('ipPrice', 'iPInput', 1219);
  totalCost();
});

document.getElementById('bkPlus').addEventListener('click', () => {
  plusValue('bkInput');
  totalCalculation('bgPrice', 'bkInput', 59);
  totalCost();
});
const minusBk = document.getElementById('bkMinus');
minusBk.addEventListener('click', () => {
  minusValue('bkInput');
  totalCalculation('bgPrice', 'bkInput', 59);
  totalCost();
});
