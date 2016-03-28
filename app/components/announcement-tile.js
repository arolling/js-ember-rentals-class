import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(announcement) {
      if (confirm('Would you like to delete this announcement?')) {
        this.sendAction('destroyAnnouncement', announcement);
      }
    }
  }
});
