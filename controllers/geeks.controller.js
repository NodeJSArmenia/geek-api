import store from "../store/store.js";

const getGeeks = async (req, res) => {
  res.json(store.getState().geeks);
};

export default {
  getGeeks,
};
