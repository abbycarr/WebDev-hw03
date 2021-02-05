// this function is from lecture
export function uniq(xs) {
  return Array.from(new Set(xs));
}

export function match(numb, guess) {

  let numbers = numb.split('');
  let goods = guess.split('').filter((x) => numbers.includes(x));
  let bulls = 0;
  let cows = goods.length;

  let n = numb.slice();
  let g = guess.slice();

  for (let i = 0; i < goods.length; i++) {
    let x = goods[i];
    if (n.indexOf(x) == g.indexOf(x)) {
      cows -= 1;
      bulls += 1;
    }
  }
  return (bulls + "B" + cows + "C");
}

export function test_guess(text) {
  if (text.length == 4) {
    let isUnique = true;
    let copy = text.slice();
    let i, j;
    for (i = 0; i < 4; i++) {
      for (j = i + 1; j < 4; j++) {
        if (copy[i] === text[j]) {
          isUnique = false;
        }
      }
    }
    if (isUnique) {
      return true;
    }
    else {
      alert("Your four-digit guess must have four unique digits!");
      return false;
    }
  }
  else {
    alert("Your guess must be a four-digit number!");
    return false;
  }
}

export function make_secret_numb() {
  let numbs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  numbs = numbs.sort(() => Math.random() - 0.5);
  return ("" + numbs[0] + numbs[1] + numbs[2] + numbs[3]);
}