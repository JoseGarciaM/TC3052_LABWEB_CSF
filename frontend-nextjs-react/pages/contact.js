import Head from 'next/head';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Landing from 'layouts/Landing';
import Section from 'components/ui/Section';
import BlockContent from '@sanity/block-content-to-react';
import {getContactData, urlForImage} from 'lib/sanity/groq';

export default function Contact({contactData}) {
  const router = useRouter()
  const {locale} = router;
  return (
    <Landing>
      {contactData && (
        <>
          {contactData.map((data) => (
            <>
              <Head key={data._id}>
                {locale === "en" && <title>{data.SEOTitle.en}</title>}
                {locale === "es" && <title>{data.SEOTitle.es}</title>}
                <meta name="description" content="Generated by create next app" />
              </Head>
              <Section className="pt-28 lg:pt-36 h-144 lg:h-screen relative mb-0 md:mb-40">
                <Section.Content
                  fullWidth={true}
                  paddingX={false}
                  className="flex flex-col-reverse md:flex-row-reverse mb-0 md:mb-40"
                >
                  <div className="h-96 md:h-160 lg:h-192 relative overflow-hidden md:w-3/12">
                    {data.landingImage && (
                      <Image
                        src={urlForImage(data.landingImage).url()}
                        alt={data.landingTitle.en}
                        key={data.landingTitle.en}
                        layout="fill"
                        objectFit="cover"
                      />
                    )}
                  </div>
                  <div className="relative md:w-9/12 py-16 sm:py-20 md:py-24 lg:py-32 px-4-safe md:px-10-safe lg:px-36-safe flex flex-col items-start">
                    <div className="prose prose-lg lg:prose-xl">
                      <h2 className="title-4xl-7xl leading-none">
                        {locale === "en" && <>{data.landingTitle.en}</>}
                        {locale === "es" && <>{data.landingTitle.es}</>}
                      </h2>
                      {locale === "en" && <BlockContent blocks={data.landingBody.en} />}
                      {locale === "es" && <BlockContent blocks={data.landingBody.es} />}
                    </div>
                  </div>
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
  const contactData = await getContactData();

  return {
    props: {
      contactData,
    },
    revalidate: 1,
  };
}
