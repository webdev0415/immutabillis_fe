import classes from './NFT.module.scss'
import NftImage from 'assets/images/nft.png'

export const NFT = ({ data }) => {
  return (
    <div className={classes.nft}>
      <img src={NftImage} alt="" className={classes['nft-image']} />
      <div className={classes['nft-info']}>
        <div className={classes['nft-info-title']}>
          <span>{data.title}</span>
          <span>Price</span>
        </div>
        <div className={classes['nft-info-subtitle']}>
          <span>
            {data.name} #{data.id}
          </span>
          <span>{data.price}</span>
        </div>
      </div>
      <div className={classes['nft-footer']}>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        {data.likes}
      </div>
    </div>
  )
}
