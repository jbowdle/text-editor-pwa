let installPrompt = null;
const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  installPrompt = event;
  butInstall.removeAttribute("hidden");
  butInstall.style.display = "inline-block";
});

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

window.addEventListener('appinstalled', (event) => {
  console.log("JATE has been installed");
});
