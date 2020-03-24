import React from 'react';
import { shallow } from 'enzyme';
import NotFound  from './404.jsx';

describe('Not Found', () => {
  it('should not have regressed', () => {
    const component = shallow(<NotFound />);

    expect(component).toMatchSnapshot();
  });
});
