export const test = async () => {
  const response = await fetch(
    "https://reststop.randomhouse.com/resources/authors?lastName=Woodson&firstName=Jacqueline"
  );

  let xmlData = await response.text();
  let convert = require("xml-js");

  let jsonData = convert.xml2json(xmlData, {
    compact: true,
    trim: true,
    spaces: 1,
  });

  let parsedData = JSON.parse(jsonData);
  console.log(parsedData);

  let isbns = parsedData.authors.author.map(
    (a) =>
      a.titles.hasOwnProperty("isbn") && a.titles.isbn.map((isbn) => isbn._text)
  );
  console.log(isbns);

  let filteredIsbns = isbns.filter((a) => a);
  filteredIsbns = [].concat.apply([], filteredIsbns);
  console.log(filteredIsbns);
};

// .then((response) => response.text())
// .then((result) => console.log(result))
// .catch((error) => console.log("error", error));
