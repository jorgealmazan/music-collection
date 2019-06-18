`import Ember from 'ember'`
`import layout from '../templates/components/albums-component'`

export default  Ember.Component.extend
  layout: layout
  store: Ember.inject.service()
  isShowingEdit: false
  isShowingDelete: false

  formattedAlbums: Ember.computed 'artist', ->
    @get('artist.albums')


  actions:
    saveArtist: (artist) ->
      self = @
      artist.save().then =>
        console.log('update complete!')
        self.send('toggleEditModal')

    deleteArtist: (artist) ->
      self = @
      artist.destroyRecord().then =>
        console.log('artist deleted!')
        self.send('toggleDeleteModal')

    toggleEditModal: ->
      @toggleProperty('isShowingEdit')

    toggleDeleteModal: ->
      @toggleProperty('isShowingDelete')

    addAlbum: (artist) ->
      album = @get('store').createRecord 'album',
        name: 'Add Name'
        year: 'Add Year'
        cover: 'empty'
        spotify: 'Add Spotify link)'
        artist: artist

      album.save().then =>
          console.log('album saved')
        , ->
          album.rollbackAttributes()

    deleteAlbum: (album) ->
      @get('store').findRecord(album).then (item)->
        item.destroyRecord()
        console.log('album deleted!')
