import {
  Layout,
  TextBlock,
  TextImageBlock,
  ProjectsGrid,
  FeaturesGrid,
} from 'components'
import { Hero } from './page-components'

const Home = () => {
  return (
    <Layout>
      <Hero />
      <TextBlock title="this is a title" subtitle="this is a longer subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        mollitia, quidem veniam dignissimos soluta voluptate autem blanditiis
        voluptas, magni unde repellat deleniti possimus iste, vero nihil a fuga
        perferendis tempora! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Blanditiis cum voluptate voluptatem pariatur molestias eaque aut!
        Esse omnis amet, blanditiis doloribus similique laboriosam dolore! Sint
        eaque alias vero
      </TextBlock>
      <TextImageBlock
        title="The Premier makrketplace for nfties"
        text="magni unde repellat deleniti possimus iste, vero nihil a fuga
        perferendis tempora! Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Blanditiis cum voluptate voluptatem pariatur molestias eaque aut!
        Esse omnis amet, blanditiis doloribus similique laboriosam dolore! Sint
        eaque alias vero"
        images={[
          {
            src: 'https://unsplash.it/500/500',
            alt: 'alt should be added here',
          },
          {
            src: 'https://unsplash.it/500/500',
            alt: 'alt should be added here',
          },
          {
            src: 'https://unsplash.it/500/500',
            alt: 'alt should be added here',
          },
        ]}
        actionLabel="Learn More"
        onAction={() => console.log('action clicked')}
      />
      <ProjectsGrid />
      <FeaturesGrid />
    </Layout>
  )
}

export default Home
