import './ConfirmModal.css';

export default function ConfirmModal({
  showAndCloseModal,
  deleteProductHandler,
}) {
  return (
    <div className="wrap-confirm">
      <div className="form-confirm">
        <div>
          <button
            className="close-confirm"
            onClick={() => showAndCloseModal('confirmDisplay')}
          >
            <i className="bx bx-x"></i>
          </button>
          <h3 className="confirm-title">Are You Sure!</h3>
          <p className="confirm-desc">to delete this product</p>
          <div className="wrap-btns">
            <button
              className="btn-modal btn-Cancel"
              onClick={() => showAndCloseModal('confirmDisplay')}
            >
              Cancel
            </button>
            <button
              className="btn-modal btn-confirm"
              onClick={deleteProductHandler}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
