/**
 * (1) L'objectif est de créer une fonction "triangle" qui permet d'afficher un triangle de n lignes.
 * n étant le paramètre de la fonction
 * 
 * Exemple :
 * triangle(5)
 *     *
 *    ***
 *   *****
 *  *******
 * *********
 * 
 * (2) Bonus : A partir de 10 lignes, afficher le texte 'Joyeux Noël' au centre du  sapin (si le nombre total de ligne est paire, prendre celle juste avant ou après)
 * 
 *  * Exemple :
 * triangle(12)
 *            *
 *           ***
 *          *****
 *         *******
 *        *********
 *       ***********
 *      *************
 *     * Joyeux Noël *
 *    *****************
 *   *******************
 *  *********************
 * ***********************
 */

const star = (i, n) => " ".repeat(n-i).concat("*".repeat((i*2 - 1)))

const starWith = (i, n, word = " Joyeux Noël ") => {
  const line = i + (i-1);
  const j = (line - word.length) / 2;
  console.log(j)
  return " ".repeat(n-i)
            .concat("*".repeat(j)
            .concat(word)
            .concat("*".repeat(j)))
}

const position = (i, word) => {
  if (word.length >= 2*i) return undefined;
  let j = parseInt(i/2);
  let line = (j%2 === 0) ? j : j+1;
  for (let k = line; k < i; k+2) {
    if (word.length < (2*line-1)) break;
  }
  return line;
};

const triangles = (n) => {
  const text = [];
  if (n <= 10) {
    for (let i = 1; i <= n ; i++) {
        text.push(star(i, n))
    }
  } else {
    let j = position(n, " Joyeux Noël ");
    for (let i = 1; i <= n ; i++) {
      if (i === j) {
        text.push(starWith(i, n, " Joyeux Noël "))
      } else {
        text.push(star(i, n))
      }
      
    }
  }
  text.forEach(element => console.log(element));
}


triangles(13)
