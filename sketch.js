
//legendary
//features
let unicorn;
let haechi;
let pheonix;
let chimera;
let ittan;
let chinese;
let and;
let pegasus;
let air;
let val;
let europe;
let fire;



let names = [{
  name: "Unicorn",
  word: "dazzling horse with a spiraling horn"
}, {
  name: "Haechi",
  word: "the brave national guardian that has a lion body + horn",
}, {
  name: "Valkyrie",
  word: "the warrior who chooses who dies or lives in battle",
}, {
  name: "Ittan-momen",
  word: "sentiment roll of cotton that files through the night and suffocates people"
}, {
  name: "Pegasus",
  word: "winged stallion that helps heroes conquer deadly foes"
}, {
  name: "European Dragon",
  word: "powerful winged reptile+breathes fire&hoards treasure"
}, {
  name: "Chinese Dragon",
  word: "Long, serpentine creature with elemental powers"
}, {
  name: "Chimera",
  word: "fire-breathing hybridization of a lion, goat, and snake!"
}, {
  name: "Phoenix",
  word: "fire bird that eternally regenerates from its own ashes"
}, {
  name: "Airavata",
  word: "a pristine winged elephant that controls rain"
}, {
  name: "Santelmo",
  word: "spiritual presence in the form of a dancing orb of flame"
}, {
  name: "Androsphinx",
  word: "living statue with a lion body+human head, tells riddles"
}];




let randomIndex;

// let inconsolata;
// function preload() {
//   inconsolata = loadFont('assets/inconsolata.otf');
// }

let animating = false;
let cats = [];
let imageCounter = 0;
let startRadomizerbutton;
let addMoreButton;
let cv;
let nameInputs = [];
let firstTime = true;



function preload() {
  //'assets/cat_${i}.jpeg'
  for (let i = 0; i <= 11; i++) {
    cats[i] = loadImage("assets/lg_" + i + ".png")
  }
}

// function preload(){
//    cats[i] = loadImage("assets/lg_" + i + ".png")
//      // mythp[0] = loadImage("assets/lg_0.png")
//      // mythp[1] = loadImage("assets/lg_1.png")
//      // mythp[2] = loadImage("assets/lg_2.png")
//      // mythp[3] = loadImage("assets/lg_3.png")
//      // mythp[4] = loadImage("assets/lg_4.png")
//      // mythp[5] = loadImage("assets/lg_5.png")
//      // mythp[6] = loadImage("assets/lg_6.png")
//      // mythp[7] = loadImage("assets/lg_7.png")
//      // mythp[8] = loadImage("assets/lg_8.png")
//      // mythp[9] = loadImage("assets/lg_9.png")
//      // mythp[10] = loadImage("assets/lg_10.png")
//      // mythp[11] = loadImage("assets/lg_11.png")
//
//      // unicorn = loadImage("assets/lg_0.png")
//      // hatchi = loadImage("assets/lg_1.png")
//      // pheonix = loadImage("assets/lg_2.png")
//      // chimera = loadImage("assets/lg_3.png")
//      // ittan = loadImage("assets/lg_4.png")
//      // chinese = loadImage("assets/lg_5.png")
//      // and = loadImage("assets/lg_6.png")
//      // pegasus = loadImage("assets/lg_7.png")
//      // air = loadImage("assets/lg_8.png")
//      // val = loadImage("assets/lg_9.png")
//      // europe = loadImage("assets/lg_10.png")
//      // fire = loadImage("assets/lg_11.png")
//    }


