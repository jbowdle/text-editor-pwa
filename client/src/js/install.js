let installPrompt = null;
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
  butInstall.removeAttribute("hidden");
  butInstall.style.display = "inline-block";
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (!installPrompt) {
    return;
  }

  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);

  if (result.outcome === "accepted") {
    installPrompt = null;
    butInstall.setAttribute("hidden", "");
    butInstall.style.display = "none";
  }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  console.log("JATE has been installed");
});
