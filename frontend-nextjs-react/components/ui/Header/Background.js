import {useState, useEffect} from 'react';
import {Transition} from '@headlessui/react';

export default function Background(props) {
  const {
    backgroundBlur,
    backgroundBorder
  } = props;
  
  const [border, setBorder] = useState(false);
  useEffect(() => {
    if (backgroundBorder === true) {
      setBorder(true);
    } else {
      setBorder(false);
    }
  },[backgroundBorder, setBorder]);

  const [blur, setBlur] = useState(false);
  useEffect(() => {
    if (backgroundBlur === true) {
      setBlur(true);
    } else {
      setBlur(false);
    }
  },[backgroundBlur, setBlur]);

  return (
    <div className="absolute inset-0 -z-10 bg-white dark:bg-gray-900 backdrop-filter backdrop-blur">
      <Transition
        show={backgroundBorder}
        enter="transition duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        border inside bg border
      </Transition>
    </div>
  )
}