let numero1 = 1,
  numero2 = 2,
  resultado;

resultado = numero1 + numero2;
console.log(resultado);
document.write(resultado + ", ");

for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) {
    document.write("FIZZ, ");
  } else {
    document.write(" BUZZ, ");
  }
}
