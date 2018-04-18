import DS from 'ember-data'

export default DS.Model.extend({
  content: DS.attr('string'),
  date: DS.attr('string'),
  user: DS.belongsTo('user')
})
