import { Button } from 'components'
import classes from './LatestProjectHero.module.scss'

import HeroFigure from 'assets/images/hero-figure.png'
import classNames from 'classnames'

/**
 * LatestProjectHero
 * 
 * Pulls latest project from database, and one random image / "mint" from the project.
 *
 */

export const LatestProjectHero = () => {
  return (
    <section className={classNames(classes.hero, 'container')}>
      <div className={classes.info}>
        <h1 className={classes.title}>
          {/* Project name */}
          Genesis blocks
        </h1>
        <h2 className={classes.subtitle}>
          by <span>Kennedy Baird</span>
        </h2>
        <p className={classes.desc}>
          {/* Project description */}
          This is the description of the latest generative project.
        </p>
        <Button size="large">View Project</Button>
      </div>
      <div className={classes.figure}>
        {/* This image is randomly pulled from one of the minted items in the project */}
        <img src={HeroFigure} alt="Bitcoin svg" draggable="false" />
      </div>
    </section>
  )
}
