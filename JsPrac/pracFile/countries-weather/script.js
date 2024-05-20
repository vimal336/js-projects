function fetchData() {
 fetch("https://restcountries.com/v3.1/all").then
 (res => res.json()).then((countries)=>{
  let data1 =""
  countries.map((values)=>{
    data1+=`<div class="weather-box">
  <div class="weather-head">
       <div class="weather-title">
       <h3>${values.name.common}</h3>
     </div>
        <div class="weather-img">
            <img src=${values.flags.png}>
        </div>
    </div>
    <P><b>region:</b> ${values.region}</P>
    <P><b>capital:</b> ${values.capital}</P>
    <P><b>country code:</b> ${values.altSpellings[0]} </P>
    <P><b>Latlng</b>: ${values.latlng[0]},${values.latlng[1]}</P>
    <button class="weather-btn">Click for weather</button>
</div>`
  })
  document.querySelector(".weather-container").innerHTML=data1;
 })
}

fetchData();


async function fetchata() {
  try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json();
      console.log(data);
  } catch (
    error) {
      console.error('Error fetching data:', error);
  }
}

fetchata();

// async function renderData() {
//   const container = document.querySelector('.container');
//   const data = await fetchData();

//   if (!data) {
//       return;
//   }

//   data.forEach(item => {
//       const card = document.createElement('div');
//       card.classList.add('card');

//       const title = document.createElement('h2');
//       title.textContent = item.title;

//       const body = document.createElement('p');
//       body.textContent = item.body;

//       card.appendChild(title);
//       card.appendChild(body);
//       container.appendChild(card);
//   });
// }

// Call the renderData function to display data
// renderData();