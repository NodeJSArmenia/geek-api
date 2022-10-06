import geek from "../geeks/geek.js";

// State.
const geeks = [];
let communites = [];

async function sync() {
  try {
    geeks.push(await geek.getGeeks());
  } catch (err) {
    console.error(err);
  }
}

export default {
  sync,
  geeks,
};
