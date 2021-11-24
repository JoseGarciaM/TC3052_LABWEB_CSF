import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
import blockContent from './blockContent';
import localeString from './locale/String';
import localeText from './locale/Text';
import localeBlockContent from './locale/BlockContent';
import product from './product';
import cocktail from './cocktail';
import productVariant from './productVariant';
import sectionHome from './sectionHome';
import sectionProducts from './sectionProducts';
import sectionCocktails from './sectionCocktails';
import sectionAboutUs from './sectionAboutUs';
import sectionContact from './sectionContact';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    product,
    cocktail,
    sectionHome,
    sectionProducts,
    sectionCocktails,
    sectionAboutUs,
    sectionContact
  ]),
})
