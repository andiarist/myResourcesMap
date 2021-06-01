import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import T from 'prop-types';

import 'antd/dist/antd.css';
import { Table } from 'antd';

function TableFilter({ marks }) {
  const [filter, setFilter] = useState(0);
  const [pagination, setPagination] = useState(0);
  console.log('marks.length:', marks.length);

  function elegirOrden(datos) {
    let lista = [];
    switch (filter) {
      case 1:
        lista = orderString(datos, 'dsc');
        console.log('lista a devolver despues de case 1:', lista);
        return lista;
      case 4:
        lista = orderString(datos, 'dsc');
        console.log('lista a devolver despues de case 4:', lista);
        return lista;
      case 5:
        lista = orderNumber(datos, 'asc');
        console.log('lista a devolver despues de case 5:', lista);
        return lista;
      case 8:
        lista = orderNumber(datos, 'dsc');
        console.log('lista a devolver despues de case 8:', lista);
        return lista;

      default:
        return (lista = datos);
    }
  }

  function orderNumber(arrayNumeros, option) {
    if (option === 'asc') {
      console.log('dentro de ordenNumber asc');
      return arrayNumeros.sort((a, b) => b.y - a.y);
    }
    if (option === 'dsc') {
      console.log('dentro de ordenNumber desc');
      return arrayNumeros.sort((a, b) => a.y - b.y);
    }
  }

  function orderString(arrayString, option) {
    if (option === 'asc') {
      console.log('dentro de orderString asc');
      return arrayString.sort((a, b) =>
        a.licencePlate
          .toLowerCase()
          .localeCompare(b.licencePlate.toLowerCase()),
      );
    }
    if (option === 'dsc') {
      console.log('dentro de orderString desc');
      return arrayString.sort((a, b) =>
        b.licencePlate
          .toLowerCase()
          .localeCompare(a.licencePlate.toLowerCase()),
      );
    }
  }

  function pintarDiez(datos) {
    let nuevaLista = [];
    let indice = pagination;
    let maxPosition = 10;
    if (datos.length - pagination < 10) {
      console.log('estamos en la ultima pagina');
      maxPosition = datos.length % 10;
    }

    for (let i = 0; i < maxPosition; i++) {
      nuevaLista[i] = datos[indice];
      console.log(`nuevaLista[${i}]: `, nuevaLista[i]);
      console.log(`datos[${indice}]`, datos[indice]);
      indice++;
    }
    return nuevaLista;
  }

  function renderRows(datos) {
    if (!datos || datos.length <= 1) {
      return console.log('no hay datos');
    }

    const listaOrdenada = pintarDiez(elegirOrden(datos));

    return listaOrdenada.map(({ licencePlate, model, x, y, id }) => (
      <tr key={id}>
        <td>{licencePlate}</td>
        <td>{y}</td>
        <td>{x}</td>
        <td>{model}</td>
      </tr>
    ));
  }
  const handlePageClick = e => {
    console.log(e);
    setPagination(e.selected * 10);
  };

  return (
    <>
      <table className="resourcesTable">
        <tr>
          <th onClick={() => setFilter(1)} className="item-ordered">
            Licence Plate
          </th>
          <th onClick={() => setFilter(5)} className="item-ordered">
            Lat
          </th>
          <th onClick={() => setFilter(8)} className="item-ordered">
            Lng
          </th>
          <th onClick={() => setFilter(4)} className="item-ordered">
            Model
          </th>
        </tr>
        {renderRows(marks)}
      </table>
      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={marks.length / 10}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination"
        subContainerClassName="pages pagination"
        activeClassName="active"
        onPageChange={handlePageClick}
      />
    </>
  );
}

TableFilter.propTypes = {
  marks: T.arrayOf(T.object),
};

export default TableFilter;
