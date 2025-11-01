// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

  function isIsogram(str){
      let arr = []
      let Lower = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
      const element = str[i];
      if(arr.includes(Lower[i])){
        return false
      }else{
        arr.push(Lower[i])
      }
    }
      return true
  }
  // console.log(isIsogram("Haloo"))
  console.log(isIsogram("Dermatoglyphics"));
  console.log(isIsogram("isogram"));
  console.log(isIsogram("aba"));
  console.log(isIsogram("moOse"));
  console.log(isIsogram("isIsogram"));
  console.log(isIsogram(""));
