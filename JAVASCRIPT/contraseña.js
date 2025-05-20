function mostrarContrasena() {
    const pass = document.getElementById("contrasena");
    const pass2 = document.getElementById("contrasena2");
    
    // Cambiar el tipo de ambos campos
    if (pass.type === "password" && pass2.type === "password") {
        pass.type = "text";
        pass2.type = "text";
    } else {
        pass.type = "password";
        pass2.type = "password";
    }
}