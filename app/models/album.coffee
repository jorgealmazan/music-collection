import DS from 'ember-data'

export default DS.Model.extend {
  artist: DS.belongsTo('artist')

  name: DS.attr()
  year: DS.attr()
  cover: DS.attr()
  spotify: DS.attr()
}
