/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  /*Solución con Función*/

  let who = ["The dog", "My granma", "His turtle", "My bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class.",
    "right in time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying."
  ];

  function number(words) {
    return Math.floor(Math.random() * words.length);
  }

  let person =
    who[number(who)] + " " + what[number(what)] + " " + when[number(when)];

  console.log(person);
  document.querySelector("#excuse").innerHTML = person;

  /*Solución sin Función 

       
            let who = ['The dog','My grandma','His turtle','My bird'];
            let action = ['ate','peed','crushed','broke'];
            let what = ['my homework', 'the keys', 'the car'];
            let when = ['before the class.','right on time.','when I finished.','during my lunch.','while I was praying.'];

            indexWho = Math.floor(Math.random()*who.length);
            indexAction = Math.floor(Math.random()*action.length);
            indexWhat = Math.floor(Math.random()*what.length);
            indexWhen = Math.floor(Math.random()*when.length);

            console.log(indexWho);
            console.log(indexAction);
            console.log(indexWhat);
            console.log(indexWhen);

            document.getElementById ("excuse").innerHTML = who[indexWho]+" "+action[indexAction]+" "+what[indexWhat]+" "+when[indexWhen];

     */
};
