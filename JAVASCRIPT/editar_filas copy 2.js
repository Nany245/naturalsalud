
document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los botones de editar
    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function () {
            // Encuentra la fila a editar
            const rowToEdit = this.closest('tr');
            const cells = rowToEdit.querySelectorAll('td');
            const currentName = cells[0].textContent; // Obtiene el nombre actual del profesor
            
            // Crea el modal de edición
            const modal = document.createElement('div');
            modal.classList.add('edit-modal');
            modal.innerHTML = `
            <head>
                <link rel="stylesheet" href="../CSS/editarfilasjs.css">
            </head>
                <div class="modal-overlay"></div>
                <div class="modal-container">
                    <div class="modal-header">
                        <h2>Editar Maestro</h2>
                        <span class="close-modal">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="edit-professor-name">Nombre del profesor:</label>
                            <input type="text" id="edit-professor-name" value="${currentName}">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="save-changes-btn" class="btn btn-primary">Guardar Cambios</button>
                        <button id="cancel-edit-btn" class="btn btn-secondary">Cancelar</button>
                    </div>
                </div>
            `;
            
            // Agrega el modal al body
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden'; // Evita scroll en el fondo
            
            // Enfoca el input automáticamente
            document.getElementById('edit-professor-name').focus();
            
            // Función para cerrar el modal
            const closeModal = () => {
                modal.remove();
                document.body.style.overflow = 'auto';
            };
            
            // Evento para guardar cambios
            document.getElementById('save-changes-btn').addEventListener('click', function () {
                const newName = document.getElementById('edit-professor-name').value.trim();
                
                if (newName !== '') {
                    cells[0].textContent = newName; // Actualiza el nombre en la tabla
                    
                    // Aquí puedes agregar código para guardar en la base de datos
                    // Ejemplo con fetch:
                    /*
                    fetch('/api/update-professor', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            id: rowToEdit.dataset.id, 
                            name: newName 
                        })
                    });
                    */
                    
                    // Muestra mensaje de éxito
                    const successMsg = document.createElement('div');
                    successMsg.className = 'alert success';
                    successMsg.textContent = '¡Cambios guardados exitosamente!';
                    document.body.appendChild(successMsg);
                    
                    setTimeout(() => successMsg.remove(), 3000);
                }
                
                closeModal();
            });
            
            // Evento para cancelar
            document.getElementById('cancel-edit-btn').addEventListener('click', closeModal);
            
            // Cerrar al hacer clic en la X o fuera del modal
            document.querySelector('.close-modal').addEventListener('click', closeModal);
            document.querySelector('.modal-overlay').addEventListener('click', closeModal);
            
            // Cerrar con tecla ESC
            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escHandler);
                }
            });
        });
    });
});