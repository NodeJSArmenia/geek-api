import store from "../store/store.js";

const getBlogs = (req, res) => {
  try {
    res.json(store.getState().blogs);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getBlogs,
};
