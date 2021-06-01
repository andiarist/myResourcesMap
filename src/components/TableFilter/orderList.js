export function orderList(datos, filter, order) {
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
