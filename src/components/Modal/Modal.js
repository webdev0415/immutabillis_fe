import ReactModal from 'react-modal'
import classes from './Modal.module.scss'

export const Modal = ({ isOpen, onClose = () => {}, children, title }) => {
  ReactModal.setAppElement('#root')

  const handleCloseModal = (e) => {
    e.preventDefault()
    onClose()
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      overlayClassName={classes.overlay}
      className={classes.modal}
    >
      <div className={classes.header}>
        <h3 className={classes.title}>{title}</h3>
        <button className={classes.close} onClick={handleCloseModal}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div className={classes.content}>{children}</div>
    </ReactModal>
  )
}
