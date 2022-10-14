import geek from "../airtable/geeks/geek.js";
import group from "../airtable/groups/group.js";
import book from "../airtable/books/book.js";
import podcast from "../airtable/podcasts/podcast.js";
import blog from "../airtable/blogs/blog.js";

// State.
let geeks = [];
let groups = [];
let books = [];
let podcasts = [];
let blogs = [];

function getState() {
  return {
    geeks,
    groups,
    books,
    podcasts,
    blogs,
  };
}

async function sync() {
  try {
    groups = await group.getGroups();
    geeks = await geek.getGeeks();
    books = await book.getBooks();
    podcasts = await podcast.getPodcasts();
    blogs = await blog.getBlogs();
  } catch (err) {
    console.error(err);
  }
}

export default {
  sync,
  getState,
};
