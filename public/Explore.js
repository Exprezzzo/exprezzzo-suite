document.addEventListener("DOMContentLoaded", async () => {
  const hero = document.getElementById("hero");
  const pills = document.getElementById("pills");
  const categoriesEl = document.getElementById("categories");

  const heroUrl = "/assets/fallback-hero.jpg";
  hero.style.backgroundImage = `url('${heroUrl}')`;

  const resCat = await fetch("categories.json");
  const resVen = await fetch("vendors.json");
  const categories = await resCat.json();
  const vendors = await resVen.json();

  const allCategories = categories.map(c => c.name);
  allCategories.forEach(cat => {
    const pill = document.createElement("button");
    pill.className = "bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-4 py-2 rounded-full";
    pill.textContent = cat;
    pills.appendChild(pill);
  });

  categories.forEach(({ name }) => {
    const section = document.createElement("div");
    section.className = "p-4";
    const title = document.createElement("h2");
    title.className = "text-xl font-bold text-vegas-gold mb-2";
    title.textContent = name;
    const row = document.createElement("div");
    row.className = "flex overflow-x-auto space-x-4 snap-x snap-mandatory";

    vendors.filter(v => v.category === name).forEach(vendor => {
      const tile = document.createElement("div");
      tile.className = "min-w-[140px] bg-white text-black rounded-lg p-2 snap-start";
      tile.innerHTML = `
        <img src="${vendor.logo || '/assets/fallback-logo.jpg'}" class="w-full h-20 object-cover rounded" />
        <p class="font-bold mt-2">${vendor.name}</p>
        <p class="text-xs text-gray-600">${vendor.zone || ''}</p>
      `;
      row.appendChild(tile);
    });

    section.appendChild(title);
    section.appendChild(row);
    categoriesEl.appendChild(section);
  });
});
