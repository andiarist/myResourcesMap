import React, { useState } from 'react';
import T from 'prop-types';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import './NavPannel.css';

function NavPannel({ marks, onSubmit, ...props }) {
  const [filters, setFilters] = useState();

  const getTypes = datos => {
    let tipos = [];
    if (datos && datos.length > 1) {
      datos.forEach(dato => {
        tipos.push(dato.resourceType);
      });
    }
    tipos.push('bus');
    tipos.push('bus');
    tipos.push('bus');
    tipos.push('coche');
    tipos.push('coche');
    tipos.push('coche');
    tipos.push('bici');

    return [...new Set(tipos)];
  };

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
    setFilters(checkedValues);
  }

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(filters);
  };

  return (
    <>
      <h3>Resources: </h3>
      <form onSubmit={handleSubmit} className="aside-form">
        <Checkbox.Group options={getTypes(marks)} onChange={onChange} />

        <button type="submit" className="">
          Filtrar
        </button>
      </form>
    </>
  );
}

NavPannel.propTypes = {
  marks: T.arrayOf(T.object),
  onSubmit: T.func.isRequired,
};

export default NavPannel;
