const period = prompt(
  "Digite seu turno (M (matutino) V (Vespertino) ou N (Noturno)"
).toUpperCase();

switch (period) {
  case "M":
    console.log("Bom dia!");
    break;
  case "V":
    console.log("Boa tarde!");
    break;

  case "N":
    console.log("Boa noite!");
    break;
  default:
    break;
}
