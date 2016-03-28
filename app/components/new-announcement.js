import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnnouncement: false,
  actions: {
    announcementFormShow() {
      this.set('addNewAnnouncement', true);
    },

    save1() {
      var params = {
        topic: this.get('topic'),
        description: this.get('description'),
      };
      this.set('addNewAnnouncement', false);
      this.sendAction('save2', params);
    }
  }
});
