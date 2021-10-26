import classNames from 'classnames'
import classes from './NTFGrid.module.scss'
import { NFT } from 'components'

export const NTFGrid = () => {
  const items = [
    {
      id: 2323,
      title: 'Pixel',
      name: 'Chicken',
      price: 0.005,
      likes: 5,
    },
    {
      id: 2323,
      title: 'Pixel',
      name: 'Chicken',
      price: 0.005,
      likes: 5,
    },
    {
      id: 2323,
      title: 'Pixel',
      name: 'Chicken',
      price: 0.005,
      likes: 5,
    },
    {
      id: 2323,
      title: 'Pixel',
      name: 'Chicken',
      price: 0.005,
      likes: 5,
    },
    {
      id: 2323,
      title: 'Pixel',
      name: 'Chicken',
      price: 0.005,
      likes: 5,
    },
    {
      id: 2323,
      title: 'Pixel',
      name: 'Chicken',
      price: 0.005,
      likes: 5,
    },
  ]

  return (
    <section className={classNames(classes.container, 'container')}>
      <h2 className={classes.title}>Your NFT Collection</h2>
      <div className={classes.grid}>
        {items.map((item) => (
          <NFT key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}
