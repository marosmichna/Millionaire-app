import Modal from 'react-modal';

Modal.setAppElement('#root');

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ isOpen, onConfirm, onCancel }: ConfirmModalProps) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCancel}
        contentLabel="Confirmation Dialog"
      >
        <h2>Are you sure?</h2>
        <button onClick={onConfirm}>OK</button>
        <button onClick={onCancel}>Cancel</button>
        </Modal>
    </div>
  )
}

export default ConfirmModal;
