import { Layout } from 'components'
import { ProjectHero } from './page-components'


const Projects = () => {

  // statuses: 0, finished, 1, live, 2, paused

  const projects = [
    {
      id: 1,
      img: 'https://unsplash.it/500/500',
      avatar: 'https://unsplash.it/60/60',
      title: 'genesis blocks',
      artist: 'Kennedy Baird',
      status: 1,
      description: 'description'
    },
    {
      id: 2,
      img: 'https://unsplash.it/500/500',
      avatar: 'https://unsplash.it/60/60',
      title: 'old project',
      artist: 'Albert Einstein',
      status: 0,
      description: 'an older project that has been fully minted'
    },
  ]


  return (
    <Layout>
      
    {projects.map((project) => (

      project.status === 1 &&
        <ProjectHero
          data={project}
          key={project.id}
          fullWidth={project.fullWidth}
          thumbnailOnly={true}
        />
      ))}
      
      {projects.map((project) => (

        project.status === 0 &&
          <ProjectHero
            data={project}
            key={project.id}
            fullWidth={project.fullWidth}
            thumbnailOnly={true}
          />
        ))}
    </Layout>
  )
}

export default Projects
