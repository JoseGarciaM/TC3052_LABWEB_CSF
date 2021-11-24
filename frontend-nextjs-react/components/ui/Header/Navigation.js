import {useState, useRef, useMemo} from 'react';
import cx from 'classnames';
import {Transition} from '@headlessui/react';
import {useScrollPosition} from '@n8tb1t/use-scroll-position';

export default function Navigation(props) {
  const {
    children,
  } = props;

  return (
    <div className="relative flex flex-col">
      {children}
    </div>
  )
}

function Widgets(props) {
  const {
    children,
  } = props;

  return (
    <div className={cx(
      'relative',
      'flex items-center justify-between',
      'h-16 lg:h-24 px-4-safe lg:px-5-safe'
    )}>
      {children}
    </div>
  )
} Navigation.Widgets = Widgets;

function Menus(props) {
  const {
    children,
  } = props;

  const [hideOnScroll, setHideOnScroll] = useState(true);
  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll],
    false,
    false,
    300
  );

  return (
    <Transition
      show={hideOnScroll}
      enter="transition duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="absolute z-499 transform-gpu w-full top-16 lg:top-24 left-0"
    >
      {children}
    </Transition>
  )
} Navigation.Menus = Menus;