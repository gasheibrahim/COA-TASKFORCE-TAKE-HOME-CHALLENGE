document.addEventListener('DOMContentLoaded', function() {
    const photoContainers = document.querySelectorAll('.photo__container');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close');
    // Showing a modal
    function showModal(index) {
        const container = photoContainers[index];
        const img = container.querySelector('.photo');
        modal.style.display = "block";
        modalImg.src = img.src;
    }

    photoContainers.forEach((container, index) => {
        container.addEventListener('click', function() {
            showModal(index);
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = "none";
    });
});