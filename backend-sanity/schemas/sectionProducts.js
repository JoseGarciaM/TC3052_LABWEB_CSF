export default {
  name: 'sectionProducts',
  title: 'Section - Products',
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
      name: 'productsTitle',
      title: 'Products Title',
      type: 'localeString',
    },
    {
      name: 'productsBody',
      title: 'Products Body',
      type: 'localeBlockContent',
    },
    {
      name: 'productsList',
      title: 'Products List',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'product'},
        },
      ],
    },
  ],
}
