import React    from 'react';
import ReactDOM from 'react-dom';
import Enzyme, {shallow, configure } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import DefaultList from '~/List/DefaultList';

// Setup enzyme's react adapter
Enzyme.configure({ adapter: new EnzymeAdapter() });


describe('<DefaultList />', () => {
    it('renders without crashing', () => {
        // const div = document.createElement('div');
        // ReactDOM.render(<List />, div);
    });
});
