export default function() {
  this.get('/items',function(){
    return{
      data:[
        {
          id: 1,
          name: 'Urban Living',
          foundby: 'Mike TV',
          city: 'Seattle',
          type: 'passport',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        },
        {
          id: 2,
          name: 'NKongho serafine',
          foundby: 'Carlos j',
          city: 'Seattle',
          type: 'passport',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        },
        {
          id: 3,
          name: 'NKongho serafine',
          foundby: 'Carlos j',
          city: 'Seattle',
          type: 'passport',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      ]
    }
  })


    this.get('/tems');
    this.post('/items');
    this.get('/items/:id');
    this.put('/items/:id');
    this.del('/items/:id');
}
