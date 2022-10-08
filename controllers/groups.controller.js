import store from "../store/store.js";

const getGroups = (req, res) => {
  res.json(store.getState().groups);
};

export default {
  getGroups,
};
