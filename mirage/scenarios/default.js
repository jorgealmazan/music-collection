export default function(server) {
  server.create('artist', {name: "blink-182", photo: 'https://i.imgur.com/9wDJud9.jpg'});
  server.create('artist', {name: "Coheed and Cambria", photo: 'https://i.imgur.com/OHlN2hZ.jpg'});
  server.create('artist', {name: "Green Day", photo: 'https://i.imgur.com/9swp0dZ.jpeg'});
  server.create('artist', {name: "NOFX", photo: 'https://i.imgur.com/KcSAvGk.jpg'});
  server.create('artist', {name: "Pixies", photo: 'https://i.imgur.com/zJ7EWNy.jpg'});
  server.create('artist', {name: "Ramones", photo: 'https://i.imgur.com/MItPu0s.jpg'});
  server.create('artist', {name: "Weezer", photo: 'https://i.imgur.com/ufXWMz0.jpg'});

  server.create('album', {name: "Enema of the State", year: 1999, cover: 'https://i.imgur.com/AGGixLT.jpeg', spotify: 'https://open.spotify.com/album/652N05EcNH1a4bIlUixQE2?autoplay=true&v=L', artistId: 1});
  server.create('album', {name: "blink-182", year: 2003, cover: 'https://i.imgur.com/1Hytwjk.jpg', spotify: 'https://open.spotify.com/album/4hBTxv4QRPePXCFcEI7Vjp', artistId: 1});
  server.create('album', {name: "The Aftermath: Ascension", year: 2013, cover: 'https://i.imgur.com/KwnOVU6.jpg', spotify: 'https://open.spotify.com/album/3rBbrfOZ0kiBWsMlHmhHcY', artistId: 2});
  server.create('album', {name: "The Aftermath: Descension", year: 2013, cover: 'https://i.imgur.com/zxwJgTl.jpg', spotify: 'https://open.spotify.com/album/3D2JUzaO9CHgYYehc70CL4', artistId: 2});
  server.create('album', {name: "American Idiot", year: 2004, cover: 'https://i.imgur.com/SJUxf7s.jpg', spotify: 'https://open.spotify.com/album/5dN7F9DV0Qg1XRdIgW8rke?autoplay=true&v=L', artistId: 3});
  server.create('album', {name: "Punk in Drublic", year: 1994, cover: 'https://i.imgur.com/DjS6OUu.jpg', spotify: 'https://open.spotify.com/album/6Z8BYH27wINoUk4QMUx7gh?autoplay=true&v=L', artistId: 4});
  server.create('album', {name: "Surfer Rosa", year: 1988, cover: 'https://i.imgur.com/6yCR3OW.jpg', spotify: 'https://open.spotify.com/album/2l7RPWC3E6eStJJLBsUeCI?autoplay=true&v=L', artistId: 5});
  server.create('album', {name: "Doolittle", year: 1989, cover: 'https://i.imgur.com/z1dwN7M.jpg', spotify: 'https://open.spotify.com/album/6ymZBbRSmzAvoSGmwAFoxm?autoplay=true&v=L', artistId: 5});
  server.create('album', {name: "¡Adios Amigos!", year: 1995, cover: 'https://i.imgur.com/VSxwwGD.jpg', spotify: 'https://open.spotify.com/album/5IhnXiHgiPfsuxbrrWsPUB?autoplay=true&v=L', artistId: 6});
  server.create('album', {name: "Pinkerton", year: 1996, cover: 'https://i.imgur.com/uGSMB4v.jpg', spotify: 'https://open.spotify.com/album/3jWhmYMAWw5NvHTTeiQtfl?autoplay=true&v=L', artistId: 7});
  server.create('album', {name: "Teal Album", year: 2019, cover: 'https://i.imgur.com/NybbD99.png', spotify: 'https://open.spotify.com/album/65sHj9PvsbyD0uugGHjueN?autoplay=true&v=L', artistId: 7});
}
