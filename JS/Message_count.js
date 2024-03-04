let unreadCount = 0;
function addCard() {
  unreadCount++;
  document.getElementById('unread-count').innerText = unreadCount;
  
  const cardSection = document.getElementById('card-section');
  const card = document.createElement('div');
  card.className = 'bg-gray-100 py-4 px-6 rounded shadow-md mt-4';
  card.innerHTML = `<div class="flex justify-between items-center"><p class="text-xl">10 Kids Unaware of Their Halloween Costume</p>
  <p class="flex gap-3 font-semibold text-base"><figure><img src="images/eye.svg" alt="eye"></figure><span class="ml-2">1,568</span></p>
  </div>
  
  `;
  cardSection.appendChild(card);
}
