const removeClassFromElements = function (elements, className) {
  elements.forEach((el) => {
    el.classList.remove(className);
  });
};

const addClasstToElements = function (elements, className) {
  elements.forEach((el) => {
    el.classList.add(className);
  });
};

const articleFooter = document.querySelector(".article__footer");
const articleFooterAvatar = document.querySelector(".article__footer__avatar");
const artivleFooterAuthor = document.querySelector(".article__footer_author");
const shareText = document.querySelector(".share__text");
const partners = document.querySelectorAll(".share__partnerLogo");
const shareBtn = document.querySelector(".share");

let showShareMenue = false;

shareBtn.addEventListener("click", () => {
  showShareMenue = !showShareMenue;

  if (showShareMenue) {
    articleFooterAvatar.classList.add("hide");
    artivleFooterAuthor.classList.add("hide");

    articleFooter.classList.add("bg-primary-400", "gap-16");

    shareText.classList.remove("hide");
    removeClassFromElements(partners, "hide");
  } else {
    articleFooterAvatar.classList.remove("hide");
    artivleFooterAuthor.classList.remove("hide");

    articleFooter.classList.remove("bg-primary-400", "gap-16");

    shareText.classList.add("hide");
    addClasstToElements(partners, "hide");
  }
});
