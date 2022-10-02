const getList = async (req, res) => {
  res.json([]);
};

const addListItem = async (req, res) => {
  const { firstName, lastName, image, links, hashtags } = req.body;

  res.json({
    firstName,
    lastName,
    image,
    links,
    hashtags,
  });
};

export default {
  getList,
  addListItem,
};
