import classes from './FeaturesGrid.module.scss'
import classNames from 'classnames'
import BitcoinImage from 'assets/images/btc-increase.png'

export const FeaturesGrid = () => {
  const features = [
    {
      img: BitcoinImage,
      title: 'Set up your wallet',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure eaque a sequi placeat atque ipsum illum quia aspernatur, corrupti totam commodi',
    },
    {
      img: BitcoinImage,
      title: 'Create your collection',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure eaque a sequi placeat atque ipsum illum quia aspernatur, corrupti totam commodi',
    },
    {
      img: BitcoinImage,
      title: 'Add your NTFs',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure eaque a sequi placeat atque ipsum illum quia aspernatur, corrupti totam commodi',
    },
    {
      img: BitcoinImage,
      title: 'Add your NTFs',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure eaque a sequi placeat atque ipsum illum quia aspernatur, corrupti totam commodi',
    },
    {
      img: BitcoinImage,
      title: 'Add your NTFs',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure eaque a sequi placeat atque ipsum illum quia aspernatur, corrupti totam commodi',
    },
    {
      img: BitcoinImage,
      title: 'Add your NTFs',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt iure eaque a sequi placeat atque ipsum illum quia aspernatur, corrupti totam commodi',
    },
  ]

  return (
    <section className={classNames(classes.container, 'container')}>
      <h2 className={classes.title}>What We Offer</h2>
      <div className={classes.grid}>
        {features.map((feature) => (
          <div className={classes.feature} key={feature.title}>
            <img
              src={feature.img}
              alt="Bitcoin vector"
              className={classes['feature-img']}
            />
            <span className={classes['feature-title']}>{feature.title}</span>
            <p className={classes['feature-desc']}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
