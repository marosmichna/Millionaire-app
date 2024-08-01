import Modal from 'react-modal';
import Nikodim from "../../assets/nikodym1.jpg";
import { Tooltip } from 'react-tooltip';

Modal.setAppElement('#root');

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal = ({ isOpen, onConfirm, onCancel }: ConfirmModalProps) => {
  const customStyles: Modal.Styles = {
    content: {
      width: '50%',
      height: '50%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
      borderRadius: '10px',
      background: 'gray',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    }
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onCancel}
        contentLabel="Confirmation Dialog"
        style={customStyles}
      >
        <img
           src={Nikodim} 
           alt="Nikodym" 
           className='w-[150px] mb-5'
        />
        <h2 className='text-white font-bold'>Si si istý? Nechceš použiť žólika?</h2>
        <button 
          onClick={onConfirm}
          className='bg-slate-200 px-5 py-3 my-2 rounded-2xl hover:bg-white'
        >
          Áno som si istý označne vybranú možnosť
        </button>
        <button 
          onClick={onCancel}
          className='bg-red-400 px-5 py-3 my-2 rounded-2xl hover:bg-red-200'
        >
          Nie som si istý chcem sa vrátiť k odpovedi
        </button>
        <p className="my-anchor-element cursor-pointer">Použiť žólika</p>
        <Tooltip anchorSelect=".my-anchor-element" place="top">
          Momentálne nie je k dispozícii
        </Tooltip>
        </Modal>
    </div>
  )
}

export default ConfirmModal;
