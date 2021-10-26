import classNames from 'classnames'
import classes from './TextBlock.module.scss'

export const TextBlock = ({ title, subtitle, children }) => {
  return (
    <section className={classNames(classes.block, 'container')}>
      {title && <h2>{title}</h2>}
      {subtitle && <h3>{subtitle}</h3>}
      <p>{children}</p>
    </section>
  )
}
