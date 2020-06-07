// COUNT DOWN

const countDown = (num) => {
  if (num < 0) {
    console.log("Done!");
    return;
  }
  console.log(num);
  num--;
  setTimeout(() => {
    countDown(num);
  }, 200);
};

console.log(countDown(100));
