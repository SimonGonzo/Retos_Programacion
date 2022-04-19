let today = new Date('Jan 1, 2022 00:00:01');
let christmasYear = 2021;

//if (today.getMonth() == 11 && today.getDate() > 25) {
 // christmasYear = christmasYear + 1;
//}

let christmasDate = new Date(christmasYear, 11, 25);
let dayMilliseconds = 1000 * 60 * 60 * 24;
if (christmasYear>2021) {

}

let remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) /
   (dayMilliseconds)
);

document.write(remainingDays)