function setup() {
  cv = createCanvas(500, 500);
  cv.parent("#canvasDiv");
  //#=css refrence to id, .=class
  unicorn = loadImage("assets/lg_0.png");
  haechi = loadImage("assets/lg_1.png");
  pheonix = loadImage("assets/lg_2.png");
  chimera = loadImage("assets/lg_3.png");
  ittan = loadImage("assets/lg_4.png");
  chinese = loadImage("assets/lg_5.png");
  and = loadImage("assets/lg_6.png");
  pegasus = loadImage("assets/lg_7.png");
  air = loadImage("assets/lg_8.png");
  val = loadImage("assets/lg_9.png");
  europe = loadImage("assets/lg_10.png");
  fire = loadImage("assets/lg_11.png");

  background(242, 194, 48);
  textSize(14);
  imageMode(CENTER);
  frameRate(4);
  textFont()

  //text("click to find your destiny moment of bumping into someone", 50, 50);
  textFont('Oswald');
  text("ʅʕ•ᴥ•ʔʃ A I R A V A T A ˎ₍•ʚ•₎ˏ ˏ₍•ɞ•₎ˎ C H I M E R A(㇏(•̀ᵥᵥ•́)ノ) ᕕ(ꐦ°᷄д°᷅)ᕗ (๑◕︵◕๑)", 20, 20);
  text("･*:.｡..｡.:*･'(*ﾟ▽ﾟ*)'･*:.｡. .｡.:*･ ‘٩꒰｡•◡•｡꒱۶’ʕʘ̅͜ʘ̅ʔ H A E C H I v.ʕʘ‿ʘʔ.v ⊂(´･◡･⊂ )∘˚˳° ", 20, 50);
  text("°◦=͟͟͞͞ʕ̡̢̡ु•̫͡•ʔ̡̢̡ु ☏  ୧༼◕ ᴥ ◕༽୨  ꒰●꒡ ̫ ꒡●꒱ PHEONIX乁[ ◕ ᴥ ◕ ]ㄏ ✩°｡⋆⸜( ｡•ω•｡) ٩꒰๑• ̫•๑꒱۶♡", 20, 80);
  text("₍˄·͈༝·͈˄₎ฅ˒˒ ᕦ[ •́ ﹏ •̀ ]⊃¤=[]::::::::> ٩(* 'ω' *)و ─=≡Σ((( つ•̀ω•́)つ", 20, 110);
  text("ʅʕ•ᴥ•ʔʃ UNICORNˎ₍•ʚ•₎ˏ ˏ₍•ɞ•₎ˎ ANDROSPHINX(㇏(•̀ᵥᵥ•́)ノ) ᕕ(ꐦ°᷄д°᷅)ᕗ (๑◕︵◕๑) ⊂(´･◡･⊂ )∘˚˳°  ", 20, 140);
  text("✧٩(•́⌄•́๑)و ✧ ٩꒰´·⌢•｀꒱۶⁼³₌₃ ꉂ ฅ૮( ๑’ꇴ’๑)აฅ｡*ﾟ✧ ٩(๑❛ᴗ❛๑)۶♡  (*｀･へ･´*)", 20, 170);
  text("( *˘╰╯˘*) (´∩｡• ᵕ •｡∩`) ♡ (๑•᎑•๑)♬*゜ (๑✧◡✧๑) P E G A S U S (▰˘v˘▰)", 20, 200);
  text("٩(๑′∀ ‵๑)۶•*¨*•.¸¸♪ (*｀･へ･´*) VALKYRIE ( ♥˘ ³˘(˘︶˘♥).｡.:* ٩꒰๑• ̫•๑꒱۶♡ (o_O) !", 20, 230);
  text("･*:.｡..｡.:*･'(*ﾟ▽ﾟ*)'･*:.｡. .｡.:*･ ‘٩꒰｡•◡•｡꒱۶’ʕʘ̅͜ʘ̅ʔ v.ʕʘ‿ʘʔ.v ⊂(´･◡･⊂ )∘˚˳°  ", 20, 260);
  text("°◦=͟͟͞͞ʕ̡̢̡ु•̫͡•ʔ̡̢̡ु ☏  ୧༼◕ ᴥ ◕༽୨  ꒰●꒡ ̫ ꒡●꒱ 乁[ ◕ ᴥ ◕ ]ㄏ ٩꒰๑• ̫•๑꒱۶♡  ✩°｡⋆⸜( ｡•ω•｡)", 40, 290);
  text("₍˄·͈༝·͈˄₎ฅ˒˒ ᕦ[ •́ ﹏ •̀ ]⊃¤=[]::::::::> ٩(* 'ω' *)و ─=≡Σ((( つ•̀ω•́)つ", 40, 310);
  text("ʅʕ•ᴥ•ʔʃ A I R A V A T A ˎ₍•ʚ•₎ˏ ˏ₍•ɞ•₎ˎ C H I M E R A(㇏(•̀ᵥᵥ•́)ノ) ᕕ(ꐦ°᷄д°᷅)ᕗ (๑◕︵◕๑)", 20, 340);
  text("✧٩(•́⌄•́๑)و ✧ ٩꒰´·⌢•｀꒱۶⁼³₌₃ ꉂ ฅ૮( ๑’ꇴ’๑)აฅ｡*ﾟ✧ ٩(๑❛ᴗ❛๑)۶♡ ", 20, 370);
  text("( *˘╰╯˘*) I T T A N  M O M E N(´∩｡• ᵕ •｡∩`) ♡ (๑•᎑•๑)♬*゜ (๑✧◡✧๑) (▰˘v˘▰)", 20, 400);
  text("٩(๑′∀ ‵๑)۶•*¨*•.¸¸♪ (*｀･へ･´*) ʅʕ•ᴥ•ʔʃ ( ♥˘ ³˘(˘︶˘♥).｡.: |•'-'•)و✧ * (o_O) ! ", 20, 430);
  text("( *˘╰╯˘*)S A N T E L M O (´∩｡• ᵕ •｡∩`) ♡ (๑•᎑•๑)♬*゜ (๑✧◡✧๑) (▰˘v˘▰)( *˘╰╯˘*)", 20, 460);
  text("٩(๑′∀ ‵๑)۶•*¨*•.¸¸♪ D R A G O N(*｀･へ･´*) ( ♥˘ ³˘(˘︶˘♥).｡.:* (o_O) !", 20, 490);



  //button = createButton("click to randomize");
  startRadomizerbutton = select("#rButton");
  startRadomizerbutton.mousePressed(buttonPressed);

  // setTimeout(changeBackground, 1000);
  // setInterval(changeBackground, 1000);
  //function copy and past not



  // console.log("initial array is");
  // console.log(names);

  // names.shift();
  // //pop removes the last thing of the array
  // console.log("array after shift");
  // console.log(names);
  //
  // names.unshift("greg");
  // console.log("array after unshift");
  // console.log(names);
  // //unshift takes the premeter
  // //shift and pop: takes away the first one
  //names.splice(index, number);
  // names.splice(4, 1);
  // console.log("array after splice");
  // console.log(names);
  //splice to remove on that perticuilar section

}

