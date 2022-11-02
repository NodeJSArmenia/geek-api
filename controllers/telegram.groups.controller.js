import store from "../store/store.js";

const getTelegramGroups = (req, res) => {
  try {
    res.json(store.getState().telegramGroups);
  } catch (err) {
    console.log(err);
  }
};

export default {
  getTelegramGroups,
};
