import React from 'react';
import T from 'prop-types';

import 'antd/dist/antd.css';
import { Table } from 'antd';

function TableFilter({ marks }) {
  const columns = [
    {
      title: 'Licence Plate',
      dataIndex: 'licencePlate',
      key: 'licencePlate',
      sorter: (a, b) => a.licencePlate - b.licencePlate,
    },
    {
      title: 'Lat',
      dataIndex: 'lat',
      key: 'lat',
      sorter: (a, b) => a.lat - b.lat,
    },
    {
      title: 'Lng',
      dataIndex: 'lng',
      key: 'lng',
      sorter: (a, b) => a.lng - b.lng,
    },
    {
      title: 'Model',
      dataIndex: 'model',
      key: 'model',
      sorter: (a, b) => a.model - b.model,
    },
  ];

  const ResourcesRows = () => {
    let fila = [];
    let indexTable = 0;
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
  const data = ResourcesRows();

  function onChange(pagination, filters, sorter, extra) {
    console.log();
  }

  return <Table columns={columns} dataSource={data} onChange={onChange} />;
}

TableFilter.propTypes = {
  marks: T.arrayOf(T.object),
};

export default TableFilter;