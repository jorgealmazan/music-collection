import DS from 'ember-data'

export default DS.Model.extend {
  name: DS.attr()
  photo: DS.attr()
  albums: DS.hasMany('albums')
}
