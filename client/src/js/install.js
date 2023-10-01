const butInstall = document.getElementById("buttonInstall");

let deferredPrompt;

// Logic for installing the PWA
// event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();

  deferredPrompt = event;

  butInstall.style.display = "block";
});

// click event handler on the `butInstall` element
butInstall.addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    const choiceResult = await deferredPrompt.userChoice;

    if (choiceResult.outcome === "accepted") {
      console.log("PWA Installed");
    } else {
      console.log("PWA install declined");
    }

    deferredPrompt = null;

    butInstall.style.display = "none";
  }
});

// handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  console.log("PWA installed.");
});
