// script para janela de informações de cada componente
document.addEventListener('DOMContentLoaded', () => {

    
    const gridItems = document.querySelectorAll('.grid-item');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');

    // abrir
    const openModal = (item) => {
      
        const imgSrc = item.querySelector('img').src;
        const title = item.querySelector('.item-name').textContent;
        const description = item.getAttribute('data-description');

        
        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modalDescription.textContent = description;

      
        modalOverlay.classList.add('visible');
    };

    // fechar
    const closeModal = () => {
        modalOverlay.classList.remove('visible');
    };

   
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            openModal(item);
        });
    });

  
    modalCloseBtn.addEventListener('click', closeModal);

   
    modalOverlay.addEventListener('click', (event) => {
    
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

});