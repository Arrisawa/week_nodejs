const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'catatan.txt');

//1. Tulis file
fs.writeFileSync(filePath, 'Iki EPEP!');
console.log('file berhasil dibuat di:', filePath);

//2. Baca file
const isiFile = fs.readFileSync(filePath, 'utf-8');
console.log('Isi file:', isiFile);