const message = `Hello Mahal, im writing this and will still greet you kahit we're in the middle of our space.\nIt's sad na we're celebrating our monthsary na hindi tayo nag uusap. I understand and will respect your space kasi we both need that.\n\nMahal, I know hindi ka pa talaga fully okay sa nangyari, and I get that you might still be confused or frustrated. Mahal, there's no other girl.”\n\nI'm not gonna find someone else better. Hindi ako mauubusan ng love sa'yo. Hindi rin ako mag-cheat. Ikaw lang yung gusto ko, mahal. Enough ka na rin sa'kin, mahal. Alam ko, lagi tayong nag-aaway, pero hindi ako mapapagod, mahal. Mas pipiliin ko pang mag-stay kaysa bumitaw. Kahit anong away at pagtatalo natin, sa'yo pa rin ako uuwi, mahal. Mas pipiliin ko pang ayusin natin ang mga bagay na hindi tayo magka-intindihan. Ikaw ang gusto kong makasama sa hirap at ginhawa ng buhay, mahal. I love you sooooooooooooooooo soooooooooooooooooooooooo soooooooooooooooooooooooooooooo much baby\n\nI miss you na rin po mahal :( but i'll \nstill wait parin if u still need space pa mahal.\ndo know im always here padin waiting okii??\nHappy monthsary ulit mahal ko, sana mag \nwork tong html huhuh.\n\nay wait one last question mahal, \nwill you be my valentine?? :>>`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
