`import Ember from 'ember'`
`import layout from '../templates/components/albums-component'`

export default  Ember.Component.extend
  layout: layout
  store: Ember.inject.service()

  formattedAlbums: Ember.computed 'artist', ->
    @get('artist.albums')


  actions:
    addAlbum: (artist) ->
      album = @get('store').createRecord 'album',
        name: '(New Album)'
        year: ''
        cover: ''
        spotify: ''

        album.save().then =>
          console.log('album saved')
        , ->
          album.rollbackAttributes()
