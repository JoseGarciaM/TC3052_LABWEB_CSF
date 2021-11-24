import Link from 'next/link';
import {useWindowSize} from 'react-recipes';
import {Logotype} from 'components/svg/branding';

export default function Logo() {
  const {width} = useWindowSize();

  return (
    <div className="absolute z-10 inset-0 flex items-center justify-center">
      <Link href="/">
        <a
          aria-label="Home"
        >
          <Logotype height={
            width > 992 ? '73' : '51'
          }/>
        </a>
      </Link>
    </div>
    
  )
}