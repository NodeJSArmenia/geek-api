import store from "../store/store.js";

const getBooks = (req, res) => {
  res.json(store.getState().books);
};

export default {
  getBooks,
};
