const mainBody = document.getElementById("mainContent");

const aboutPage = createAboutPage();
const linksPage = createLinksPage();
const contactPage = createContactPage();

let activePage;

function createAboutPage() {
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

  return aboutDiv;
}

function createLinksPage() {
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

  return linksDiv;
}

function createContactPage() {
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

  return contactDiv;
}

function goto(pageName) {
  if (activePage === pageName) {
    return;
  }

  let page;
  switch (pageName) {
    case "about":
      page = aboutPage;
      break;
    case "contact":
      page = contactPage;
      break;
    case "links":
      page = linksPage;
      break;
    default:
      return;
  }
  if (activePage != null) {
    emptyMain(activePage);
  }
  activePage = pageName;
  enterMain(page);
}

function removeFromMain(page) {
  if (activePage === page.id || page.parentElement !== mainBody) {
    return;
  }
  mainBody.removeChild(page);
}

function emptyMain(currentPage) {
  let pageToRemove = document.getElementById(`${currentPage}`);

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
