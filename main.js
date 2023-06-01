let dolarHoy, euroHoy, realHoy;

function guardarValores() {
  dolarHoy = parseFloat(document.getElementById("valorDolar").value);
  euroHoy = parseFloat(document.getElementById("valorEuro").value);
  realHoy = parseFloat(document.getElementById("valorReal").value);
}

function calcularValorPeso() {
  const selectMoneda = document.getElementById("selectPesos").value;
  const monto = parseFloat(document.getElementById("inputPeso").value);
  let montoConvertido;

  switch (selectMoneda) {
    case "1":
      montoConvertido = monto / dolarHoy;
      alert(`Valor convertido: ${montoConvertido}`);
      break;
    case "2":
      montoConvertido = monto / euroHoy;
      alert(`Valor convertido: ${montoConvertido}`);
      break;
    case "3":
      montoConvertido = monto / realHoy;
      alert(`Valor convertido: ${montoConvertido}`);
      break;
  }
}

function calcularValorDolar() {
    const selectMoneda = document.getElementById("selectDolares").value;
    const monto = parseFloat(document.getElementById("inputDolar").value);
    let montoConvertidoDolar;
  
    switch (selectMoneda) {
      case "1":
        montoConvertidoDolar = monto * dolarHoy;
        alert(`Valor convertido: ${montoConvertidoDolar}`);
        break;
      case "2":
        montoConvertidoDolar = monto * (euroHoy / dolarHoy);
        alert(`Valor convertido: ${montoConvertidoDolar}`);
        break;
      case "3":
        montoConvertidoDolar = monto *  (realHoy / dolarHoy);
        alert(`Valor convertido: ${montoConvertidoDolar}`);
        break;
    }
  }

function calcularValorEuro() {
  const selectMoneda = document.getElementById("selectEuros").value;
  const monto = parseFloat(document.getElementById("inputEuro").value);
  let montoConvertido;

  switch (selectMoneda) {
    case "1":
      montoConvertido = monto * (dolarHoy / euroHoy);
      alert(`Valor convertido: ${montoConvertido}`);
      break;
    case "2":
      montoConvertido = monto * euroHoy;
      alert(`Valor convertido: ${montoConvertido}`);
      break;
    case "3":
      montoConvertido = monto * (realHoy / euroHoy);
      alert(`Valor convertido: ${montoConvertido}`);
      break;
  }
}

function calcularValorReal() {
  const selectMoneda = document.getElementById("selectReales").value;
  const monto = parseFloat(document.getElementById("inputReal").value);
  let montoConvertido;

  switch (selectMoneda) {
    case "1":
      montoConvertido = monto * (dolarHoy / realHoy);
      alert(`Valor convertido: ${montoConvertido}`);
      break;
    case "2":
      montoConvertido = monto * (euroHoy / realHoy);
      alert(`Valor convertido: ${montoConvertido}`);
      break;
    case "3":
      montoConvertido = monto * realHoy;
      alert(`Valor convertido: ${montoConvertido}`);
      break;
  }
}