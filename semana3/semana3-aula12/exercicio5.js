const period = prompt(
  "Digite seu turno (M (matutino) V (Vespertino) ou N (Noturno)"
).toUpperCase();

if (period === "M") {
  console.log("Bom dia");
} else {
  if (period == "V") {
    console.log("Boa tarde");
  } else {
    if (period == "N") {
      console.log("Boa noite");
    }
  }
}
