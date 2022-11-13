//Main Logic
function vowels() {
  var str = document.getElementById("string").value;
  ans = "<h3 style='color: #000';>No vowels found for string " + str + ".</h3>";
  for (i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    )
      ans =
        "<h3 style='color: #a8ff78';>Left most vowel of string " +
        str +
        " is at location " +
        (i + 1) +
        ".</h3>";
  }

  document.getElementById("vowels").innerHTML = ans;
}

function reverse() {
  rnum = 0;
  let num = document.getElementById("number").value;
  temp = num;
  ans = "<h3 style='color: #000';>Invalid Number</h3>";
  while (num != 0) {
    rnum *= 10;
    rnum += num % 10;
    num -= num % 10;
    num = Math.floor(num / 10);
  }

  ans =
    "<h3 style='color: #a8ff78;'> Reverse of number " +
    temp +
    " is " +
    rnum +
    ".</h3>";

  document.getElementById("reverse").innerHTML = ans;
}
