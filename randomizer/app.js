function arrayUnique(array) {
  // copied from stackoverflow to merge two arrays without duplicates
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }

  return a;
}

var champs = []; // array containing all champs
// add all champs to list
for (let i = 0; i < 161; i++) {
  let name = 'champs/' + i + '.jpg';
  champs.push(name);
}

const tops = [
  0, 2, 3, 18, 19, 20, 22, 25, 31, 34, 35, 36, 37, 39, 41, 42, 43, 47, 48, 57,
  59, 62, 65, 67, 69, 72, 74, 77, 78, 81, 88, 90, 91, 92, 95, 97, 101, 102, 103,
  104, 105, 107, 110, 112, 114, 115, 120, 121, 123, 127, 130, 131, 134, 135,
  137, 144, 145, 146, 150, 151, 152, 154,
];
const jgls = [
  5, 13, 23, 25, 26, 27, 28, 29, 30, 37, 38, 39, 40, 44, 46, 47, 54, 58, 60, 61,
  65, 67, 75, 77, 78, 79, 81, 84, 86, 87, 88, 91, 92, 94, 97, 98, 102, 107, 111,
  113, 117, 124, 125, 130, 134, 135, 141, 142, 145, 146, 149, 154,
];
const mids = [
  1, 2, 3, 6, 7, 10, 11, 19, 21, 23, 26, 32, 33, 41, 43, 54, 55, 56, 57, 59, 62,
  63, 64, 65, 68, 69, 71, 73, 79, 83, 86, 89, 91, 94, 104, 105, 109, 114, 115,
  119, 120, 121, 122, 124, 125, 129, 131, 132, 138, 139, 140, 143, 144, 148,
  150, 151, 155, 157, 158, 159,
];
const bots = [
  8, 9, 17, 19, 24, 29, 41, 49, 50, 51, 52, 54, 63, 69, 76, 85, 106, 108, 116,
  129, 133, 136, 137, 147, 150, 156, 157,
];
const supps = [
  4, 5, 9, 12, 14, 15, 16, 45, 53, 66, 70, 71, 74, 77, 79, 80, 81, 82, 83, 92,
  93, 96, 99, 100, 108, 109, 118, 119, 120, 123, 128, 132, 133, 139, 148, 153,
  158, 160,
];

const top_champs = []; // all top champs

for (let i = 0; i < tops.length; i++) {
  let champ = tops[i];
  let name = 'champs/' + champ + '.jpg';
  top_champs.push(name);
}

const jgl_champs = []; // all jgl champs

for (let i = 0; i < jgls.length; i++) {
  let champ = jgls[i];
  let name = 'champs/' + champ + '.jpg';
  jgl_champs.push(name);
}

const mid_champs = []; // all mid champs

for (let i = 0; i < mids.length; i++) {
  let champ = mids[i];
  let name = 'champs/' + champ + '.jpg';
  mid_champs.push(name);
}

const bot_champs = []; // all bot champs

for (let i = 0; i < bots.length; i++) {
  let champ = bots[i];
  let name = 'champs/' + champ + '.jpg';
  bot_champs.push(name);
}

const supp_champs = []; // all supp champs

for (let i = 0; i < supps.length; i++) {
  let champ = supps[i];
  let name = 'champs/' + champ + '.jpg';
  supp_champs.push(name);
}

// Add roles or delete to current champion pool

var top_active = true;
var jgl_active = true;
var mid_active = true;
var bot_active = true;
var supp_active = true;

// when top button is being pressed
function addTop() {
  if (top_active) {
    // remove all top champs from current pool
    document.getElementById('topRole').style.backgroundColor = '#403ea8';
    champs = []; //empty array

    // add champs of specific role to champion pool
    if (jgl_active) {
      champs = arrayUnique(champs.concat(jgl_champs));
    }
    if (mid_active) {
      champs = arrayUnique(champs.concat(mid_champs));
    }
    if (bot_active) {
      champs = arrayUnique(champs.concat(bot_champs));
    }
    if (supp_active) {
      champs = arrayUnique(champs.concat(supp_champs));
    }
    top_active = false;
  } else {
    document.getElementById('topRole').style.backgroundColor = '#191f43';
    champs = arrayUnique(champs.concat(top_champs)); //add top champs to current pool
    top_active = true;
  }
}

