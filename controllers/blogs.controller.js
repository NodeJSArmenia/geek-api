import store from "../store/store.js";

const getBlogs = (req, res) => {
  res.json(store.getState().blogs);
};

export default {
  getBlogs,
};
