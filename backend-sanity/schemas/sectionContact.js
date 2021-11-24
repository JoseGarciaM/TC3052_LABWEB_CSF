export default {
  name: 'sectionContact',
  title: 'Section - Contact',
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
      name: 'landingTitle',
      title: 'Landing Title',
      type: 'localeString',
    },
    {
      name: 'landingBody',
      title: 'Landing Body',
      type: 'localeBlockContent',
    },
    {
      name: 'landingImage',
      title: 'Landing Image',
      type: 'image',
    },
  ],
}
