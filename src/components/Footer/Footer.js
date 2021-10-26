import { Link } from 'react-router-dom'
import classes from './Footer.module.scss'
import LogoImage from 'assets/logos/logo.png'
import classNames from 'classnames'

export const Footer = () => {
  const centerItems = [
    {
      label: 'About us',
      to: '/about-us',
    },
    {
      label: 'Create NFTs',
      to: '/create-nfts',
    },
    {
      label: 'Chat with us',
      to: '/chat',
    },
  ]

  const leftItems = [
    {
      label: 'About us',
      to: '/about-us',
    },
    {
      label: 'Create NFTs',
      to: '/create-nftxs',
    },
    {
      label: 'Create NFTs',
      to: '/create-nfts',
    },
    {
      label: 'Chat with us',
      to: '/chats',
    },
  ]

  return (
    <footer className={classes.footer}>
      <div className={classNames(classes.container, 'container')}>
        <div className={classes.row}>
          <div className={classes.col}>
            <img src={LogoImage} alt="SaaS NFT logo" className={classes.logo} />
            <p className={classes.info}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              vitae expedita officiis amet deserunt nisi. Maiores facere non
              accusamus temporibus neque, minus inventore eius
            </p>
          </div>

          <div className={classes.col}>
            <span className={classes['col-title']}>Company</span>
            <nav className={classes.nav}>
              {centerItems.map((item) => (
                <Link className={classes.link} to={item.to} key={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={classes.col}>
            <span className={classes['col-title']}>Quick Links</span>
            <nav className={classes.nav}>
              {leftItems.map((item) => (
                <Link className={classes.link} to={item.to} key={item.to}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className={classes.copyright}>
        <p>Copyright © {new Date().getFullYear()} – All rights reserved.</p>
      </div>
    </footer>
  )
}
