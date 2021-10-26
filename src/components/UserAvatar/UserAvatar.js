import classes from './UserAvatar.module.scss'
import classNames from 'classnames'

export const UserAvatar = ({ className }) => {
  return (
    <div className={classNames(classes.container, className)}>
      <img
        src="https://unsplash.it/150/150"
        alt="user's avatar"
        className={classes.avatar}
      />
      <span className={classes.name}>John doe</span>
      <p className={classes.bio}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        dolore libero, incidunt nisi esse ducimus at. Unde, vero eveniet. Iusto
      </p>
      <span className={classes.joined}>Joined October 24, 2021</span>
    </div>
  )
}
