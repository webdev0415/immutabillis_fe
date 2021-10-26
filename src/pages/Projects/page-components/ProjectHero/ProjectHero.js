import { Button } from 'components'
import classes from './ProjectHero.module.scss'

import classNames from 'classnames'

/**
 * ProjectHero
 * 
 * 
 *
 */

export const ProjectHero = ({data}) => {
  return (
    <section className={classNames(classes.hero, 'container')}>
    <div className={classes.info}>
      <h1 className={classes.title}>
        {/* Project name */}
        {data.title}
      </h1>
      <h2 className={classes.subtitle}>
        by <span>{data.artist}</span>
      </h2>
      <p className={classes.desc}>
        {/* Project description */}
        {data.description}
      </p>
      <Button size="large">View Project</Button> 
      {data.status === 'open' && 
        <span>project is live</span>
      }
    </div>
    <div className={classes.figure}>
      {/* This image is randomly pulled from one of the minted items in the project */}
      <img src={data.img} alt="Bitcoin svg" draggable="false" />
    </div>
    </section>
  )
}
