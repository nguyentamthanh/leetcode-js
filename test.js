var array = [889, 100, 546, 1001, 2022, 5, 79, 68, 99999, 4687];

array.forEach((item) => {
  let x = String(item);
  console.log(x[0]);
  let y = Number(x[0]);
  if (y % 2 == 0) {
    console.log(y);
  } else {
    console.log(false);
  }
});
