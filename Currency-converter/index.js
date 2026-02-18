const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");

const currencySecondEl = document.getElementById("currency-second");
const wortSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/d9b3db4d17abebaa68499bb3/latest/${currencyFirstEl.value}`)
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[currencySecondEl.value];
      exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;
      worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    })
    .catch((error) => {
      console.error("Error fetching exchange rate:", error);
    });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);