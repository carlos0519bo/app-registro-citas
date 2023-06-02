import { useCitasStore } from '../store/useCitasStore';

interface Props {
  isOpen: boolean;
  id: string;
  handleCloseModal: () => void;
}

export const DeleteInfoModal = ({ isOpen, id, handleCloseModal }: Props) => {
  const { removeFromRegistryList } = useCitasStore();

  const handleAccept = () => {
    removeFromRegistryList(id);
    handleCloseModal();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? 'visible' : 'hidden'
      }`}
    >
      <div className="bg-white rounded-lg p-6 shadow-2xl">
        <h2 className="text-xl font-bold mb-4">Confirmar eliminación</h2>
        <p className="mb-4">¿Estás seguro de que deseas eliminar la cita?</p>
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            onClick={handleAccept}
          >
            Aceptar
          </button>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
            onClick={handleCloseModal}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};
