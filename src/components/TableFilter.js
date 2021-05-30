import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { useTable } from 'react-table';
import useRows from '../hooks/useRows';
import useColumns from '../hooks/useColumns';

const TableFilter = ({ marks }) => {
  const prueba = useRows(marks);
  console.log('lo que viene de useRows:', prueba);
  return (
    <div className="tabla">
      <tr>
        <th>Licence Plate</th>
        <th>Coords.</th>
        <th>Model</th>
      </tr>
      {marks &&
        marks.map(({ licencePlate, model, x, y }) => (
          <tr>
            <td>{licencePlate}</td>
            <td>
              {y}, {x}
            </td>
            <td>{model}</td>
          </tr>
        ))}
    </div>
  );
};

export default TableFilter;
