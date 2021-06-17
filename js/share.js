const articleFooter = document.querySelector(".article__footer");
const articleFooterAvatar = document.querySelector(".article__footer__avatar");
const articleFooterAuthor = document.querySelector(".article__footer_author");
const shareItems = document.querySelector(".share__items");
const shareBtn = document.querySelector(".share");

let showShareMenue = false;
let windowWidth;

window.addEventListener("resize", function () {
  windowWidth = window.innerWidth;
});

shareBtn.addEventListener("click", () => {
  showShareMenue = !showShareMenue;

  if (windowWidth < 768) {
    if (showShareMenue) {
      articleFooterAvatar.classList.add("hide");
      articleFooterAuthor.classList.add("hide");

      articleFooter.classList.add("bg-primary-400", "gap-16");

      shareItems.classList.remove("hide");
    } else {
      articleFooterAvatar.classList.remove("hide");
      articleFooterAuthor.classList.remove("hide");

      articleFooter.classList.remove("bg-primary-400", "gap-16");

      shareItems.classList.add("hide");
    }
  } else {
    if (showShareMenue) {
      shareItems.classList.add("display-absolute-flex");

      shareItems.style.left = shareBtn.offsetLeft - 124 + 16 + "px";
      shareItems.style.top = shareBtn.offsetTop - 83 + "px";

      shareItems.classList.remove("hide");
    } else {
      shareItems.classList.remove("display-absolute-flex");

      shareItems.classList.add("hide");
    }
  }
});
