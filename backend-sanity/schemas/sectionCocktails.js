export default {
  name: 'sectionCocktails',
  title: 'Section - Cocktails',
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
      name: 'cocktailsTitle',
      title: 'cocktails Title',
      type: 'localeString',
    },
    {
      name: 'cocktailsList',
      title: 'Cocktails List',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'cocktail'},
        },
      ],
    },
  ],
}
