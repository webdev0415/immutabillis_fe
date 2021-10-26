import classes from './UserBanner.module.scss'

export const UserBanner = () => {
  return (
    <div className={classes.banner}>
      <img src="https://unsplash.it/1920/220" alt="user banner" />
    </div>
  )
}
