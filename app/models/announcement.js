import DS from 'ember-data';

export default DS.Model.extend({
  topic: DS.attr(),
  description: DS.attr() 
});
