`import Ember from 'ember'`
`import layout from '../templates/components/artists-component'`

export default  Ember.Component.extend
  layout: layout
  store: Ember.inject.service()

  formattedArtists: Ember.computed 'artists', ->
    @get('artists')

  actions:
    addArtist: ->
      artist = @get('store').createRecord 'artist',
        name: '(New Artist)'
        photo: 'empty'

      artist.save().then =>
        console.log('artist saved')
      , ->
        artist.rollbackAttributes()

    getArtist: (artist) ->
      console.log( artist.name + ' Details')
