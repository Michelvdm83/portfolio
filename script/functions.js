const soraDiv = document.getElementById("sora");
const sora2Div = document.getElementById("sora2");
const movers = document.getElementById("carousel");

let activePage;

function firstLoad() {
  movers.childNodes.forEach((d) => {
    let newNode = d.cloneNode(true);
    newNode.id = d.id + "1";
    movers.appendChild(newNode);
  });
  soraDiv.style.animationDelay = "-58.5s";
  sora2Div.style.animationDelay = "-28.5s";

  const headers = document.getElementById("top-header");
  headers.childNodes.forEach((sprite) => {
    if (sprite.className == "sora") {
      let newSprite = sprite.cloneNode(true);
      newSprite.id = sprite.id + "-contact";
      let originalDelay = sprite.style.animationDelay;
      let secondsDelay = new Number(
        originalDelay.substring(0, originalDelay.length - 1)
      );
      let newDelay = secondsDelay - 20;
      if (newDelay < -60) {
        newDelay += 60;
      }
      newSprite.style.animationDelay = newDelay + "s";
      headers.appendChild(newSprite);
    }
  });

  movers.childNodes.forEach((d) => {
    if (d.id == "about-button" || d.id == "about-button1") {
      d.onclick = function (event) {
        (d.id == "about-button" ? soraDiv : sora2Div).animate(
          [
            { backgroundPosition: "100% 0" },
            { backgroundPosition: "100% -581px" },
          ],
          {
            duration: 1000,
            easing: "steps(7)",
          }
        );
        console.log(event.target);

        event.target.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: "translate(0, -40%" },
            { transform: "translate(0, 0)" },
          ],
          {
            duration: 1000,
            delay: 200,
            easing: "ease-in-out",
          }
        );
        setTimeout(showAbout, 1000);
      };
    }

    if (d.id == "contact-button" || d.id == "contact-button1") {
      const soraContact1 = document.getElementById("sora-contact");
      const soraContact2 = document.getElementById("sora2-contact");
      d.onclick = function (event) {
        (d.id == "contact-button" ? soraContact2 : soraContact1).animate(
          [
            { backgroundPosition: "100% 0" },
            { backgroundPosition: "100% -581px" },
          ],
          {
            duration: 1000,
            easing: "steps(7)",
          }
        );

        event.target.animate(
          [
            { transform: "translate(0, 0)" },
            { transform: "translate(0, -40%" },
            { transform: "translate(0, 0)" },
          ],
          {
            duration: 1000,
            delay: 200,
            easing: "ease-in-out",
          }
        );
        setTimeout(showContact, 1000);
      };
    }

    if (d.id === "links-button" || d.id === "links-button1") {
      d.onclick = () => showLinks();
    }
  });

  movers.onmouseenter = function (e) {
    const headers = document.getElementById("top-header");
    headers.childNodes.forEach((sprite) => {
      if (sprite.className == "sora") {
        sprite.style.animationPlayState = "paused";
      }
    });
    soraDiv.style.animationPlayState = "paused";
    sora2Div.style.animationPlayState = "paused";
    const x = e.clientX;
    const soraX = soraDiv.getBoundingClientRect().x;
  };
  movers.onmouseleave = function () {
    const headers = document.getElementById("top-header");
    headers.childNodes.forEach((sprite) => {
      if (sprite.className == "sora") {
        sprite.style.animationPlayState = "running";
      }
    });
    soraDiv.style.animationPlayState = "running";
    sora2Div.style.animationPlayState = "running";
  };

  movers.ontouchend = function () {
    const headers = document.getElementById("top-header");
    headers.childNodes.forEach((sprite) => {
      if (sprite.className == "sora") {
        sprite.style.animationPlayState = "running";
      }
    });
    soraDiv.style.animationPlayState = "running";
    sora2Div.style.animationPlayState = "running";
  };
  movers.style.animationPlayState = "running";
}

function createAlternateHeader() {
  let newHeader = document.createElement("header");
  newHeader.classList.add("static-container");
  movers.childNodes.forEach((child) => {
    if (child.id && !child.id.includes("1")) {
      const newCopy = child.cloneNode(true);
      newHeader.appendChild(newCopy);

      if (newCopy.id === "about-button") {
        newCopy.onclick = () => showAbout();
      }

      if (newCopy.id === "contact-button") {
        newCopy.onclick = () => showContact();
      }

      if (newCopy.id === "links-button") {
        newCopy.onclick = () => showLinks();
      }
    }
  });
  return newHeader;
}

const mainBody = document.getElementById("mainContent");

let animationActive = true;
let animatedHeader = document.getElementById("top-header");
let alternateHeader = createAlternateHeader();

