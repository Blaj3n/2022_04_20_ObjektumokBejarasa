const termekek = [
  {
    nev: "cigirágó",
    ar: 10,
    egyseg: 1,
    marka: "sophiane",
    eros: "durva",
    szin: "fehér",
    iz: "dohány",
  },
  {
    nev: "csoki",
    ar: 650,
    egyseg: 1,
    marka: "Ritter Sport",
    eros: "ét",
    szin: "fekete",
    iz: "mogyorós",
  },
];

const termek2 = window.addEventListener("load", function () {
  /* 
  let txt = "";
  for (let index = 0; index < termekek.length; index++) {
    txt += "<ul>";
    for (const key in termekek[index]) {
      console.log(key, termekek[index][key]);
      txt += `<li>${key}: ${termekek[index][key]}</li>`;
    }
    txt += "</ul>";
  }*/
  let txt = "";
  termekek.forEach(function(elem, index){
    txt += "<ul>";
      for (const key in elem) {
        console.log(key, elem[key]);
        txt += `<li>${key}: ${elem[key]}</li>`;
      }
      txt += "</ul>";
    });

  console.log(txt);
  document.getElementById("termekek").innerHTML = txt;
});
