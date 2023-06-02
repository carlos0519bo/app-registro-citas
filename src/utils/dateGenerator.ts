
export const generateDateAndTime = () => {
  const fechaHoraActual = new Date();
  const opcionesFecha: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const opcionesHora: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const fechaActual = fechaHoraActual.toLocaleDateString(
    'es-ES',
    opcionesFecha
  );
  const horaActual = fechaHoraActual.toLocaleTimeString('es-ES', opcionesHora);

  return `${fechaActual} ${horaActual}`;
};
