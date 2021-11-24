import Link from 'next/link';
import cx from 'classnames';

export default function Menu(props) {
  const {
    children,
  } = props;
  return (
    <div
      className={cx(
        'bg-white dark:bg-gray-900',
        'relative w-full h-12 lg:h-15',
        'sm:flex sm:justify-center sm:space-x-7',
        'overflow-x-scroll overflow-y-hidden overscroll-x-contain scrollbar-hide whitespace-nowrap'
      )}
    >
      {children}
    </div>
  )
}

function Item(props) {
  const {
    href,
    label,
    ariaLabel
  } = props;

  return (
    <Link
      href={href}
    >
      <a
        aria-label={ariaLabel}
        className={cx(
          'btn-xs uppercase font-bold tracking-wider',
          'inline-flex items-center',
          'h-full px-4-safe'
        )}
      >
        {label}
      </a>
    </Link>
  )
} Menu.Item = Item;