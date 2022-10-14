import geek from "../geeks/geek.js";
import group from "../groups/group.js";
import book from "../books/book.js";

// State.
let geeks = [];
let groups = [];
let books = [];

function getState() {
  return {
    geeks,
    groups,
    books,
  };
}

async function sync() {
  try {
    groups = await group.getGroups();
    geeks = await geek.getGeeks();
    books = await book.getBooks();
  } catch (err) {
    console.error(err);
  }
}

export default {
  sync,
  getState,
};
