const slugify = require("slugify");

// Strips out special characters from the title to make it url-friendly
function createSlug(title) {
  return slugify(title, { lower: true });
}

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      // On first save, ensure a title has been set
      // and that the user hasn't manually entered a slug
      if (data.title && !data.slug) {
        data.slug = createSlug(data.title);
      }
    },
    beforeUpdate: async (params, data) => {
      // On every update, we also need to check that the user
      // didn't clear the slug - if so, regenerate it
      if (data.title && !data.slug) {
        data.slug = createSlug(data.title);
      }
    },
  },
};
