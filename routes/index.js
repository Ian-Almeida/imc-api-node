var express = require('express');
var router = express.Router();

const calculaIMC = (altura, peso) => {
  return (peso/(altura**2))
}

const calculaDescriçãoIMC = (imc) => {
  if(imc < 18.5) return "Magreza";
  if(imc < 24.9) return "Normal";
  if(imc < 30) return "Sobrepeso";
  return "Obesidade";
}
/* GET index page. */
router.get("/", (req, res) => {
  res.send(JSON.stringify({message: "Hello World!"}));
})

/* POST home page. */
router.post('/imc/calcular', function(req, res, next) {
  const { altura, peso } = req.body;
  const imc = calculaIMC(altura, peso);
  const descricao = calculaDescriçãoIMC(imc);

  const resp = {altura, peso, imc, descricao};
  res.send(JSON.stringify(resp));
});

module.exports = router;
