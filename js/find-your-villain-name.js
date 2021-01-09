
function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

  const birthdayMonthArray = (birthday) => {
    let bDay1 = new Date(birthday);
    let bDay2 = bDay1.getMonth();
    return bDay2;
  }

  const birthdayDayArray = (birthday) => {
    let bDay1 = new Date(birthday);
    let bDay2 = bDay1.getDate();
    let numberToString = bDay2.toString();
    let splitNumber = numberToString.split('');
    let lastDigit = splitNumber.pop();
    return lastDigit;
  }

  const monthTranslation = (birthdayMonthArray) => {
    if (birthdayMonthArray(birthday) === 0) return `${m[0]}`;
    if (birthdayMonthArray(birthday) === 1) return `${m[1]}`;
    if (birthdayMonthArray(birthday) === 2) return `${m[2]}`;
    if (birthdayMonthArray(birthday) === 3) return `${m[3]}`;
    if (birthdayMonthArray(birthday) === 4) return `${m[4]}`;
    if (birthdayMonthArray(birthday) === 5) return`${m[5]}`;
    if (birthdayMonthArray(birthday) === 6) return `${m[6]}`;
    if (birthdayMonthArray(birthday) === 7) return `${m[7]}`;
    if (birthdayMonthArray(birthday) === 8) return `${m[8]}`;
    if (birthdayMonthArray(birthday) === 9) return `${m[9]}`;
    if (birthdayMonthArray(birthday) === 10) return `${m[10]}`;
    if (birthdayMonthArray(birthday) === 11) return `${m[11]}`;
  }
 
  const dayTranslation = (birthdayDayArray) => {
    if (birthdayDayArray(birthday) === "1") return `${d[1]}`;
    if (birthdayDayArray(birthday) === "2") return `${d[2]}`;
    if (birthdayDayArray(birthday) === "3") return `${d[3]}`;
    if (birthdayDayArray(birthday) === "4") return `${d[4]}`;
    if (birthdayDayArray(birthday) === "5") return `${d[5]}`;
    if (birthdayDayArray(birthday) === "6") return`${d[6]}`;
    if (birthdayDayArray(birthday) === "7") return `${d[7]}`;
    if (birthdayDayArray(birthday) === "8") return `${d[8]}`;
    if (birthdayDayArray(birthday) === "9") return `${d[9]}`;
    if (birthdayDayArray(birthday) === "0") return `${d[0]}`;
}

  (birthdayMonthArray(birthday));
  ((birthdayDayArray(birthday)));
  const month = (monthTranslation(birthdayMonthArray));
  const day = (dayTranslation(birthdayDayArray));

  console.log(`The ${month} ${day}`)
  return(`The ${month} ${day}`)
    
  } 
 
(getVillainName('December 17'));