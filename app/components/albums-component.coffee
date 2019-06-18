`import Ember from 'ember'`
`import layout from '../templates/components/albums-component'`

export default  Ember.Component.extend
  layout: layout
  store: Ember.inject.service()
  isShowingEditArtist: false
  isShowingDeleteArtist: false
  isShowingEditAlbum: false
  isShowingDeleteAlbum: false

  formattedAlbums: Ember.computed 'artist', ->
    @get('artist.albums')


  actions:
    saveArtist: (artist) ->
      self = @
      artist.save().then =>
        console.log('artist update!')
        self.send('toggleEditArtistModal')

    deleteArtist: (artist) ->
      self = @
      artist.destroyRecord().then =>
        console.log('artist deleted!')
        self.send('toggleDeleteArtistModal')

    saveAlbum: (album) ->
      self = @
      album.save().then =>
        console.log('album update!')
        self.send('toggleEditAlbumModal')

    deleteAlbum: (album) ->
      self = @
      album.destroyRecord().then =>
        console.log('album deleted!')
        self.send('toggleDeleteAlbumModal')

    toggleEditArtistModal: ->
      @toggleProperty('isShowingEditArtist')

    toggleDeleteArtistModal: ->
      @toggleProperty('isShowingDeleteArtist')

    toggleEditAlbumModal: ->
      @toggleProperty('isShowingEditAlbum')

    toggleDeleteAlbumModal: ->
      @toggleProperty('isShowingDeleteAlbum')

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
