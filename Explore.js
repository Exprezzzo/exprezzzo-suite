
document.addEventListener("DOMContentLoaded", () => {
  fetch("/vendors.json")
    .then(res => res.json())
    .then(data => {
      const sections = {};
      data.forEach(v => {
        if (!sections[v.category]) sections[v.category] = [];
        sections[v.category].push(v);
      });

      const container = document.getElementById("explore-sections");
      for (const category in sections) {
        const section = document.createElement("section");
        section.innerHTML = `
          <h2 class="text-lg font-semibold mb-2">${category}</h2>
          <div class="overflow-x-auto whitespace-nowrap space-x-3 scroll-smooth flex snap-x snap-mandatory">
            ${sections[category].map(biz => `
              <div class="inline-block w-40 snap-start bg-gray-800 rounded-lg overflow-hidden shadow-md">
                <img src="${biz.image || '/public/assets/logo-placeholder.png'}" class="w-full h-24 object-cover" alt="${biz.name}" />
                <div class="p-2">
                  <p class="text-sm font-bold truncate">${biz.name}</p>
                  <p class="text-xs text-gray-400 truncate">${biz.zone}</p>
                </div>
              </div>
            `).join('')}
          </div>
        `;
        container.appendChild(section);
      }
    });
});
