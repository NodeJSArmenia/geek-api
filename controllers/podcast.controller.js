import store from "../store/store.js";

const getPodcasts = (req, res) => {
  res.json(store.getState().podcasts);
};

export default {
  getPodcasts,
};
