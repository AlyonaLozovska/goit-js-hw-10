export function fetchCountries(name) {
  const url = `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`;

  return fetch(url).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}












// Тебе нужны только следующие свойства:

// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков

// https://restcountries.com/v3.1/name/{name}?fullText=true
// https://restcountries.com/v3.1/capital/{capital}

// "flags": {
//   "svg": "https://restcountries.com/data/per.svg",
//   "png": "https://restcountries.com/data/png/per.png"
// }
// https://restcountries.com/v3.1/lang/{lang}