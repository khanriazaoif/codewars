// const month = {
//     January: 'The Evil',
//     February: 'The Vile',
//     March: 'The Cruel',
//     April: 'The Trashy',
//     May: 'The Despicable',
//     June: 'The Embarassing',
//     July: 'The Disreputable',
//     August: 'The Atrocious',
//     September: 'The Twirling',
//     Occtober: 'The Orange',
//     November: 'The Terrifying',
//     December: 'The Awkward',
//   };
  
//   const date = {
//     0: 'Mustache',
//     1: 'Pickle',
//     2: 'Hood Ornament',
//     3: 'Raisin',
//     4: 'Recycling Bin',
//     5: 'Potato',
//     6: 'Tomato',
//     7: 'House Cat',
//     8: 'Teaspoon',
//     9: 'Laundry Basket',
//   };
  
//   const firstNameFunction = (firstName) => {
//       if (firstName === "January") return `${month.January}`;
//       if (firstName === "February") return `${month.February}`;
//       if (firstName === "March") return `${month.March}`;
//       if (firstName === "April") return `${month.April}`;
//       if (firstName === "May") return `${month.May}`;
//       if (firstName === "June") return `${month.June}`;
//       if (firstName === "July") return `${month.July}`;
//       if (firstName === "August") return `${month.August}`;
//       if (firstName === "September") return `${month.September}`;
//       if (firstName === "October") return `${month.October}`;
//       if (firstName === "November") return `${month.November}`;
//       if (firstName === "December") return `${month.December}`;
      
//     };
  
//   const lastNameFunction = (lastName) => {
//     let operand = lastName % 10;
//     if (operand === 0) return `${date[0]}`;
//     if (operand === 1) return `${date[1]}`;
//     if (operand === 2) return `${date[2]}`;
//     if (operand === 3) return `${date[3]}`;
//     if (operand === 4) return `${date[4]}`;
//     if (operand === 5) return `${date[5]}`;
//     if (operand === 6) return `${date[6]}`;
//     if (operand === 7) return `${date[7]}`;
//     if (operand === 8) return `${date[8]}`;
//     if (operand === 9) return `${date[9]}`;
//   };

//   const villainName = (firstName, lastName) => {
//       const fN = firstNameFunction(firstName);
//       const lN = (lastNameFunction(lastName));
//       return `${fN} ${lN}`;
//   };

// console.log(villainName('March', 18));


function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];

}