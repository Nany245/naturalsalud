document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.edit').forEach(button => {
        button.addEventListener('click', function() {
            const rowToEdit = this.closest('tr');
            const cells = rowToEdit.querySelectorAll('td');
            const currentName = cells[0].textContent; 
            
            const modal = document.createElement('div');
            modal.classList.add('edit-modal');
            modal.innerHTML = `
            <head>
                <link rel="stylesheet" href="../CSS/editarfilasjs.css">
            </head>
                <div class="modal-overlay"></div>
                <div class="modal-container">
                    <div class="modal-header">
                        <h2>Editar Curso</h2>
                        <span class="close-modal">&times;</span>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="edit-course-name">Nombre del curso:</label>
                            <input type="text" id="edit-course-name" value="${currentName}">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button id="save-changes-btn" class="btn btn-primary">Guardar Cambios</button>
                        <button id="cancel-edit-btn" class="btn btn-secondary">Cancelar</button>
                    </div>
                </div>
            `;
            
            
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
            
            document.getElementById('edit-course-name').focus();
            
            const closeModal = () => {
                modal.remove();
                document.body.style.overflow = 'auto';
            };
            
            document.getElementById('save-changes-btn').addEventListener('click', function() {
                const newName = document.getElementById('edit-course-name').value.trim();
                
                if (newName !== '') {
                    cells[0].textContent = newName; 
                    
                    const successMsg = document.createElement('div');
                    successMsg.className = 'alert success';
                    successMsg.textContent = '¡Cambios guardados exitosamente!';
                    document.body.appendChild(successMsg);
                    
                    setTimeout(() => successMsg.remove(), 3000);
                }
                
                closeModal();
            });
            
            document.getElementById('cancel-edit-btn').addEventListener('click', closeModal);
            document.querySelector('.close-modal').addEventListener('click', closeModal);
            document.querySelector('.modal-overlay').addEventListener('click', closeModal);
            
            document.addEventListener('keydown', function escHandler(e) {
                if (e.key === 'Escape') {
                    closeModal();
                    document.removeEventListener('keydown', escHandler);
                }
            });
        });
    });
});