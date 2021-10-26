import { Link } from 'react-router-dom'
import { Button } from 'components'
import classNames from 'classnames'
import classes from './Figure.module.scss'
import NftImage from 'assets/images/nft.png'

export const Figure = () => {
  return (
    <div className={classNames(classes.container, 'container')}>
      <img src={NftImage} alt="NFT" className={classes.img} />
      <div className={classes.info}>
        <h1 className={classes.name}>
          LaserEye Fox
          <span>#15787</span>
        </h1>
        <div className={classes.statics}>
          <div>
            Owned by
            <Link to="/artist">Dave2d</Link>
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
            184 views
          </div>

          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            5 Likes
          </div>
        </div>

        <div className={classes.block}>
          <h2>Description</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae velit
            dolore culpa explicabo obcaecati autem amet sapiente et. Porro totam
            illum, aspernatur cum assumenda vel sit expedita dolorum esse a?
          </p>
        </div>

        <div className={classes.block}>
          <h2>Details</h2>
          <div className={classes.details}>
            <div className={classes['details-row']}>
              <span>Contract Address</span>
              <span>0x0717...e62b</span>
            </div>
            <div className={classes['details-row']}>
              <span>Token ID</span>
              <span>31</span>
            </div>
            <div className={classes['details-row']}>
              <span>Token Standard</span>
              <span>ERC-721</span>
            </div>
            <div className={classes['details-row']}>
              <span>Blockchain</span>
              <span>Ethereum</span>
            </div>
            <div className={classes['details-row']}>
              <span>Metadata</span>
              <span>Centralized</span>
            </div>
          </div>
        </div>

        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Make an offer
        </Button>
      </div>
    </div>
  )
}
