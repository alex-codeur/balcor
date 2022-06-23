let filteredComptes = [...comptes];

const plan = document.querySelector('.plan');

const displayComptes = () => {
  if (filteredComptes.length < 1) {
    plan.innerHTML = `<h6>Sorry, no comptes matched your search</h6>`;
    return;
  }

  plan.innerHTML = filteredComptes
    .map((compte) => {
      const { id, libelle } = compte;

      


      return `
      <div class="card border-secondary mb-3" style="position: relative;
      border-radius: 15px;" data-id="${id}" id="${libelle}">
      <div class="card-header">Compte    N*${id}</div>
      <div class="card-body text-secondary">
        <h5 class="card-title">${id}</h5>
        <p class="card-text">${libelle}</p>
      </div>
    </div>`;
    })
    .join('');
};

displayComptes();

// Text Filter

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', () => {
  const inputValue = searchInput.value;
  filteredComptes = comptes.filter((compte) => {
    return compte.libelle.toLowerCase().includes(inputValue);
  });
  displayComptes();
});
