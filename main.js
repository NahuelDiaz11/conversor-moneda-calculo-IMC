const selectPesos = document.getElementById("selectPesos");
const selectDolares = document.getElementById("selectDolares");
const selctEuros = document.getElementById("selctEuros");
const selectReales = document.getElementById("selectReales");

const inputPeso = document.getElementById("inputPeso");
const inputDolar = document.getElementById("inputDolar");
const inputEuro = document.getElementById("inputEuro");
const inputReal = document.getElementById("inputReal");

const btnPeso = document.getElementById('btnPeso');
const btnDolar = document.getElementById('btnDolar');
const btnEuro = document.getElementById('btnEuro');
const btnReal = document.getElementById('btnReal');


btnPeso.addEventListener('click', calcularValorPeso);
// btnDolar.addEventListener('click', calcularValorDolar);
// btnEuro.addEventListener('click', calcularValorEuro);
// btnReal.addEventListener('click', calcularValorReal);



function calcularValorPeso() {
    
    const selectMoneda = selectPesos.value;
    const monto = parseFloat(inputPeso.value);
    if (selectMoneda == "1") {
        console.log("Ingreso correcto")
        const montoConvertido = monto * 493;
        alert(montoConvertido)
    }


}