// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones de eliminar dentro de la tabla
    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Previene el comportamiento por defecto
            
            // Encuentra la fila (tr) más cercana al botón y la elimina
            const rowToDelete = this.closest('tr'); // Busca la fila contenedora
            
            if (rowToDelete) {
                // Opcional: Agrega animación de desvanecimiento
                rowToDelete.style.transition = 'opacity 0.3s ease';
                rowToDelete.style.opacity = '0';
                
                // Elimina la fila después de la animación
                setTimeout(() => {
                    rowToDelete.remove();
                    
                    // Opcional: Aquí podrías agregar lógica para actualizar tu base de datos
                    // mediante una llamada AJAX o fetch
                }, 300);
            }
        });
    });
});