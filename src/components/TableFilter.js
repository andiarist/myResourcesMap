import React, { useState, useEffect } from 'react';
import T from 'prop-types';

import 'antd/dist/antd.css';
import { Table } from 'antd';

function TableFilter({ marks }) {
  const ResourcesRows = () => {
    let fila = [];
    let indexTable = 1;
    if (marks && marks.length > 1) {
      marks.forEach(mark =>
        fila.push({
          key: indexTable++,
          licencePlate: mark.licencePlate,
          lat: mark.y,
          lng: mark.x,
          model: mark.model,
        }),
      );
    }
    return fila;
  };
  // const [dataRows, setDataRows] = useState();
  // console.log('dataRows:', dataRows);
  //
  // useEffect(() => {
  //   setDataRows(ResourcesRows());
  // }, []);

  let data = ResourcesRows();
  console.log('data:', data);
  // const [filas, setFilas] = useState([]);

  const pintarFilas = datos => {
    if (!datos && datos.length <= 1) {
      return console.log('no hay datos');
    }
    return datos.map(({ licencePlate, model, lat, lng, key }) => (
      <tr key={key}>
        <td>{key}</td>
        <td>{licencePlate}</td>
        <td>{lat}</td>
        <td>{lng}</td>
        <td>{model}</td>
      </tr>
    ));
  };

  // const renderFilas = () => {
  //   let data = ResourcesRows();
  //   console.log('data:', data);
  //   setFilas(data);
  //   return filas.map(({ licencePlate, model, lat, lng, key }) => (
  //     <tr key={key}>
  //       <td>{key}</td>
  //       <td>{licencePlate}</td>
  //       <td>{lat}</td>
  //       <td>{lng}</td>
  //       <td>{model}</td>
  //     </tr>
  //   ));
  // };

  function handleOrderNumber(ev) {
    console.log('evento:', ev);
    const newData = data.sort(function (a, b) {
      return b.key - a.key;
    });
    console.log('data despues de ordenar:', newData);
    // setFilas(newData);
  }
  function handleOrderString(ev) {
    console.log('evento:', ev);
  }

  const renderHeader = () => {
    return (
      <tr>
        <th onClick={handleOrderNumber} className="item-ordered">
          Indice
        </th>
        <th onClick={handleOrderString} className="item-ordered">
          Licence Plate
        </th>
        <th onClick={handleOrderNumber} className="item-ordered">
          Lat
        </th>
        <th onClick={handleOrderNumber} className="item-ordered">
          Lng
        </th>
        <th onClick={handleOrderString} className="item-ordered">
          Model
        </th>
      </tr>
    );
  };

  return (
    <table>
      {renderHeader()}
      {pintarFilas(data)}
    </table>
  );
}

TableFilter.propTypes = {
  marks: T.arrayOf(T.object),
};

export default TableFilter;
