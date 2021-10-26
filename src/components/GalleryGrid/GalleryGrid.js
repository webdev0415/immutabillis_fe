import { Project } from 'components'
import classNames from 'classnames'
import classes from './GalleryGrid.module.scss'

export const GalleryGrid = () => {

  /**
   * This is an array of randomly selected items from the WHOLE collection from the smart contract.
   * 
   * IMAGE ONLY displayed, with link to the INDIVIDUAL ITEM
   */
  const projects = [
    {
      id: 1,
      img: 'https://unsplash.it/500/500',
      avatar: 'https://unsplash.it/60/60',
      title: 'Project title',
      subtitle: 'Project longer subtitle',
      fullWidth: false,
    },
    {
      id: 2,
      img: 'https://unsplash.it/500/500',
      avatar: 'https://unsplash.it/60/60',
      title: 'Project title',
      subtitle: 'Project longer subtitle',
      fullWidth: false,
    },
    {
      id: 3,
      img: 'https://unsplash.it/500/500',
      avatar: 'https://unsplash.it/60/60',
      title: 'Project title',
      subtitle: 'Project longer subtitle',
      fullWidth: false,
    },
    {
      id: 4,
      img: 'https://unsplash.it/500/500',
      avatar: 'https://unsplash.it/60/60',
      title: 'Project title',
      subtitle: 'Project longer subtitle',
      fullWidth: false,
    },
    {
      id: 6,
      img: 'https://unsplash.it/500/500',
      avatar: 'https://unsplash.it/60/60',
      title: 'Project title',
      subtitle: 'Project longer subtitle',
      fullWidth: true,
    },
  ]

  return (
    <section className={classNames(classes.container, 'container')}>
      <div className={classes.grid}>
        {projects.map((project) => (
          <Project
            data={project}
            key={project.id}
            fullWidth={project.fullWidth}
            thumbnailOnly={true}
          />
        ))}
      </div>
    </section>
  )
}
