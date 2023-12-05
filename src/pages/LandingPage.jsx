import axios from 'axios';
import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';


// Udah

function ApiCopy() {
  const [dataSahamIDX, setdataSahamIDX] = useState([]);

  const fetchDataSaham = async () => {
    try {
      const response = await axios.get("https://api.goapi.io/stock/idx/companies?api_key=9a33be32-fdc9-5985-fb25-1e68eca9");
      const responseDatasaham = response.data;

      const datakombinasi = responseDatasaham.data.results.map(company => ({
        symbol: company.symbol,
        nama: company.name,
        gabungan: `${company.symbol} - ${company.name}`,
      }));

      setdataSahamIDX(datakombinasi);
      console.log(datakombinasi);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDataSaham();
  }, []);

  return (
    <>
      <div>
        {/* <Stack spacing={1} sx={{ width: 300 }}> */}
          <Autocomplete
            options={dataSahamIDX}
            getOptionLabel={(option) => option.gabungan}
            id="disable-list-wrap"
            disableListWrap
            renderInput={(params) => (
              <TextField {...params} label="Masukkan data saham" variant="standard" />
            )}
          />
        {/* </Stack> */}
        {/* {data.map((company, index) => (
          <div key={index}>
            <p>{company.symbol}</p>
            <p>{company.nama}</p>
          </div>
        ))} */}
      </div>
    </>
  );
}

export default ApiCopy;
