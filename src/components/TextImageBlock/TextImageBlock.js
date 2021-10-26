import { Button } from 'components'
import classNames from 'classnames'
import classes from './TextImageBlock.module.scss'

export const TextImageBlock = ({
  title,
  text,
  images,
  actionLabel,
  onAction = () => {},
  reverse,
}) => {
  return (
    <section
      className={classNames(
        classes.block,
        'container',
        reverse && classes['reverse'],
      )}
    >
      <div className={classes.info}>
        <h2 className={classes.title}>{title}</h2>
        <p className={classes.text}>{text}</p>
        <Button onClick={onAction} outline size="large">
          {actionLabel}
        </Button>
      </div>
      <div className={classes.figures}>
        {images.map((image) => (
          <img src={image.src} alt={image.alt} key={image.src} />
        ))}
      </div>
    </section>
  )
}
