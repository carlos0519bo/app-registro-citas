import { PatientInformation } from '.';
import { useCitasStore } from '../store/useCitasStore';

export const PatientList = () => {
  const { patientList } = useCitasStore();

  const reverseList = patientList.reverse();

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-x-scroll">
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>

      {reverseList.length === 0 ? (
        <p className="text-lg mt-5 text-center mb-10">
          No hay registros. Empieza a registar a tus clientes
        </p>
      ) : (
        <p className="text-lg mt-5 text-center mb-10">
          Administra tus pacientes y{' '}
          <span className="font-bold text-indigo-600">citas</span>
        </p>
      )}
      {reverseList.map((patient) => (
        <PatientInformation key={patient.id} patient={patient} />
      ))}
    </div>
  );
};
