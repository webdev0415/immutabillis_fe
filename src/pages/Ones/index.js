import { Layout} from 'components'
import { OneGrid } from './page-components'


const Ones = () => {

  /*
  * Ones are "projects" like other projects, but with a mint of only 1 per project.
  *
  * These will have the auction / purchase functionality built into them on the website.
  * 
  * Different statuses:
  * Unbought / new
  * For Sale
  * 
  */




  const ones = [
    {
      id: 1,
      img: 'https://unsplash.it/1200/500',
      title: 'first 1/1 project',
      artist: 'Kennedy Baird',
      status: 1,
    },
    {
      id: 2,
      img: 'https://unsplash.it/500/900',
      title: 'another 1/1 project',
      artist: 'Albert Einstein',
      status: 0,
    },
    {
      id: 3,
      img: 'https://unsplash.it/600/800',
      title: 'more ones',
      artist: 'James James',
      status: 0,
    },
    {
      id: 4,
      img: 'https://unsplash.it/900',
      title: 'another',
      artist: 'Different again',
      status: 0,
    },
  ]


  return (
    <Layout>
      <OneGrid ones={ones} />   
      
    </Layout>
  )
}

export default Ones
