const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImg');
let currentIndex = 0;
let isZoomed = false;

const previews = document.querySelectorAll('.cert-preview');
const sources = Array.from(previews).map(img => img.src);

previews.forEach(preview => {
  preview.addEventListener('click', () => {
    currentIndex = parseInt(preview.getAttribute('data-index'));
    openModal(currentIndex);
  });
});

function openModal(index) {
  modal.style.display = 'flex';
  modalImg.src = sources[index];
  isZoomed = false;
  modal.classList.remove('zoom');
}

function closeModal() {
  modal.style.display = 'none';
  modalImg.src = '';
  modal.classList.remove('zoom');
}

function nextCert() {
  currentIndex = (currentIndex + 1) % sources.length;
  modalImg.src = sources[currentIndex];
  isZoomed = false;
  modal.classList.remove('zoom');
}

function prevCert() {
  currentIndex = (currentIndex - 1 + sources.length) % sources.length;
  modalImg.src = sources[currentIndex];
  isZoomed = false;
  modal.classList.remove('zoom');
}

function toggleZoom() {
  isZoomed = !isZoomed;
  modal.classList.toggle('zoom', isZoomed);
}
