// Sesiones	Porcentaje	Sesiones	Porcentaje
// Sesión 1:	+0,3%	Sesión 8:	+0,6%
// Sesión 2:	+1,4%	Sesión 9:	-0,2%
// Sesión 3:	+0,9%	Sesión 10:	+4,3%
// Sesión 4:	-0,3%	Sesión 11:	+1,2%
// Sesión 5:	-0,5%	Sesión 12:	-0,6%
// Sesión 6:	+2,3%	Sesión 13:	-0,4%
// Sesión 7:	+1,2%	Sesión 14:	+1,0%
// El incremento medio de las 9 sesiones de subida es de un 1,47%,
// El descenso medio de las 5 sesiones en negativo es de un 0,4%.
// Por lo tanto, aplicando la fórmula… RSI-14= 100 – (100/(1+(1,47/0,4))) = 78,61
import { Indicator } from './indicator';

var items = [
  +0.3, +1.4, +0.9, -0.3, -0.5, +2.3, +1.2,
  +0.6, -0.2, +4.3, +1.2, -0.6, -0.4, +1.0
];

try {
  let indicator = new Indicator();
  let rsi = indicator.rsi(items);
  console.log(rsi);
} catch (err) {
    console.log(err.message);
}

try {
  let indicator = new Indicator();
  let rsi = indicator.rsi(items);
  console.log(rsi);
} catch (err) {
    console.log(err.message);
}
