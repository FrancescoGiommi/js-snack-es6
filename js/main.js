/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack 2
Creare un array di oggetti di squadre di calcio.
 Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

// ! Snack 1

const bycicles = [
  /* Bici 1 */
  {
    name: "bici1",
    weigth: "10kg",
  },
  /* Bici 2 */
  {
    name: "bici 2",
    weigth: "15 kg",
  },
];

console.log(bycicles[0]);

// ! Snack 2

const footballTeam = [
  {
    name: "Squadra1",
    point: 0,
    foulsSuffered: 0,
  },
  {
    name: "Squadra2",
    point: 0,
    foulsSuffered: 0,
  },
  {
    name: "Squadrta3",
    point: 0,
    foulsSuffered: 0,
  },
];

console.log(footballTeam);

const randomNumber = Math.floor(Math.random() * 100) + 1;
