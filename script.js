document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector(".flex.flex-center.gap-4");
  if (!target) return;

  // Création du bouton
  const button = document.createElement("button");
  button.textContent = "SOUSCRIRE";
  button.style.padding = "10px 20px";
  button.style.margin = "10px 0";
  button.style.cursor = "pointer";

  // Création du formulaire (caché par défaut)
  const form = document.createElement("form");
  form.style.display = "none";
  form.style.flexDirection = "column";
  form.style.gap = "8px";
  form.style.marginTop = "10px";

  const fields = ["Nom", "Prenom", "Mail", "Telephone", "Adresse postale"];
  const inputs = {};

  fields.forEach((labelText) => {
    const label = document.createElement("label");
    label.textContent = labelText;
    const input = document.createElement("input");
    input.type = "text";
    input.name = labelText.toLowerCase().replace(" ", "_");
    input.style.padding = "5px";
    input.style.width = "100%";
    inputs[input.name] = input;
    label.appendChild(input);
    form.appendChild(label);
  });

  const submit = document.createElement("button");
  submit.type = "submit";
  submit.textContent = "Valider";
  submit.style.padding = "8px";
  form.appendChild(submit);

  // Afficher/masquer le formulaire
  button.addEventListener("click", () => {
    form.style.display = form.style.display === "none" ? "flex" : "none";
  });

  // Soumission du formulaire
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = {};
    for (let key in inputs) {
      data[key] = inputs[key].value;
    }

    try {
      const response = await fetch("https://your-api-endpoint.com/api/souscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      alert("Formulaire soumis avec succès !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'envoi");
    }
  });

  target.appendChild(button);
  target.appendChild(form);
});