function draw() {
  //text('click to find your destiny moment of bumping into someone', 45, 200);
  if (animating == true) {
    clear();
    //white clean the canvas image before
    image(cats[imageCounter], width / 2, height / 2);

    if (imageCounter < cats.length - 1) {
      imageCounter++;
      console.log(imageCounter);
    } else {
      imageCounter = 0;
    }
  }
}


// function changeBackground(){
//   if (counter <= 5){
//   counter++;
//   console.log(counter);
//   background(random(255),random(255), random(255));
//   setTimeout(changeBackground, 1000);
// } else {
//
// }
//
// }


function randomizer() {
  animating = false;

  if (names[0]) {

    //this displays random name and splices it out of array
    // background(random(240, 150, 238));
    clear();

    //names random
    randomIndex = int(random(names.length));

    textStyle(NORMAL);
    textFont('Oswald');
    textSize(13);
    (0);
    // textAlign(CENTER, CENTER);
    // text('${names[randomIndex].name} says...', 180, 150);
    image(random(cats), width / 2, height / 2);
    //random image of cats
    text(names[randomIndex].name + " will walk with you, and it is", 150, 430);
    //image(names[randomIndex].img, 150, 80);

    //words random
    // textFont('DotGothic16');

    text(names[randomIndex].word, 150, 460);
    names.splice(randomIndex, 1);
  } else {
    background( 242, 118, 107);
    text("Do you want another one?", 210, 250);


  }

}


function buttonPressed() {


  // if (firstTime == true){
  //
  //   for (let i = 0; i < nameInputs.length; i++) {
  //     names.push(nameInputs[i].value());
  //   }
  //   firstTime = false;
  // }
  animating = true;
  setTimeout(randomizer, 1000);


}
