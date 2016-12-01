//alert('banana');

function Chapter1() {



  var name = prompt('whats your name?');

  alert('Hello ' + name + ', my man.');

  //var message = 'You were turned into a banana by the evil grape wizard while you were sleeping. Do you, A. Go on an epic adventure or B. Stay here (and most likely die.)?';
  //var answer = prompt(message);
  while (answer !== 'A' && answer !== 'B') {
    var message = 'You were turned into a banana by the evil grape wizard while you were sleeping. You are now ' + name + ' The Banana Do you, A. Go on an epic adventure or B. Stay here (and most likely die.)?';
    var answer = prompt(message);
  }

  if (answer === 'A') {
    alert('wise choice ' + name);
    Chapter2();
  }
  else if (answer === 'B') {
     alert('Your mom ate you thinking you were just an normal banana. You died. refresh the page to restart.');
  }
}
function Chapter2() {
  while (answer !== 'A' && answer !== 'B') {
    var answer = prompt('You have found the grape wizards castle do you, A. Go threw the front gate. or B. go threw the back door.');
  }
  if (answer === 'A') {
    alert('dumb answer the wizard summoned skeleton grape which attacks you, you did not die but are siverely injured and will die soon if you do not wisely chose your next attack.  ')
    chapter4();
  }

  else if (answer === 'B') {
    alert('You safely made it threw the back door of the castle and are now behind the grape wizards throne ready to assassinate him, but you fart and he hears you.')
    chapter3();
  }



}


function chapter3() {

  while (answer !== 'A' && answer !== 'B'){
  var answer = prompt('the wizard looks at you, A. throw a knife at him. or B. brace for impact with you shield.');


  }
if (answer === 'A') {
  alert('success! you kill the wizard and turn back into a man. turns out you fell asleep while eating fruit, this was all a dream :)')
}

else if (answer === 'B') {
  alert('you have failed. the wizard teleported behind you and killed you, you died as a banana. refresh the page to restart.')
}
}

function chapter4() {

  while (answer !== 'A' && answer !== 'B'){
  var answer = prompt('the skeleton just attacked you do you A. Talk to it and team up with it to kill the wizard. or B. strangle it with your banana peal.')
    }

    if (answer === 'A') {
    alert('the skeleton is not easily persuaded and killed you using its rib as a sword. you died. refresh the page to restart.')
    }

    else if (answer === 'B') {
      alert('Success! the skeleton dies')
      chapter3();
    }

}



Chapter1()
