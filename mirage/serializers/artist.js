import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  links(artist) {
    return {
      albums: {
        related: `/artists/${artist.id}/albums`
      }
    };
  }
});
