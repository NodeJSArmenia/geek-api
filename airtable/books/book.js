import config from "../../config/config.js";
import client from "../client.js";
import { getImage, getFile } from "../../lib/airtable.js";

const { airtable_books_token } = config.airtableConfig;

const getBooks = async () => {
  try {
    const books = await client.getTableByName(airtable_books_token);
    const mapedBooks = Promise.all(
      books.map(async (item) => {
        return mapBooks(item.fields);
      })
    );
    return mapedBooks;
  } catch (err) {
    console.log(err);
  }
};

function mapBooks(book) {
  const { Name, Hashtags, Image, File } = book;
  return {
    name: Name || null,
    hashtags: Hashtags || null,
    image: getImage(Image) || null,
    file: getFile(File) || null,
  };
}

export default {
  getBooks,
};
