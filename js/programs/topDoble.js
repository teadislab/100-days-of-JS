function topDouble(value, top) {
   while (value < top) {
     value *= 2;
   }
   return value / 2; 
 }

console.log(topDouble(10, 100));