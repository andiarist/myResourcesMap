import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import T from 'prop-types';
import ascArrow from '../assets/asc.png';
import dscArrow from '../assets/dsc.png';

import './TableFilter.css';

function TableFilter({ marks }) {
  const [filter, setFilter] = useState('none');
  const [order, setOrder] = useState('asc');
  const [pagination, setPagination] = useState(0);

  function orderList(datos) {
    let lista = [];

    if (filter === 'licencePlate') {
      if (order === 'asc') {
        lista = datos.sort((a, b) =>
          a.licencePlate
            .toLowerCase()
            .localeCompare(b.licencePlate.toLowerCase()),
        );
      } else {
        lista = datos.sort((a, b) =>
          b.licencePlate
            .toLowerCase()
            .localeCompare(a.licencePlate.toLowerCase()),
        );
      }
    } else if (filter === 'y') {
      if (order === 'asc') {
        lista = datos.sort((a, b) => b.y - a.y);
      } else {
        lista = datos.sort((a, b) => a.y - b.y);
      }
    } else if (filter === 'x') {
      if (order === 'asc') {
        lista = datos.sort((a, b) => b.x - a.x);
      } else {
        lista = datos.sort((a, b) => a.x - b.x);
      }
    } else if (filter === 'model') {
      if (order === 'asc') {
        lista = datos.sort((a, b) =>
          a.model.toLowerCase().localeCompare(b.model.toLowerCase()),
        );
      } else {
        lista = datos.sort((a, b) =>
          b.model.toLowerCase().localeCompare(a.model.toLowerCase()),
        );
      }
    } else {
      lista = datos;
    }

    return lista;
  }

  function selectPages(data) {
    let newList = [];
    let index = pagination;
    let maxPosition = 10;
    if (data.length - pagination < 10) {
      console.log('estamos en la ultima pagina');
      maxPosition = data.length % 10;
    }

    for (let i = 0; i < maxPosition; i++) {
      newList[i] = data[index];
      index++;
    }
    return newList;
  }

  function renderRows(data) {
    if (!data || data.length <= 1) {
      return console.log('no data');
    }

    const listForPrint = selectPages(orderList(data));
    console.log(
      `marks.length= ${marks.length}, ordenado por la columna: ${filter}, en orden: ${order}`,
    );

    return listForPrint.map(({ licencePlate, model, x, y, id }) => (
      <tr key={id}>
        <td>{licencePlate}</td>
        <td>{y}</td>
        <td>{x}</td>
        <td>{model}</td>
      </tr>
    ));
  }

  function renderHeader() {
    return (
      <tr>
        <th className="item-ordered">
          <img
            src={ascArrow}
            className="arrow arrow-asc"
            onClick={() => {
              setFilter('licencePlate');
              setOrder('asc');
            }}
            alt="order Licence Plate asc"
          />
          <span>Licence Plate</span>
          <img
            src={dscArrow}
            className="arrow arrow-dsc"
            onClick={() => {
              setFilter('licencePlate');
              setOrder('dsc');
            }}
            alt="order Licence Plate desc"
          />
        </th>
        <th className="item-ordered">
          <img
            src={ascArrow}
            className="arrow arrow-asc"
            onClick={() => {
              setFilter('y');
              setOrder('asc');
            }}
            alt="order Lat asc"
          />
          Lat
          <img
            src={dscArrow}
            className="arrow arrow-dsc"
            onClick={() => {
              setFilter('y');
              setOrder('dsc');
            }}
            alt="order Lat desc"
          />
        </th>
        <th className="item-ordered">
          <img
            src={ascArrow}
            className="arrow arrow-asc"
            onClick={() => {
              setFilter('x');
              setOrder('asc');
            }}
            alt="order Lng asc"
          />
          Lng
          <img
            src={dscArrow}
            className="arrow arrow-dsc"
            onClick={() => {
              setFilter('x');
              setOrder('dsc');
            }}
            alt="order Lng desc"
          />
        </th>
        <th className="item-ordered">
          <img
            src={ascArrow}
            className="arrow arrow-asc"
            onClick={() => {
              setFilter('model');
              setOrder('asc');
            }}
            alt="order models asc"
          />
          Model
          <img
            src={dscArrow}
            className="arrow arrow-dsc"
            onClick={() => {
              setFilter('model');
              setOrder('dsc');
            }}
            alt="order models desc"
          />
        </th>
      </tr>
    );
  }

  const handlePageClick = e => {
    console.log(e);
    setPagination(e.selected * 10);
  };

  return (
    <>
      <table className="resourcesTable" cellSpacing={0}>
        {renderHeader()}
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
