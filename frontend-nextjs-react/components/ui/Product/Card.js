import cx from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import {urlForImage} from 'lib/sanity/groq';

export default function ProductCard(props) {
  const {
    slug,
    children,
    className,
    ...rest
  } = props;

  return (
    <Link
      href="/products/[slug]"
      as={`/products/${slug}`}
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
    <div className="h-112 w-full overflow-hidden relative">
      <Image
        src={urlForImage(url).url()}
        alt="lol"
        layout="fill"
        objectFit="cover"
      />
    </div>
    
  )
} 
ProductCard.Photo = CardPhoto;

const CardInformation = (props) => {
  const {
    title,
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
    </div>
  )
} 
ProductCard.Information = CardInformation;