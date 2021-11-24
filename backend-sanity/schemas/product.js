export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'SEOTitle',
      title: 'SEO Title',
      type: 'localeString',
    },
    {
      name: 'productName',
      title: 'Product Name',
      type: 'localeString',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'productBlurb',
      title: 'Product Blurb',
      type: 'localeBlockContent',
    },
    {
      name: 'productDescription',
      title: 'Product Description',
      type: 'localeBlockContent',
    },
    {
      name: 'productCTA',
      title: 'Product CTA',
      type: 'localeString',
    },
    {
      name: 'productBody',
      title: 'Product Body',
      type: 'localeBlockContent',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    },
  ],
}
