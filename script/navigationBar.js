const headers = document.getElementById("top-header");
const animatedHeader = document.getElementById("carousel");
const staticHeader = createStaticHeader();

const aboutSoraDelay = -58.5;
const linksDelay = -53.5;
const contactSoraDelay = -48.5;
const soloDelay = -43.5;
const teamDelay = -38.5;
const homeDelay = -33.5;

let animations = true;

function toggleAnimations() {
  const toggler = document.getElementById("animation-toggle");
  const slider = document.getElementById("animation-slider");
  if (animations) {
    toggler.classList.remove("animations");
    toggler.classList.add("no-animations");
    slider.innerText = "off";
    document.body.replaceChild(alternateHeader, animatedHeader);
  } else {
    toggler.classList.remove("no-animations");
    toggler.classList.add("animations");
    slider.innerText = "on";
    document.body.replaceChild(animatedHeader, alternateHeader);
  }
  animationActive = !animationActive;
}

function createStaticHeader() {
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
