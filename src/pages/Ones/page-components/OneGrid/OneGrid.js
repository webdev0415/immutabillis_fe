import { Link } from 'react-router-dom'
import { Button } from 'components'
import classNames from 'classnames'
import classes from './OneGrid.module.scss'
import { OneItem } from '../OneItem/OneItem'

export const OneGrid = ({ones}) => {
  return (

    <section className={classNames(classes.container, 'container')}>
      <div className={classes.grid}>
      {ones.map((one) => (
        <OneItem
          data={one}
          key={one.id}
        />
      ))}
      </div>
    </section>
  )
}
