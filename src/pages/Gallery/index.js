import { Layout, GalleryGrid } from 'components'

/**
 * Gallery view is infinite scroll, 1 random item pulled from each project.
 *
 */

const Gallery = () => {
  return (
    <Layout>
      <GalleryGrid />
    </Layout>
  )
}

export default Gallery
