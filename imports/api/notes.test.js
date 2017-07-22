import {Meteor} from 'meteor/meteor';
import expect from 'expect';
import { Notes } from './notes.js';

if (Meteor.isServer) {
  describe('notes', function() {

    it('should insert new note', function () {
      const userId = 'testid';
      const _id = Meteor.server.method_handlers['notes.insert'].apply({ userId });

      expect(Notes.findOne({ _id, userId })).toExist();
    });

    it('should not insert note if not authenticated', function () {

      expect(() => {
        const userId = 'testid';
        const _id = Meteor.server.method_handlers['notes.insert'].apply({});
        // Notes.findOne({ _id, userId });
      }).toThrow();
    });


  });
}