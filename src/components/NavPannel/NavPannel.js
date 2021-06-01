import React, { useState } from 'react';
import T from 'prop-types';
import 'antd/dist/antd.css';
import { Checkbox } from 'antd';
import './NavPannel.css';

export const getTypes = data => {
  let tipos = [];
  if (data && data.length > 1) {
    data.forEach(dat => {
      tipos.push(dat.resourceType);
    });
  }

  return [...new Set(tipos)];
};
function NavPannel({ marks, onSubmit, ...props }) {
  const [filters, setFilters] = useState([]);

  function onChange(checkedValues) {
    setFilters(checkedValues);
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(filters);
  };

  return (
    <>
      <h3>Resources: </h3>
      <form onSubmit={handleSubmit} className="aside-form">
        <Checkbox.Group options={getTypes(marks)} onChange={onChange} />

        <button type="submit" className="">
          Search
        </button>
      </form>
    </>
  );
}

NavPannel.propTypes = {
  marks: T.arrayOf(T.object).isRequired,
  onSubmit: T.func.isRequired,
};
export default NavPannel;
