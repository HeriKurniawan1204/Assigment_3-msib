const active = document.querySelector("#aktifCases");
const newdata = document.querySelector("#newCases");
const recovered = document.querySelector("#recoverCases");
const totalCases = document.querySelector("#totalCases");
const totalDeaths = document.querySelector("#totalDeath");
const totalTest = document.querySelector("#totalTes");

const input = document.querySelector("#is");
const button = document.querySelector("#btnSearch");

button.addEventListener("click", async () => {
  const date = new Date();
  const today = date.toISOString().slice(0, 10);

  const BASE_URL = `https://covid-193.p.rapidapi.com/history?country=${input.value}&day=${today}`;

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };

  const response = await fetch(BASE_URL, options);
  const data = await response.json();

  if (data.response.length) {
    const dataResponse = data.response[0];

    console.log(dataResponse);
    active.innerText = dataResponse.cases.active;
    newdata.innerText = dataResponse.cases.new ? dataResponse.cases.new : 0;
    recovered.innerText = dataResponse.cases.recovered;
    totalCases.innerText = dataResponse.cases.total;
    totalDeaths.innerText = dataResponse.deaths.total;
    totalTest.innerText = dataResponse.tests.total;
  }
});
