import { useMemo } from 'react';

function useRows({ marks }) {
  const NuevaFila = () => {
    const fila = [];
    if (marks) {
      marks.forEach(mark =>
        fila.push({
          licencePlate: mark.licencePlate,
          lat: mark.y,
          lng: mark.x,
          model: mark.model,
        }),
      );
    }
    return fila;
  };
  NuevaFila();

  const rows = useMemo(() => NuevaFila(), []);

  return rows;
}
export default useRows;
