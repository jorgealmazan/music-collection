export default function() {
  this.namespace = '/api';
  this.timing = 400;

// GET ALL
  this.get('/artists');
  this.get('/artists/:id/');
  this.get('/albums');
  this.get('/albums/:id');

// CREATE
  this.post('/artists');
  this.post('/albums');

// UPDATE
  this.patch('/artists/:id');
  this.patch('/albums/:id');

// DELETE
  this.del('/artists/:id');
  this.del('/albums/:id');
}
