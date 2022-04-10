const host = 'api.frankfurter.app';
const selceted = document.querySelectorAll('.currency');
const num = document.getElementById('number');
const converted = document.getElementById('converted');

fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

  //select different currencies

  function display(data) {
    const entries = Object.entries(data);

    for (var i = 0; i < entries.length; i++) {
      selceted[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
      selceted[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`
    }
  }

//update rates

function updateRates() {
  let firstRate = selceted[0].value;
  let secondRate = selceted[1].value;
  let value = num.value;

  if (firstRate != secondRate) {
    exchange(firstRate, secondRate, value);
  } else {
    alert("Please select different currency")
  }
}

function exchange(firstRate, secondRate, value) {
  fetch(`https://${host}/latest?amount=${value}&from=${firstRate}&to=${secondRate}`).then((val) => val.json()).then((val) => {
    converted.value = Object.values(val.rates)[0];
  })
}