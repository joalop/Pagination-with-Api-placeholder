var express = require('express');
var axios = require('axios')

var router = express.Router();
let token = 0
/* GET home page. */
router.get('/', async function(req, res, next) {

  let api = await axios.get('https://jsonplaceholder.typicode.com/posts/');
  let resultados = api.data
  let array = []
  let partes = []


  for(let i=0; i < resultados.length; i++){
    //console.log(i)
    if((i+1)%5 == 0){
      partes.push(i)
      array.push(partes)
      partes = []
      //console.log(i,'Si')
    }else{
      //console.log(i,'No')
      partes.push(i)
    }
  } 
  //console.log(resultados)
  
  console.log('Array Long: ',array.length)
  // console.log(partes)

  res.render('index', { title: 'Paginación',resultados, array, token});

});

router.post('/', (req, res, next) => {
  //console.log(req.body)
  const {siguiente, atras} = req.body
  //console.log(siguiente, ' :Siguiente')
  //console.log(atras,' :Atras')

  if(siguiente != undefined){
    token += 1
    res.redirect('/')
  }

  if(atras != undefined){
    token -= 1
    res.redirect('/')
  }
})

module.exports = router;
