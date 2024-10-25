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
  /* Squadra 1 */
  {
    name: "Squadra1",
    point: 0,
    foulsSuffered: 0,
  },
  /* Squadra 2 */
  {
    name: "Squadra2",
    point: 0,
    foulsSuffered: 0,
  },
  /* Squadra 3 */
  {
    name: "Squadrta3",
    point: 0,
    foulsSuffered: 0,
  },
];

/* Generatore di numeri */
const randomNumber = Math.floor(Math.random() * 100) + 1;

/* Assegnazione punti e falli fatti */
for (
  let i = 0;
  i == footballTeam[0].point &&
  i == footballTeam[1].point &&
  i == footballTeam[2].point &&
  i == footballTeam[0].foulsSuffered &&
  i == footballTeam[1].foulsSuffered &&
  i == footballTeam[2].foulsSuffered;
  i++
) {
  footballTeam[0].point = randomNumber;
  footballTeam[1].point = randomNumber;
  footballTeam[2].point = randomNumber;
  footballTeam[0].foulsSuffered = randomNumber;
  footballTeam[1].foulsSuffered = randomNumber;
  footballTeam[2].foulsSuffered = randomNumber;
}
console.log(footballTeam);

/* Array nuovo */

const newFootballTeam = [
  /* Squadra 1 */
  {
    name: "Squadra1",
    foulsSuffered: 0,
  },
  /* Squadra 2 */
  {
    name: "Squadra2",
    foulsSuffered: 0,
  },
  /* Squadra 3 */
  {
    name: "Squadrta3",
    foulsSuffered: 0,
  },
];

/* Assegnazione falli fatti */
for (
  let i = 0;
  i == newFootballTeam[0].foulsSuffered &&
  i == newFootballTeam[1].foulsSuffered &&
  i == newFootballTeam[2].foulsSuffered;
  i++
) {
  newFootballTeam[0].foulsSuffered = randomNumber;
  newFootballTeam[1].foulsSuffered = randomNumber;
  newFootballTeam[2].foulsSuffered = randomNumber;
}
console.log(newFootballTeam);
