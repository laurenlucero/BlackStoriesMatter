export const fetchIsbns = async (lastName, firstName) => {
  const response = await fetch(
    `https://reststop.randomhouse.com/resources/authors?lastName=${lastName}&firstName=${firstName}`
  );
  // const response = await fetch(
  //   `https://reststop.randomhouse.com/resources/authors?lastName=${lastName}&firstName=${firstName}`
  // );

  let xmlData = await response.text();
  let convert = require("xml-js");

  let jsonData = convert.xml2json(xmlData, {
    compact: true,
    trim: true,
    spaces: 1,
  });

  let parsedData = JSON.parse(jsonData);
  console.log("parsed", parsedData);

  let authorIsbns = parsedData.authors.author.map(
    (a) =>
      a.titles.hasOwnProperty("isbn") &&
      a.titles.isbn
        .filter((isbn) => isbn._attributes.contributortype === "A")
        .map((isbn) => isbn._text)
  );
  console.log("author", authorIsbns);

  let isbns = authorIsbns.filter((a) => a);
  isbns = [].concat.apply([], isbns);
  console.log("isbn array", isbns);
};

// .then((response) => response.text())
// .then((result) => console.log(result))
// .catch((error) => console.log("error", error));
