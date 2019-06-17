import DS from 'ember-data'

export default DS.Model.extend {
  albums: DS.hasMany('album')

  name: DS.attr()
  photo: DS.attr()
}
