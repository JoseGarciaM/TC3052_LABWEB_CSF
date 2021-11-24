import cx from 'classnames';

export default function Wrapper(props) {
  const {
    width,
    children,
  } = props;

  return (
    <nav
      className={cx(
        'h-full mx-auto',
        {
          'max-w-screen-2xl': width === 'fixed',
        }
      )}
    >
      {children}
    </nav>
  )
}