import config from "../config/config.js";
import client from "../airtable/client.js";
import { getImage, getFile } from "../lib/airtable.js";

const { airtable_books_token } = config.airtableConfig;

const getBooks = async () => {
  const books = await client.getTableByName(airtable_books_token);
  const mapedBooks = Promise.all(
    books.map(async (item) => {
      const { File } = item.fields;
      const file = await getFile(File);
      return mapBooks(item.fields, file);
    })
  );
  return mapedBooks;
};

function mapBooks(book, file) {
  const { Name, Hashtags, Image } = book;
  return {
    name: Name || null,
    hashtags: Hashtags || null,
    image: getImage(Image) || null,
    file: file || null,
  };
}

export default {
  getBooks,
};
