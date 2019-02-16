import React    from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import List from '~/List/List';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });

describe("<List /> component shallow only methods ", () => {
  it("renders without crashing", () => {

    const wrapper = shallow(<List />);
    // expect(wrapper).toBe(true)
      // ReactDOM.render(<List />, div);
  });
});
