import React from 'react';
import 'jest-extended';
import { shallow } from 'enzyme';
import NavPannel, { getTypes } from './NavPannel';

describe('Testing <NavPannel /> component', () => {
  const onSubmit = jest.fn();
  const marks = [];
  const wrapper = shallow(<NavPannel onSubmit={onSubmit} marks={marks} />);

  test('Testing submit', () => {
    wrapper.find('form').simulate('submit', { preventDefault() {} });

    expect(onSubmit).toHaveBeenCalled();
    expect(onSubmit).toHaveBeenCalledWith(expect.any(Array));
  });

  test('getTypes() should return an array', () => {
    const data = [];

    const listTypes = getTypes(data);

    expect(listTypes).toBeArray();
  });
});