// when jgl button is being pressed
function addJgl() {
  if (jgl_active) {
    // remove all top champs from current pool
    document.getElementById('jglRole').style.backgroundColor = '#403ea8';
    champs = []; //empty array

    // add champs of specific role to champion pool
    if (top_active) {
      champs = arrayUnique(champs.concat(top_champs));
    }
    if (mid_active) {
      champs = arrayUnique(champs.concat(mid_champs));
    }
    if (bot_active) {
      champs = arrayUnique(champs.concat(bot_champs));
    }
    if (supp_active) {
      champs = arrayUnique(champs.concat(supp_champs));
    }
    jgl_active = false;
  } else {
    document.getElementById('jglRole').style.backgroundColor = '#191f43';
    champs = arrayUnique(champs.concat(jgl_champs)); //add top champs to current pool
    jgl_active = true;
  }
}

// when top button is being pressed
function addMid() {
  if (mid_active) {
    // remove all top champs from current pool
    document.getElementById('midRole').style.backgroundColor = '#403ea8';
    champs = []; //empty array

    // add champs of specific role to champion pool
    if (top_active) {
      champs = arrayUnique(champs.concat(top_champs));
    }
    if (jgl_active) {
      champs = arrayUnique(champs.concat(jgl_champs));
    }
    if (bot_active) {
      champs = arrayUnique(champs.concat(bot_champs));
    }
    if (supp_active) {
      champs = arrayUnique(champs.concat(supp_champs));
    }
    mid_active = false;
  } else {
    document.getElementById('midRole').style.backgroundColor = '#191f43';
    champs = arrayUnique(champs.concat(mid_champs)); //add top champs to current pool
    mid_active = true;
  }
}

// when top button is being pressed
function addBot() {
  if (bot_active) {
    // remove all top champs from current pool
    document.getElementById('botRole').style.backgroundColor = '#403ea8';
    champs = []; //empty array

    // add champs of specific role to champion pool
    if (top_active) {
      champs = arrayUnique(champs.concat(top_champs));
    }
    if (jgl_active) {
      champs = arrayUnique(champs.concat(jgl_champs));
    }
    if (mid_active) {
      champs = arrayUnique(champs.concat(mid_champs));
    }
    if (supp_active) {
      champs = arrayUnique(champs.concat(supp_champs));
    }
    bot_active = false;
  } else {
    document.getElementById('botRole').style.backgroundColor = '#191f43';
    champs = arrayUnique(champs.concat(bot_champs)); //add top champs to current pool
    bot_active = true;
  }
}

function addSupp() {
  if (supp_active) {
    // remove all top champs from current pool
    document.getElementById('suppRole').style.backgroundColor = '#403ea8';
    champs = []; //empty array

    // add champs of specific role to champion pool
    if (top_active) {
      champs = arrayUnique(champs.concat(top_champs));
    }
    if (jgl_active) {
      champs = arrayUnique(champs.concat(jgl_champs));
    }
    if (mid_active) {
      champs = arrayUnique(champs.concat(mid_champs));
    }
    if (bot_active) {
      champs = arrayUnique(champs.concat(bot_champs));
    }
    supp_active = false;
  } else {
    document.getElementById('suppRole').style.backgroundColor = '#191f43';
    champs = arrayUnique(champs.concat(supp_champs)); //add top champs to current pool
    supp_active = true;
  }
}

// Display New Random Champion
var old_champ = Math.floor(Math.random() * champs.length);
function showChamp() {
  if (champs.length == 0) {
    document.getElementById('champImg').src = 'champs/9.jpg';
    return;
  }
  var champ_index = Math.floor(Math.random() * champs.length);
  while (champ_index == old_champ) {
    champ_index = Math.floor(Math.random() * champs.length);
  }
  old_champ = champ_index;
  document.getElementById('champImg').src = champs[champ_index];
  // console.log(champs[champ_index]);
}
