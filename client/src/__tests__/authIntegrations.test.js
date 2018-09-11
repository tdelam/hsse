import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from '../Root';
import App from '../components/App';

beforeEach(() => {
/*    
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1'}, { name: 'Fetched #2'}]
    });
*/
});

afterEach(() => {
/*
    moxios.uninstall();
*/
});
/*
it('can fetch ajax request and list', (done) => {

    const wrapper = mount (
        <Root> 
            <App />
        </Root>
    );

    wrapper.find('h2').simulate('click');

    moxios.wait(() => {
        wrapper.update();

        expect(wrapper.find('h2').length).toEqual(1);

        done();

        wrapper.unmount();

    });

});
*/

it('shows does integration test', () => {
    /*    
        expect(wrapper.find(Landing).length).toEqual(1);
    */
});