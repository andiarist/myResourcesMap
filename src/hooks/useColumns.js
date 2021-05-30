import { useMemo } from 'react';

function useColumns() {
  const columns = useMemo(
    () => [
      {
        Header: 'Licence Plate',
        accessor: 'licencePlate',
      },
      {
        Header: 'Lat',
        accessor: 'lat',
      },
      {
        Header: 'Lng',
        accessor: 'lng',
      },
      {
        Header: 'Model',
        accessor: 'model',
      },
    ],
    [],
  );

  return columns;
}
export default useColumns;
