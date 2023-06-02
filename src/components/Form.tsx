/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, FormEvent, useState } from 'react';
import { generateDateAndTime } from '../utils/dateGenerator';
import { useCitasStore } from '../store/useCitasStore';
import { generateId } from '../utils/idGenerator';
import { FormProps } from '../interfaces/form';

const formInitialState: FormProps = {
  id: '',
  name: '',
  phone: '',
  email: '',
  date: '',
  hour: '',
  comment: '',
  dateCreated: '',
};

const today = new Date().toISOString().split('T')[0];

export const Form = () => {
  const [formData, setFormData] = useState(formInitialState);
  const [error, setError] = useState(false);
  const { addToRegistryList } = useCitasStore();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement & HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
      id: generateId(),
      dateCreated: generateDateAndTime(),
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, ...otherFields } = formData;

    if (Object.values(otherFields).includes('')) {
      setError(true);
      console.log('Todos los campos son requeridos');
      setTimeout(() => {
        setError(false);
      }, 2000);
    } else {
      addToRegistryList(formData);
      setFormData(formInitialState);
    }
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 px-3 md:px-0">
      <h2 className="font-black text-3xl text-center text-slate-800">
        Formulario de registro
      </h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y{' '}
        <span className="font-bold text-indigo-600">administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label
            htmlFor="nombre"
            className="block text-slate-800 uppercase font-bold"
          >
            Nombre completo
          </label>
          <input
            id="nombre"
            type="text"
            placeholder="Carlos López"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="telefono"
            className="block text-slate-800 uppercase font-bold"
          >
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            placeholder="600111222"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="correo"
            className="block text-slate-800 uppercase font-bold"
          >
            Correo electrónico
          </label>
          <input
            id="correo"
            type="email"
            placeholder="ejemplo@gmail.com"
            className="border-2 w-full p-2 mt-2 rounded-lg"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3 flex gap-2">
          <div className="w-1/2">
            <label
              htmlFor="fecha"
              className="block text-slate-800 uppercase font-bold"
            >
              Día de cita
            </label>
            <input
              id="fecha"
              type="date"
              className="border-2 w-full p-2 mt-2 rounded-lg"
              min={today}
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="hora"
              className="block text-slate-800 uppercase font-bold"
            >
              Hora
            </label>
            <input
              id="hora"
              type="time"
              placeholder="ejemplo@gmail.com"
              className="border-2 w-full p-2 mt-2 rounded-lg"
              name="hour"
              value={formData.hour}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mb-3">
          <label
            htmlFor="comentario"
            className="block text-slate-800 uppercase font-bold"
          >
            Comentarios
          </label>
          <textarea
            id="comentario"
            placeholder="Escribe un comentario..."
            className="border-2 w-full p-2 mt-2 rounded-lg"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
          />
        </div>

        {error && (
          <div className="mb-3 bg-red-200 py-3 rounded-lg transition-all">
            <span className="block text-red-900 uppercase font-bold text-center text-xs">
              Todos los campos son obligatorios
            </span>
          </div>
        )}

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all rounded-lg"
          value="Registrar cita"
        />
      </form>
    </div>
  );
};
