import { Header, Footer } from 'components'
import classes from './Layout.module.scss'

export const Layout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Header className="container" />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  )
}
