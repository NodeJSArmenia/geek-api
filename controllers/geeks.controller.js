import store from "../store/store.js";

const getGeeks = async (req, res) => {
  try {
    res.json(store.getState().geeks);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getGeeks,
};
