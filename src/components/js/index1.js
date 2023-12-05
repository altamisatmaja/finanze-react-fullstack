const url_data = 'https://api.goapi.io/stock/idx/companies?api_key=5ccc6356-6b0a-519c-f248-5c5798ea';

let database = [];

const ngefect = () => {
  fetch(url_data, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(regobj)
  })
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }
    return res.json(); // Parse the JSON data
  })
  .then((data) => {
    database = data;
    console.log(data);
  })
  .catch((err) => {
    toast.error('Gagal: ' + err.message);
  });
};

ngefect();
