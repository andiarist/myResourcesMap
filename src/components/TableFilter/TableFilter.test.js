import React from 'react';
import 'jest-extended';
import { selectPages } from './TableFilter';
import { orderList } from './orderList';

describe('Testing TableFilter', () => {
  const data = [];
  test('selectPages() should return an array', () => {
    expect(selectPages(data)).toBeArray();
  });

  test('selectPages() should return an array with length <= 10', () => {
    expect(selectPages(data).length <= 10).toBe(true);
  });

  test('orderList() should return an array', () => {
    expect(orderList(data)).toBeArray();
  });
});
