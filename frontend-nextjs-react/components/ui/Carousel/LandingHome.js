import {useState, useEffect, useCallback} from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import useRecursiveTimeout from 'hooks/useRecursiveTimeout';
import {urlForImage} from 'lib/sanity/groq';

const AUTOPLAY_INTERVAL = 3000;

export default function LandingHome(props) {
  const {slides} = props;
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
    } else {
      embla.scrollTo(0);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
    embla.on("pointerDown", stop);
  }, [embla, onSelect, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <div className="overflow-hidden h-full" ref={viewportRef}>
      <div className="flex h-full">
        {slides && (
          <>
            {slides.map((slide) => (
              // eslint-disable-next-line react/jsx-key
              <div className="relative h-full flex-0-0-full">
                <Image
                  src={urlForImage(slide).url()}
                  alt="lol"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
