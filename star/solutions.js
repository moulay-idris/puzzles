const star = (i, n) => " ".repeat(n-i).concat("*".repeat((i*2 - 1)));

const starWith = (i, n, word = " Joyeux Noël ") => {
  const line = i + (i-1);
  const j = (line - word.length) / 2;
  return " ".repeat(n-i)
    .concat("*".repeat(j)
      .concat(word)
      .concat("*".repeat(j)))
};

const position = (i, word) => {
  if (word.length >= 2*i) return undefined;
  let j = parseInt(i/2);
  let line = (j%2 === 0) ? j : j+1;
  for (let k = line; k < i; k = k+2) {
    if (word.length < (2*line-1)) break;
    else line = k;
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
};


// todo; change 16 with int int.
triangles(16);


