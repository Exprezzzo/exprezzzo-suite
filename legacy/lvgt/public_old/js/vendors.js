// Dynamically load vendor cards (placeholder data)
const vendors = [
  { name: 'Atomic Tacos', category: 'Food', img: 'https://placehold.co/300x200' },
  { name: 'Neon Nights Club', category: 'Nightlife', img: 'https://placehold.co/300x200' },
  { name: 'Hoover Hikes', category: 'Adventure', img: 'https://placehold.co/300x200' },
];

const grid = document.getElementById('vendor-grid');
vendors.forEach(v => {
  const card = document.createElement('div');
  card.className = 'bg-gray-800 rounded shadow overflow-hidden';
  card.innerHTML = `
    <img src="${v.img}" alt="${v.name}" class="w-full h-40 object-cover">
    <div class="p-4">
      <h3 class="font-semibold">${v.name}</h3>
      <p class="text-gray-400 text-sm">${v.category}</p>
    </div>
  `;
  grid.appendChild(card);
});
