import axios from 'axios';

let data = [];

const FetchDataSaham = async () => {
  try {
    const response = await axios.get("http://localhost:8087/saham");
    data = response.data;
    console.log(data);

    const datakombinasi = data.map(company => ({
      symbol: company.symbol,
      nama: company.name,
      gabungan: `${company.symbol} - ${company.name}`,
    })) || [];

    if (datakombinasi.length > 0) {
      datakombinasi.map(item => {
        console.log(item.gabungan);
      });
    } else {
      console.log("No results found");
    }

  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

FetchDataSaham();
