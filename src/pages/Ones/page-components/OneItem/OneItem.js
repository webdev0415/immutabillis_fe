import { Button } from 'components'
import classes from './OneItem.module.scss'

import classNames from 'classnames'


export const OneItem = ({data}) => {
  return (

    <div
      className={classNames(
        classes.one
      )}
    >
      <img
        src={data.img}
        alt="TODO: add one alt"
        className={classes['one-image']}
      />
      <div className={classes['one-info']}>
        <span className={classes['one-title']}>{data.title}</span>
        <span className={classes['one-subtitle']}>{data.subtitle}</span>
      </div>
    </div>
  )
}
