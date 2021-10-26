import classNames from 'classnames'
import classes from './Button.module.scss'

export const Button = ({
  children,
  className,
  outline,
  size,
  onClick = () => {},
}) => {
  return (
    <button
      className={classNames(
        classes.button,
        outline && classes['outline'],
        size && classes[size],
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
