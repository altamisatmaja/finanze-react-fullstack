const topik = ["Fuzzy Mamdani", "Fuzzy Sugeno", "Fuzzy Sukamoto"];
const kelompok = [
                "Kelompok 4",
                "Kelompok 8",
                "Kelompok 9"];

randomtopik(topik);
randomtopik(kelompok);
const pembagian = {};
for (let i = 0; i < topik.length; i++) {
  pembagian[topik[i]] = kelompok[i];
}

for (const topik in pembagian) {
  console.log(`Topik: ${topik} -> Kelompok: ${pembagian[topik]}`);
}

function randomtopik(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
