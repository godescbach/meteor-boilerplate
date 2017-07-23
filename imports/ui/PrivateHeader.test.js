import { Meteor } from 'meteor/meteor';
import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';

import PrivateHeader from './PrivateHeader';

if (Meteor.isClient) {
  describe('PrivateHeader', function() {
    it('should set button text to logout', function() {
      const wrapper = mount( <PrivateHeader title="Test title"/> );
      const buttonText = wrapper.find('button').text();

      expect(buttonText).toBe('Logout');
    });

    it('should use title prop as h1 text', function() {
      const title = 'Test title here';
      const wrapper = mount( <PrivateHeader title={title}/> );
      const titleText = wrapper.find('h1').text();

      expect(titleText).toBe(title);
    });
    

  });
}