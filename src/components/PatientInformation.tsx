import { useState } from 'react';
import { FormProps } from '../interfaces/form';
import { DeleteInfoModal } from './DeleteInfoModal';

interface Props {
  patient: FormProps;
}

export const PatientInformation = ({ patient }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="m-3 bg-white shadow-md px-5 pt-10 pb-4 rounded-md">
        <p className="font-bold mb-3 text-slate-800 uppercase">
          Nombre:{' '}
          <span className="font-normal normal-case">{patient.name}</span>
        </p>
        <p className="font-bold mb-3 text-slate-800 uppercase">
          Teléfono:{' '}
          <span className="font-normal normal-case">{patient.phone}</span>
        </p>
        <p className="font-bold mb-3 text-slate-800 uppercase">
          Correo electrónico:{' '}
          <span className="font-normal normal-case">{patient.email}</span>
        </p>
        <p className="font-bold mb-3 text-slate-800 uppercase">
          Día de cita:{' '}
          <span className="font-normal normal-case">{patient.date}</span>
        </p>
        <p className="font-bold mb-3 text-slate-800 uppercase">
          Hora de cita:{' '}
          <span className="font-normal normal-case">{patient.hour}</span>
        </p>
        <p className="font-bold mb-3 text-slate-800 uppercase">
          Comentarios:{' '}
          <span className="font-normal normal-case">{patient.comment}</span>
        </p>

        <div className="flex justify-between items-end">
          <p className="font-bold text-indigo-600 uppercase text-sm">
            Fecha creada:
            <span className="font-normal normal-case pl-1">
              {patient.dateCreated}
            </span>
          </p>
          <button
            className="py-2 px-10 bg-red-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md"
            onClick={handleOpenModal}
          >
            Eliminar
          </button>
        </div>
      </div>
      {showModal && (
        <DeleteInfoModal
          isOpen={showModal}
          id={patient.id}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
};
