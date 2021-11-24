export default {
  name: 'sectionHome',
  title: 'Section - Home',
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
      name: 'landingSlides',
      title: 'Landing Slides',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ]
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
    {
      name: 'qualitiesTitle',
      title: 'Qualities Title',
      type: 'localeString',
    },
    {
      name: 'qualitiesBody',
      title: 'Qualities Body',
      type: 'localeBlockContent',
    },
    {
      name: 'qualitiesCTA',
      title: 'Qualities CTA',
      type: 'localeString',
    },
    {
      name: 'qualitiesImage',
      title: 'Qualities Image',
      type: 'image',
    },
    {
      name: 'soloBody',
      title: 'Solo Body',
      type: 'localeBlockContent',
    },

    {
      name: 'cocktailsTitle',
      title: 'Cocktails Title',
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
