// Leap Year

  function leapyear(year){
   if (year % 4 === 0){
     if (year % 100 === 0){
          if (year % 400 === 0){
          console.log("Es un leap year");
          }
          else{
            return "Not a  Leap Year";
          }
    } else {
      return "Leap Year";
     } 
  else{
  return "Not Leap Year";
     }
   }

  