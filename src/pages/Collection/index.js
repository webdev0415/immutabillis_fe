import classNames from 'classnames'
import { Layout, ProjectsGrid, UserBanner, UserAvatar, Tabs } from 'components'
import classes from './index.module.scss'

const Collection = () => {
  return (
    <Layout>
      <section className={classNames('container', classes.hero)}>
        <UserBanner />
        <UserAvatar className={classes.avatar} />
      </section>
      <Tabs>
        <div label="Collected">
          <ProjectsGrid />
        </div>
        <div label="Created">Created</div>
        <div label="Likes">Likes</div>
        <div label="Activity">Activity</div>
      </Tabs>
    </Layout>
  )
}

export default Collection