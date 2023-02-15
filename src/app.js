let pronoun = ["the", "our"];
let adjective = ["great", "big"];
let noun = ["jogger", "raccoon"];
let domains = [];

for (let p = 0; p < pronoun.length; p++) {
  for (let a = 0; a < adjective.length; a++) {
    for (let n = 0; n < noun.length; n++) {
      let domain = `${pronoun[p]}${adjective[a]}${noun[n]}.com`;
      domains.push(domain);
    }
  }
}

for (let p = domains.length - 1; p > 0; p--) {
  const a = Math.floor(Math.random() * (p + 1));
  [domains[p], domains[a]] = [domains[a], domains[p]];
}

domains.forEach(domain => console.log(domain));
