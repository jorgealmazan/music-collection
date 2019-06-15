export default function() {
  this.namespace = '/api';
  this.timing = 400;

// GET ALL
  this.get('/artists');
  this.get('/artists/:id/albums');

// CREATE
  this.post('/artists');
  this.post('/artists/:id/albums');

// UPDATE
  this.put('/artists/:id');
  this.put('/artists/:id/albums/:id');

// DELETE
  this.del('/artists/:id');
  this.del('/artists/:id/albums/:id');
}
