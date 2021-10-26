import { Button } from 'components'
import classes from './Hero.module.scss'

import HeroFigure from 'assets/images/hero-figure.png'
import classNames from 'classnames'

export const Hero = () => {
  return (
    <section className={classNames(classes.hero, 'container')}>
      <div className={classes.info}>
        <h1 className={classes.title}>
          Lorem ipsum, dolor <span>sit amet</span> consectetur
        </h1>
        <p className={classes.desc}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil error
          dolore repudiandae consequatur nesciunt, placeat, hic laudantium illo
          qui corrupti iste aspernatur natus nisi. Soluta eligendi iste cumque
          voluptas recusandae.
        </p>
        <Button size="large">Learn More</Button>
      </div>
      <div className={classes.figure}>
        <img src={HeroFigure} alt="Bitcoin svg" draggable="false" />
      </div>
    </section>
  )
}
