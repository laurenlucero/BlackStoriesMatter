export const test = async () => {
  const response = await fetch(
    "https://reststop.randomhouse.com/resources/authors?lastName=Woodson&firstName=Jacqueline"
  );
  let xmlData = await response.text();

  let convert = require("xml-js");

  let object = convert.xml2json(xmlData, {
    compact: true,
    trim: true,
    spaces: 1,
  });
  
  let parsedObj = JSON.parse(object)
  console.log(parsedObj);

  let isbnArr = parsedObj['authors'].author.map((a) => a.titles.hasOwnProperty('isbn') && a.titles.isbn.map(isbn => isbn._text));
  console.log(isbnArr);



  let filterArr = isbnArr.filter(a => a)
  
  filterArr = [].concat.apply([], filterArr)
  console.log(filterArr)
};

// .then((response) => response.text())
// .then((result) => console.log(result))
// .catch((error) => console.log("error", error));