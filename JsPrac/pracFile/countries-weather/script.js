function fetchData() {
 fetch("https://restcountries.com/v3.1/all").then
 (res => res.json()).then((countries)=>{
  let data1 =""
  countries.map((values)=>{
    data1+=`<div class="weather-box">
    <div class="weather-title">
        <div class="weather-img">
            <img src=${values.flags.png}>
        </div>
        <h3>${values.name.common}</h3>
    </div>
    <P>region: ${values.region}</P>
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
  } catch (error) {
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