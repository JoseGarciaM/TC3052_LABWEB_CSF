import Head from 'next/head';
import {useRouter} from 'next/router';
import Landing from 'layouts/Landing';
import Section from 'components/ui/Section';
import {CocktailCard} from 'components/ui/Cocktail';
import {getCocktailsData} from 'lib/sanity/groq';

export default function Cocktails({cocktailsData}) {
  const router = useRouter()
  const {locale} = router;
  return (
    <Landing>
      {cocktailsData && (
        <>
          {cocktailsData.map((data) => (
            <>
              <Head key={data._id}>
                {locale === "en" && <title>{data.SEOTitle.en}</title>}
                {locale === "es" && <title>{data.SEOTitle.es}</title>}
                <meta name="description" content="Generated by create next app" />
              </Head>
              <Section className="mt-28 lg:mt-36 py-16 sm:py-20 md:py-28 lg:py-36">
                <Section.Content>
                  <div className="prose prose-lg lg:prose-xl text-center mx-auto">
                    <h1 className="title-4xl-8xl leading-none">
                      {locale === "en" && <>{data.cocktailsTitle.en}</>}
                      {locale === "es" && <>{data.cocktailsTitle.es}</>}
                    </h1>
                  </div>
                  {data.cocktailsList && (
                    <div className="mt-20 lg:mt-24 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                      {data.cocktailsList.map((cocktail) => (
                        <CocktailCard key={cocktail.title} slug={cocktail.slug}>
                          <CocktailCard.Photo url={cocktail.mainImage} />
                          <CocktailCard.Information 
                            title={locale === "en" ? cocktail.cocktailName.en : 
                              locale === "es" ? cocktail.cocktailName.es : null
                            }
                            mainIngridients={locale === "en" ? cocktail.cocktailMainIngridients.en : 
                              locale === "es" ? cocktail.cocktailMainIngridients.es : null
                            }
                          />
                        </CocktailCard>
                      ))}
                    </div>
                  )}
                </Section.Content>
              </Section>
            </>
          ))}
        </>
      )}
    </Landing>
  )
}

export async function getStaticProps() {
  const cocktailsData = await getCocktailsData();

  return {
    props: {
      cocktailsData,
    },
    revalidate: 1,
  };
}
