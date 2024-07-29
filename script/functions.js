const soraDiv = document.getElementById("sora");
const sora2Div = document.getElementById("sora2");
const movers = document.getElementById("carousel");

function firstLoad() {
  movers.childNodes.forEach((navButton) => {
    let newNode = navButton.cloneNode(true);
    newNode.id = navButton.id + "1";
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
      let newDelay = secondsDelay + 10;
      if (newDelay > 0) {
        newDelay -= 60;
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

        setTimeout(goto("about"), 1000);
      };
    }

    if (d.id == "contact-button" || d.id == "contact-button1") {
      const soraContact1 = document.getElementById("sora-contact");
      const soraContact2 = document.getElementById("sora2-contact");
      d.onclick = function (event) {
        (d.id == "contact-button" ? soraContact1 : soraContact2).animate(
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
        setTimeout(goto("contact"), 1000);
      };
    }

    if (d.id === "links-button" || d.id === "links-button1") {
      d.onclick = () => goto("links");
    }
  });

  movers.onmouseenter = function (e) {
    const headers = document.getElementById("top-header");
    headers.childNodes.forEach((sprite) => {
      if (sprite.className == "sora") {
        sprite.style.animationPlayState = "paused";
      }
    });
    // soraDiv.style.animationPlayState = "paused";
    // sora2Div.style.animationPlayState = "paused";
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
        console.log("check");
        sprite.style.animationPlayState = "running";
      }
    });
    soraDiv.style.animationPlayState = "running";
    sora2Div.style.animationPlayState = "running";

    movers.style.animationPlayState = "running";
  };
}

function createAlternateHeader() {
  let newHeader = document.createElement("header");
  newHeader.classList.add("static-container");
  movers.childNodes.forEach((child) => {
    if (child.id && !child.id.includes("1")) {
      const newCopy = child.cloneNode(true);
      newHeader.appendChild(newCopy);

      if (newCopy.id === "about-button") {
        newCopy.onclick = () => goto("about");
      }

      if (newCopy.id === "contact-button") {
        newCopy.onclick = () => goto("contact");
      }

      if (newCopy.id === "links-button") {
        newCopy.onclick = () => goto("links");
      }
    }
  });
  return newHeader;
}

let animationActive = true;
let animatedHeader = document.getElementById("top-header");
let alternateHeader = createAlternateHeader();

function toggle() {
  const toggle = document.getElementById("animation-toggle");
  let slider = document.getElementById("animation-slider");
  if (animationActive) {
    toggle.classList.remove("animations");
    toggle.classList.add("no-animations");
    slider.innerText = "off";
    document.body.replaceChild(alternateHeader, animatedHeader);
  } else {
    toggle.classList.remove("no-animations");
    toggle.classList.add("animations");
    slider.innerText = "on";
    document.body.replaceChild(animatedHeader, alternateHeader);
  }
  animationActive = !animationActive;
}
