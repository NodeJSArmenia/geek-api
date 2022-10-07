import geek from "../geeks/geek.js";

// State.
let geeks = [];
let communites = [];

function getState() {
  return {
    geeks,
    communites,
  };
}

async function sync() {
  try {
    // geeks.push(await geek.getGeeks());
    geeks = await geek.getGeeks(); // Վերագրելուց չի հասցնում փոխի արժեքը․
  } catch (err) {
    console.error(err);
  }
}

export default {
  sync,
  getState,
};
