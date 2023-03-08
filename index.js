const argvs = process.argv;
const argv = argvs.slice(2);
const operation = argv[3];
const operator1 = parseInt(argv[2]);
const operator2 = parseInt(argv[4]);

if (operation === "plus") {
  console.log(
    `${operator1} ${operation} ${operator2} is ` + (operator1 + operator2)
  );
}
if (operation === "minus") {
  console.log(
    `${operator1} ${operation} ${operator2} is ` + (operator1 - operator2)
  );
}
if (operation === "multiply-by") {
  console.log(
    `${operator1} ${operation} ${operator2} is ` + operator1 * operator2
  );
}
if (operation === "divide-by") {
  console.log(
    `${operator1} ${operation} ${operator2} is ` + operator1 / operator2
  );
}
