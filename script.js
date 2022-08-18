const btn = document.querySelector(".btn");
 const result = document.querySelector(".result");

 btn.addEventListener("click", palindrome)

 // Examples of a palindrome
 // madam, noon , eye
 function palindrome() {
    const word = document.querySelector(".input-text").value;
    let len = word.length; 

    let start = word.substring(0, Math.floor(len / 2)).toLowerCase();
    // alert(start);
   
    let end = word.substring(len - Math.floor(len / 2)).toLowerCase();
    // alert(start);

    // let flip = end.split("").reverse().join("");

    let flip = [...end].reverse().join("");
    if (start == flip) {
        result.innerHTML = `${word.toUpperCase()} is a palindrome`;
    } else {
        result.innerHTML = `${word.toUpperCase()} is not a palindrome`;
    }
    // alert(flip);
 }