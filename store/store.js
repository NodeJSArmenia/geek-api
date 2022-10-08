import geek from "../geeks/geek.js";
import group from "../groups/group.js";

// State.
let geeks = [];
let groups = [];

function getState() {
  return {
    geeks,
    groups,
  };
}

async function sync() {
  try {
    groups = await group.getGroups();
    geeks = await geek.getGeeks();
  } catch (err) {
    console.error(err);
  }
}

export default {
  sync,
  getState,
};
