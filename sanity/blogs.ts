export const blogs = {
  name: "blogs",
  type: "document",
  title: "blogs",
  fields: [
    {
      name: "image1",
      type: "image",
      title: "image 1",
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'productName',
        maxLength: 200, // will be ignored if slugify is set
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: "heading",
      type: "string",
      title: "heading",
    },
    {
      name: "intoduction",
      type: "string",
      title: "intoduction",
    },
    {
      name: "description",
      type: "string",
      title: "description",
    },
    {
      name: "conclusion",
      type: "string",
      title: "conclusion",
    },

  ],  
};