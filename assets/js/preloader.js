const preloader = document.getElementById("preloader");
  const loaderError = document.getElementById("loader-error");

  /*
   * Hide the preloader when everything
   * on the page has finished loading.
   */
  window.addEventListener("load", function () {
    setTimeout(() => {
      preloader.classList.add("loaded");
    }, 500);
  });

  /*
   * If the website takes longer than
   * 10 seconds, show an error message.
   */
  setTimeout(() => {
    if (!preloader.classList.contains("loaded")) {
      loaderError.style.display = "block";
    }
  }, 10000);
