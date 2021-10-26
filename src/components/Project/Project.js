import classNames from 'classnames'
import classes from './Project.module.scss'

export const Project = ({ data, fullWidth, thumbnailOnly }) => {
  return (
    <div
      className={classNames(
        classes.project,
        fullWidth && classes['full-width'],
      )}
    >
      <img
        src={data.img}
        alt="TODO: add project alt"
        className={classes['project-image']}
      />
      {!thumbnailOnly &&
      <div className={classes['project-info']}>
        <img
          src={data.avatar}
          alt="TODO: add avatar alt"
          className={classes['project-avatar']}
          />
        <span className={classes['project-title']}>{data.title}</span>
        <span className={classes['project-subtitle']}>{data.subtitle}</span>
      </div>
        }
    </div>
  )
}
