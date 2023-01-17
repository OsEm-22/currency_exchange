const currencyForm = document.querySelector(".currencyForm");
const currencies = new Currency();

//getting currencies list first
currencies
  .getCurrencies()
  .then((data) => updateUI(data))
  .catch((err) => console.log(err.message));

// and adding into the options
const updateUI = (data) => {
  const units = Object.keys(data.currencies);
  const unitsLong = Object.values(data.currencies);

  for (let i = 0; i < units.length; i++) {
    currencyForm.unit1.innerHTML += `
         <option value=${units[i]}>${unitsLong[i]}</option>
      `;
    currencyForm.unit2.innerHTML += `
         <option value=${units[i]}>${unitsLong[i]}</option>
      `;
  }
};

currencyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const unit1 = currencyForm.unit1.value;
  const unit2 = currencyForm.unit2.value;
  const curr1amount = currencyForm.curr1.value;
  const result = document.querySelector(".result");
  currencies
    .getRate(unit1, unit2, curr1amount)
    .then((data) => {
      if (result.parentElement.classList.contains("d-none")) {
        result.parentElement.classList.remove("d-none");
      }

      result.innerHTML = `${data.result.toLocaleString("en-US")} ${unit2}`;
    })
    .catch((err) => console.log(err.message));
});
