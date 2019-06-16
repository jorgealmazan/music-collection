import DS from 'ember-data'

export default DS.Model.extend {
  name: DS.attr()
  year: DS.attr()
  cover: DS.attr()
  spotify: DS.attr()
  artist: DS.belongsTo('artist')
}
