import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import {urlForImage} from 'lib/sanity/groq';

export default function CocktailCard(props) {
  const {
    slug,
    children,
    className,
    ...rest
  } = props;

  return (
    <Link
      href="/cocktails/[slug]"
      as={`/cocktails/${slug}`}
    >
      <a
        className={cx(
          'border border-gray-300 p-1.5 flex flex-col',
          'hover:shadow-md',
          className
        )}
        {...rest}
      >
        {children}
      </a>
    </Link>
  )
}

const CardPhoto = (props) => {
  const {
    url,
    className,
    ...rest
  } = props;

  return (
    <div className="h-72 w-full overflow-hidden relative">
      <Image
        src={urlForImage(url).url()}
        alt="lol"
        layout="fill"
        objectFit="cover"
      />
    </div>
    
  )
} 
CocktailCard.Photo = CardPhoto;

const CardInformation = (props) => {
  const {
    title,
    mainIngridients,
    className,
    ...rest
  } = props;

  return (
    <div 
      className="p-3"
      {...rest}
    >
      <div className="font-serif font-bold text-2xl lg:text-3xl">
        {title}
      </div>
      <div className="mt-3">
        {mainIngridients}
      </div>
    </div>
  )
} 
CocktailCard.Information = CardInformation;