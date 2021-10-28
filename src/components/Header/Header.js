import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { Button, Modal } from "components";
import classes from "./Header.module.scss";
import classNames from "classnames";

import LogoImage from "assets/logos/logo.png";
import { ReactComponent as MetamaskIcon } from "assets/logos/metamask.svg";
import useMetaMaskAuth from "../../hooks/useMetamaskAuth";
import { isMetamaskLoggedInSelector } from "../../redux/auth/selector";

export const Header = ({ className }) => {
  const isMetamaskLoggedIn = useSelector(isMetamaskLoggedInSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [metaMaskNotInstalled, setMetaMaskNotInstalled] = useState(false);

  useEffect(() => {
    if (isMetamaskLoggedIn) {
      setIsModalOpen(false)
    }
  }, [isMetamaskLoggedIn])

  // const mmConnected = true;

  const navItems = [
    {
      label: "Gallery",
      to: "/gallery",
    },
    {
      label: "Projects",
      to: "/projects",
    },
    {
      label: "Ones",
      to: "/ones",
    },
    {
      label: "About",
      to: "/about",
    },
  ];
  const onMetaMaskNotInstalled = () => {
    setMetaMaskNotInstalled(true);
  };
  const { handleAuth } = useMetaMaskAuth(onMetaMaskNotInstalled);
  return (
    <header className={classNames(classes.header, className)}>
      <nav className={classes.nav}>
        <Link to="/" className={classes["logo-link"]}>
          <img src={LogoImage} alt="SaaS NFT logo" />
        </Link>

        <ul className={classes.list}>
          {navItems.map((item) => (
            <li className={classes.item} key={item.to}>
              <NavLink activeClassName={classes["item--active"]} to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {isMetamaskLoggedIn && (
          <ul className={classes.list + classes.right}>
            <li className={classes.item}>
              <NavLink
                activeClassName={classes["item--active"]}
                to="/collection"
              >
                Collection
              </NavLink>
            </li>
          </ul>
        )}
        {isMetamaskLoggedIn ? (
          <Button size="large">
            Connected
          </Button>
        ) : (
          <Button size="large" onClick={() => setIsModalOpen(true)}>
            Connect
          </Button>
        )}
      </nav>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Connect to Metamask"
      >
        <div className={classes.modal}>
          <button className={classes["modal-action"]}>
            <MetamaskIcon />
          </button>
          {metaMaskNotInstalled ? (
            <div className={classes["metamask-install"]}>
              <h3 className={classes["metamask-install-desc"]}>
                MetaMask is not installed on your browser.
              </h3>
              <a
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                className={classes["metamask-install-anchor"]}
              >
                <Button>Install Metamask</Button>
              </a>
            </div>
          ) : (
            <Button onClick={handleAuth}>Login with Metamask</Button>
          )}
          <p className={classes["modal-info"]}>
            Your are always in control when interacting on Immutabillis with
            METAMASK.
          </p>
        </div>
      </Modal>
    </header>
  );
};
