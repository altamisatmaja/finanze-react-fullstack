// const fetch = require('node-fetch');

const fetchData = async () => {
  try {
    const response = await fetch('https://api.goapi.io/stock/idx/companies?api_key=5ccc6356-6b0a-519c-f248-5c5798ea');
    const datasaham = await response.json();
    console.log(datasaham);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData();
