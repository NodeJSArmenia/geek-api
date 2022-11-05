import store from "../store/store.js";

const getPodcasts = (req, res) => {
  try {
    res.json(store.getState().podcasts);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getPodcasts,
};
