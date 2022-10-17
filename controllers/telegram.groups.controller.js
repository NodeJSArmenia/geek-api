import store from "../store/store.js";

const getTelegramGroups = (req, res) => {
  res.json(store.getState().telegramGroups);
};

export default {
  getTelegramGroups,
};
