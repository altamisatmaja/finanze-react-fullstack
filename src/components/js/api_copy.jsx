import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ApiCopy() {
  const [loading, setLoading] = useState(true);
  const [dataSahamIDX, setdataSahamIDX] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8087/saham");
      const responseDatasaham = response.data;

      const datakombinasi = responseDatasaham.data?.results?.map(company => ({
        symbol: company.symbol,
        nama: company.name,
        gabungan: `${company.symbol} - ${company.name}`,
      }));

      setdataSahamIDX(datakombinasi);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("dataSahamIDX:", dataSahamIDX);
  }, [dataSahamIDX]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <label htmlFor="selectSaham">Masukkan data saham:</label>
      <select id="selectSaham" disabled={loading}>
        {dataSahamIDX.map((option) => (
          <option key={option.symbol} value={option.symbol}>
            {option.gabungan}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ApiCopy;
``
