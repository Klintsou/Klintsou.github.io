+function addition(par1, par2) {
 +  return par1 + par2;
 +}
 +function minus(par1, par2) {
 +  return par1 - par2;
 +}
 +function multiplication(par1, par2) {
 +  return par1 * par2;
 +}
 +function division(par1, par2) {
 +  return par1 / par2;
 +}
 +function integerDivision(par1, par2) {
 +  return (par1 - par1 % par2) / par2;
 +}
 +console.log(addition(1.01, 3.27));
 +console.log(minus(50, 30));
 +console.log(multiplication(5, 3));
 +console.log(division(80, 10));
 +console.log(integerDivision(5, 3));
 +console.log(' ');
 +console.log(addition(50, '1asd'));
 +console.log(minus(10, false));
 +console.log(minus(1));
 +console.log(multiplication(10, false, 10));
 +console.log(multiplication());
 +console.log(integerDivision('bbb', 'aaa'));
 