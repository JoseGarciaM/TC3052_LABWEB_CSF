import Head from 'next/head';
import {useRouter} from 'next/router';
import Landing from 'layouts/Landing';
import Section from 'components/ui/Section';
import {ProductCard} from 'components/ui/Product';
import BlockContent from '@sanity/block-content-to-react';
import {getProductsData} from 'lib/sanity/groq';

export default function Products({productsData}) {
  const router = useRouter()
  const {locale} = router;
  return (
    <Landing>
      {productsData && (
        <>
          {productsData.map((data) => (
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
                      {locale === "en" && <>{data.productsTitle.en}</>}
                      {locale === "es" && <>{data.productsTitle.es}</>}
                    </h1>
                    {locale === "en" && <BlockContent blocks={data.productsBody.en} />}
                    {locale === "es" && <BlockContent blocks={data.productsBody.es} />}
                  </div>
                  {data.productsList && (
                    <div className="mt-20 lg:mt-24 mb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                      {data.productsList.map((product) => (
                        <ProductCard key={product.title} slug={product.slug}>
                          <ProductCard.Photo url={product.mainImage} />
                          <ProductCard.Information 
                            title={locale === "en" ? product.productName.en : 
                              locale === "es" ? product.productName.es : null
                            }
                          />
                        </ProductCard>
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
  const productsData = await getProductsData();

  return {
    props: {
      productsData,
    },
    revalidate: 1,
  };
}
