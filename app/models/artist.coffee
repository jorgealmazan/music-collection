import DS from 'ember-data'

export default DS.Model.extend {
  albums: DS.hasMany('albums')

  name: DS.attr()
  photo: DS.attr()
}
