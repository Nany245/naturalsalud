document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            event.stopPropagation(); 
            const cardToDelete = this.closest('.card'); 
            
            if (cardToDelete) {
                cardToDelete.style.transition = 'opacity 0.3s ease';
                cardToDelete.style.opacity = '0';
                
                setTimeout(() => {
                    cardToDelete.remove();
                }, 300);
            }
        });
    });
});