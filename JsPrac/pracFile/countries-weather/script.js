async function fetchData() {
  try {
      const response = await fetch('https://restcountries.com/v3.1/all')
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Error fetching data:', error);
  }
}


async function renderData() {
  const container = document.querySelector('.container');
  const data = await fetchData();

  if (!data) {
      return;
  }

  data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');

      const title = document.createElement('h2');
      title.textContent = item.title;

      const body = document.createElement('p');
      body.textContent = item.body;

      card.appendChild(title);
      card.appendChild(body);
      container.appendChild(card);
  });
}

// Call the renderData function to display data
renderData();