document.querySelectorAll("details.section").forEach(det => {
  det.addEventListener("click", e => {
    // Si el clic fue en el summary, dejamos que el navegador lo maneje
    if (e.target.tagName.toLowerCase() === "summary") return;

    // Si el clic fue en el fondo, alternamos manualmente
    det.open = !det.open;
  });
});