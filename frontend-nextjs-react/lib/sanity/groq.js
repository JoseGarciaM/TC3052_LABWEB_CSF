import client from './client';
import imageUrlBuilder from '@sanity/image-url';

const imageBuilder = imageUrlBuilder(client);

export function urlForImage(source) {
  return imageBuilder.image(source);
}

export async function getHomeData() {
  const results = await client.fetch(
    `*[ _type == "sectionHome"]{
      _id,
      SEOTitle,
      landingSlides[] {
        asset->{url}
      },
      productsTitle,
      productsBody,
      "productsList": *[_type == "product"] {
        title,
        productName,
        'slug': slug.current,
        mainImage {
          asset->{url}
        },
      },
      qualitiesTitle,
      qualitiesBody,
      qualitiesCTA,
      qualitiesImage,
      soloBody,
      cocktailsTitle,
      "cocktailsList": *[_type == "cocktail"] {
        title,
        cocktailName,
        'slug': slug.current,
        cocktailMainIngridients,
        mainImage {
          asset->{url}
        },
      },
    }`,
  );
  return results;
}

export async function getProductsData() {
  const results = await client.fetch(
    `*[ _type == "sectionProducts"]{
      _id,
      SEOTitle,
      productsTitle,
      productsBody,
      "productsList": *[_type == "product"] {
        title,
        productName,
        'slug': slug.current,
        mainImage {
          asset->{url}
        },
      }
    }`,
  );
  return results;
}

export async function getProductsList() {
  const results = await client.fetch(
    `*[ _type == "product"]{
      _id,
      title,
      'slug': slug.current,
    }`,
  );
  return results;
}

export async function getProductData(slug) {
  const results = await client.fetch(
    `*[ _type == "product" && slug.current == $slug]{
      _id,
      title,
      SEOTitle,
      productName,
      productBlurb,
      productDescription,
      productCTA,
      productBody,
      mainImage {
        asset->{url}
      },
    }`,
    {slug},
  );
  return results;
}

export async function getAboutUsData() {
  const results = await client.fetch(
    `*[ _type == "sectionAboutUs"]{
      _id,
      SEOTitle,
      landingTitle,
      landingBody,
      landingImage,
      whoWeAreTitle,
      whoWeAreBody,
      whoWeAreImage,
      philosohyTitle,
      philosohyBody,
      philosohyImage,
      sustainabilityTitle,
      sustainabilityBody,
      sustainabilityImage,
    }`,
  );
  return results;
}

export async function getCocktailsData() {
  const results = await client.fetch(
    `*[ _type == "sectionCocktails"]{
      _id,
      SEOTitle,
      cocktailsTitle,
      "cocktailsList": *[_type == "cocktail"] {
        title,
        cocktailName,
        'slug': slug.current,
        cocktailMainIngridients,
        mainImage {
          asset->{url}
        },
      },
    }`,
  );
  return results;
}

export async function getCocktailsList() {
  const results = await client.fetch(
    `*[ _type == "cocktail"]{
      _id,
      title,
      'slug': slug.current,
    }`,
  );
  return results;
}

export async function getCocktailData(slug) {
  const results = await client.fetch(
    `*[ _type == "cocktail" && slug.current == $slug]{
      _id,
      title,
      SEOTitle,
      cocktailName,
      cocktailBlurb,
      cocktailDescription,
      mainImage {
        asset->{url}
      },
    }`,
    {slug},
  );
  return results;
}

export async function getContactData() {
  const results = await client.fetch(
    `*[ _type == "sectionContact"]{
      _id,
      SEOTitle,
      landingTitle,
      landingBody,
      landingImage,
    }`,
  );
  return results;
}