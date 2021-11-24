import cx from 'classnames';

export default function Section(props) {
  const {
    children,
    className,
    ...rest
  } = props;

  return (
    <section
      className={cx(
        'w-full',
        className
      )}
      {...rest}
    >
      {children}
    </section>
  )
}

const SectionContent = (props) => {
  const {
    children,
    className,
    fullWidth = false,
    paddingX = true,
    ...rest
  } = props;

  return (
    <div
      className={cx(
        fullWidth ? 'w-full' : 'max-w-screen-xl mx-auto',
        {
          'px-4-safe sm:px-5-safe md:px-8-safe xl:px-6-safe 2xl:px-5-safe': paddingX === true,
          'px-0': paddingX === false,
          'px-2-safe': paddingX === 'sm'
        },
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}

Section.Content = SectionContent;