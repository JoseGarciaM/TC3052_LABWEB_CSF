export default {
  name: 'cocktail',
  title: 'Cocktail',
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
      name: 'cocktailName',
      title: 'cocktail Name',
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
      name: 'cocktailMainIngridients',
      title: 'cocktail Main Ingridients',
      type: 'localeString',
    },
    {
      name: 'cocktailBlurb',
      title: 'cocktail Blurb',
      type: 'localeBlockContent',
    },
    {
      name: 'cocktailDescription',
      title: 'cocktail Description',
      type: 'localeBlockContent',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    },
  ],
}