function toggle() {
  let toggle = document.getElementById("animation-toggle");
  let slider = document.getElementById("animation-slider");
  if (animationActive) {
    toggle.classList.remove("animations");
    toggle.classList.add("no-animations");
    slider.innerText = "off";
    // document.body.removeChild(animatedHeader);
    document.body.replaceChild(alternateHeader, animatedHeader);
  } else {
    toggle.classList.remove("no-animations");
    toggle.classList.add("animations");
    slider.innerText = "on";
    // document.body.insertBefore(animatedHeader, mainBody);
    document.body.replaceChild(animatedHeader, alternateHeader);
  }
  animationActive = !animationActive;
}

function showAbout() {
  movers.animationPlayState = "paused";
  if (activePage == "about") {
    return;
  }

  let aboutDiv = document.createElement("article");
  let aboutTitle = document.createElement("h1");
  aboutTitle.textContent = "About";

  let aboutContext = document.createElement("div");
  aboutContext.innerText =
    "Hoi,\n\n Mijn naam is Michel.\n" +
    "Op het moment ben ik een student bij ITVitae.\n" +
    "Ik volg de studie tot Java programmeur.\n" +
    "Hier leren wij, naast 'gewoon' Java, ook het gebruik van het framework Spring Boot voor back-end applicaties.\n" +
    "Tevens leren wij ook Javascript/REACT voor front-end.";

  aboutDiv.className = "text-field";
  aboutDiv.id = "about";
  aboutDiv.appendChild(aboutTitle);
  aboutDiv.appendChild(aboutContext);

  changeMainTo(aboutDiv, "about");
}

function removeFromMain(page) {
  mainBody.removeChild(page);
}

function emptyMain() {
  let pageToRemove = document.getElementById(`${activePage}`);

  pageToRemove.animate(
    [
      { transform: "translate(0, 0)", opacity: 1 },
      { transform: "translate(50vw, 0)", opacity: 0 },
    ],
    {
      duration: 2000,
      fill: "forwards",
    }
  );
  setTimeout(() => removeFromMain(pageToRemove), 2000);
}

function changeMainTo(page, newActivePage) {
  if (activePage != null) {
    emptyMain();
  }
  activePage = newActivePage;
  enterMain(page);
}

function enterMain(page) {
  mainBody.appendChild(page);
  page.animate(
    [
      { transform: "translate(-50vw, 0)", opacity: 0 },
      { transform: "translate(0, 0)", opacity: 1 },
    ],
    {
      duration: 2000,
      fill: "forwards",
    }
  );
}

function showContact() {
  if (activePage == "contact") {
    return;
  }

  let contactDiv = document.createElement("article");
  contactDiv.id = "contact";
  contactDiv.className = "text-field";

  let contactTitle = document.createElement("h1");
  contactTitle.textContent = "Contact";

  let mailContext = document.createElement("div");

  const mailText = document.createTextNode("mail: ");
  mailContext.appendChild(mailText);

  let emailContact = document.createElement("a");
  const emailaddress = document.createTextNode("michelvdm@gmail.com");
  emailContact.href = "mailto:michelvdm@gmail.com";
  emailContact.appendChild(emailaddress);
  mailContext.appendChild(emailContact);

  contactDiv.appendChild(contactTitle);
  contactDiv.appendChild(mailContext);

  changeMainTo(contactDiv, "contact");
}

function showLinks() {
  if (activePage == "links") {
    return;
  }

  let linksDiv = document.createElement("article");
  linksDiv.id = "links";
  linksDiv.className = "text-field";

  let linksTitle = document.createElement("h1");
  linksTitle.textContent = "Links";

  let githubContext = document.createElement("div");

  const githubText = document.createTextNode("github: ");
  githubContext.appendChild(githubText);

  let githubLink = document.createElement("a");
  githubLink.href = "https://github.com/Michelvdm83";
  githubLink.target = "blank";
  githubLink.innerText = "Michelvdm83";
  githubContext.appendChild(githubLink);
  linksDiv.appendChild(githubContext);

  let linkedinContext = document.createElement("div");

  const linkedinText = document.createTextNode("linkedin: ");
  linkedinContext.appendChild(linkedinText);

  let linkedinLink = document.createElement("a");
  linkedinLink.href =
    "https://www.linkedin.com/in/michel-van-der-mark-083314105/";
  linkedinLink.target = "blank";
  linkedinLink.innerText = "Michel van der Mark";
  linkedinContext.appendChild(linkedinLink);
  linksDiv.appendChild(linkedinContext);

  changeMainTo(linksDiv, "links");
}
