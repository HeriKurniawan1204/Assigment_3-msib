const myInput = document.getElementById("inputSearch");
const myBtn = document.getElementById("btnSearch");

myBtn.addEventListener("click", function () {
  const inputCountry = myInput.value;

  fetch(`https://covid-193.p.rapidapi.com/statistics?country=${inputCountry}`, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "",
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const statistics = data.response[0];

      document.getElementById("aktifCases").innerHTML = statistics.cases.active;
      document.getElementById("newCases").innerHTML = statistics.cases.new;
      document.getElementById("recoverCases").innerHTML = statistics.cases.recovered;
      document.getElementById("totalCases").innerHTML = statistics.cases.total;
      document.getElementById("totalDeath").innerHTML = statistics.deaths.total;
      document.getElementById("totalTes").innerHTML = statistics.tests.total;
    })
    .catch((err) => {
      console.error(err);
      alert("Error!");
    });
});
