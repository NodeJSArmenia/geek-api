import store from "../store/store.js";

const getBooks = (req, res) => {
  try {
    res.json(store.getState().books);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getBooks,
};
