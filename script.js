const img = document.querySelector("img");
const txt = document.querySelector(".text-wrapper");
const yesBtn = document.querySelector(".yes-btn");

var clicks = 0;
var hovers = 0;
var badCount = 0;
console.log(clicks);
yesBtn.addEventListener("click", () => {
  switch (clicks) {
    case 0:
      clicks += 1;
      img.src = "./public/imgs/Search.svg";
      txt.innerHTML = "Einen Moment bitte!\nKannst du dich identifizieren?";
      yesBtn.innerHTML = "Ich bin 👸Rani👸";
      yesBtn.style.visibility = "hidden";

      let noBtn = document.createElement("button");
      document.body.appendChild(noBtn);
      noBtn.classList.add("no-btn");
      noBtn.innerHTML = "Ich Bin Maria Ahmed";
      noBtn.addEventListener("mouseover", () => {
        hovers += 1;
        let i = Math.floor(Math.random() * 700) + 1;
        let j = Math.floor(Math.random() * 500) + 1;
        noBtn.style.right = i + "px";
        noBtn.style.bottom = j + "px";

        if (hovers > 10) {
          yesBtn.style.visibility = "visible";
        }
      });

      noBtn.addEventListener("click", () => {
        badCount += 1;
        yesBtn.style.visibility = "visible";
      });

      console.log(clicks);
      break;

    case 1:
      clicks += 1;
      if (badCount < 1) {
        img.src = "./public/imgs/rani.png";
        txt.innerHTML = "Ja!😘du bist meri 👸Rani👸";
      } else {
        img.src = "./public/imgs/sad.png";
        txt.innerHTML =
          "Es wird Zeit, dass du deine neue Identität akzeptierst, weißt du🥲.";
      }
      const body = document.querySelector("body");
      body.removeChild(body.lastChild);
      yesBtn.innerHTML = "Hehehe🤭";
      console.log(clicks);
      break;

    case 2:
      clicks += 1;
      img.src = "./public/imgs/meet.png";
      yesBtn.innerHTML = "Aahann";
      txt.innerHTML =
        "Wußtst du? Wenn ein Mann und eine Frau zueinander finden...";
      console.log(clicks);
      break;

    case 3:
      clicks += 1;
      img.src = "./public/imgs/together.png";
      yesBtn.innerHTML = "Sicher...";
      txt.innerHTML = "Und Sie beginnen sich zu mögen....";
      console.log(clicks);
      break;

    case 4:
      clicks += 1;
      img.src = "./public/imgs/kiss.png";
      yesBtn.innerHTML = "Where we going with this?😫";
      txt.innerHTML = "sich verlieben und küssen.... etwas Magisches passiert";
      console.log(clicks);
      break;

    case 5:
      clicks += 1;
      img.src = "./public/imgs/shy.png";
      yesBtn.innerHTML = "ummm OK...";
      txt.innerHTML = "Ich habe einige Neuigkeiten";
      console.log(clicks);
      break;

    case 6:
      clicks += 1;
      img.src = "./public/imgs/pregnant.png";
      yesBtn.innerHTML = "Was!😨 but i was careful!";
      txt.innerHTML = "ich bin schwanger! und ja, ES IST DEINS!!!";
      console.log(clicks);
      break;

    case 7:
      clicks += 1;
      img.src = "./public/imgs/kidding.png";
      yesBtn.innerHTML = "🤪";
      txt.innerHTML = "Nur ein Scherz!";
      console.log(clicks);
      break;

    case 8:
      clicks += 1;
      img.src = "./public/imgs/birthday.png";
      yesBtn.innerHTML = "💘";
      txt.textContent =
        "Herzlichen Glückwunsch zum Geburtstag 👸Rani👸.Ich hoffe wirklich, dass diese dumme Sache von mir dich zum Lächeln gebracht hat und ich bete, dass Allah pak dich mit allem segnet, was gut für dich ist";
      console.log(clicks);
      break;

    case 9:
      clicks += 1;
      img.src = "./public/imgs/gift.png";
      txt.innerHTML =
        "Wenn du jetzt bitte dein Geschenk öffnen würdest, von dem du hoffentlich nicht weißt, was es enthält🤲. Mach die Tür, bitte auf!";
      yesBtn.innerHTML = "Ende";
      console.log(clicks);
      break;

    case 10:
      yesBtn.remove();
      img.src = "./public/imgs/loveu.png";
      txt.innerHTML =
        "Ich hoffe, es gefällt Ihnen.Ich liebe dich, meri 👸Rani👸";
      break;

    default:
      txt.innerHTML = "Ooops... Something went wrong, please reload the page.";
      break;
  }
});
