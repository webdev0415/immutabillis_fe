import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button, Modal } from 'components'
import classes from './Header.module.scss'
import classNames from 'classnames'

import LogoImage from 'assets/logos/logo.png'
import { ReactComponent as MetamaskIcon } from 'assets/logos/metamask.svg'

export const Header = ({ className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const mmConnected = true;

  const navItems = [
    {
      label: 'Gallery',
      to: '/gallery',
    },
    {
      label: 'Projects',
      to: '/projects',
    },
    {
      label: 'Ones',
      to: '/ones',
    },
    {
      label: 'About',
      to: '/about',
    },
  ]

  return (
    <header className={classNames(classes.header, className)}>
      <nav className={classes.nav}>
        <Link to="/" className={classes['logo-link']}>
          <img src={LogoImage} alt="SaaS NFT logo" />
        </Link>

        <ul className={classes.list}>
          {navItems.map((item) => (
            <li className={classes.item} key={item.to}>
              <NavLink activeClassName={classes['item--active']} to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {mmConnected &&
          <ul className={classes.list + classes.right}>
              <li className={classes.item} >
                <NavLink activeClassName={classes['item--active']} to='/collection'>
                  Collection
                </NavLink>
              </li>
          </ul>
        }

        <Button size="large" onClick={() => setIsModalOpen(true)}>
          Connect
        </Button>
      </nav>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Connect to Metamask"
      >
        <div className={classes.modal}>
          <button className={classes['modal-action']}>
            <MetamaskIcon />
          </button>
          <Button>Login with Metamask</Button>
          <p className={classes['modal-info']}>
            Your are always in control when interacting on Immutabillis with
            METAMASK.
          </p>
        </div>
      </Modal>
    </header>
  )
}
