import geek from "../airtable/geeks/geek.js";
import telegramGroup from "../airtable/telegram-groups/telegram.group.js";
import book from "../airtable/books/book.js";
import podcast from "../airtable/podcasts/podcast.js";
import blog from "../airtable/blogs/blog.js";

// State.
let geeks = [];
let telegramGroups = [];
let books = [];
let podcasts = [];
let blogs = [];

function getState() {
  return {
    geeks,
    telegramGroups,
    books,
    podcasts,
    blogs,
  };
}

async function sync() {
  try {
    telegramGroups = await telegramGroup.getTelegramGroups();
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
