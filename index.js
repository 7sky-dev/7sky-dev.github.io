onload = () => {
  document.querySelector("nav").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    document
      .getElementById("icon_container")
      .classList.remove("slide-in-bottom");
    setTimeout(() => {
      document
        .getElementById("icon_container")
        .classList.add("jello-horizontal");

      setTimeout(() => {
        document
          .getElementById("icon_container")
          .classList.remove("jello-horizontal");
      }, 800);
    }, 0);
  }, 1500);
};

document.getElementById("icon").addEventListener("mouseover", () => {
  document.getElementById("icon_container").classList.remove("vibrate-end");
  document.getElementById("icon_container").classList.add("vibrate");
});

document.getElementById("icon").addEventListener("mouseleave", () => {
  document.getElementById("icon_container").classList.remove("vibrate");
  document.getElementById("icon_container").classList.add("vibrate-end");
});

document.getElementById("icon").addEventListener("click", () => {
  document.getElementById("icon_container").classList.add("slide-out-top");
  document.getElementById("name").classList.add("text-blur-out");
  document.querySelector(".ctn").classList.remove("d-none");
  document.querySelector("footer").classList.remove("d-none");
  setTimeout(() => {
    document.querySelector("nav").classList.add("d-none");

    document
      .querySelector(".ctn")
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "center" });
  }, 500);
});
