/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here
let pronoun = ["the", "our"];
let adjective = ["great", "big"];
let noun = ["jogger", "raccoon"];

for (let i = 0; i < pronoun.length; i++) {
  for (let a = 0; a < adjective.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      let domain = `${pronoun[i]}${adjective[a]}${noun[n]}.com`;
      console.log(domain);
    }
  }
}
