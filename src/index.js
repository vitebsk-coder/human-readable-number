module.exports = function toReadable(number) {
   const arr1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'],
      arr2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
      arr3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   let res = '';

   if (number >= 0 && number <= 10) {
      res += arr1[number];
   } else if (number > 10 && number <= 19) {
      res += arr2[number.toString().slice(1) - 1];
   } else if (number >= 20 && number <= 99) {
      const tens = Math.floor(number / 10);
      const ones = number % 10;
      res += arr3[tens - 2]
      if (ones > 0) {
         res += ` ${arr1[ones]}`
      }
   } else if (number >= 100 && number <= 999) {
      const hundreds = Math.floor(number / 100);
      const remainder = number % 100;
      res += `${arr1[hundreds]} hundred`;
      if (remainder > 0) {
         res += ` ${toReadable(remainder)}`
      }
   }
   return res;
}


