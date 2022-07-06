//T//he marketing team is spending way too much time typing in hashtags.
//Let's help them with our own Hashtag Generator!

//H//ere's the deal:

//It must start with a hashtag (#).
//All words must have their first letter capitalized.
//If the final result is longer than 140 chars it must return false.
//If the input or the result is an empty string it must return false.
//Examples
//" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
//"    Hello     World   "                  =>  "#HelloWorld"
//""                                        =>  false
function generateHashtag (str) {
if(str === ""){
  return false
}else{
  let array = str.split(" ")
  let tomo = array.every((n,index,arr)=> n === arr[0])
  if(tomo !== true || (array.length === 1 && array[0] !== "")){
    array.forEach((n,index)=>{
      if(n !== ''){
        array[index] = n.charAt(0).toUpperCase() + n.slice(1)
      }
    })
    let finalLength = array.join("")
    if(finalLength.length > 139){
      return false
    }else{
      return '#'+ finalLength
    }
  }else{
      return false
    }  
  }
}