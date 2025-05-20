<?php 
    $servidor="localhost";
    $usuario="root";
    $contraseña="";
    $basededatos="ejemplo";


    $enlace=mysqli_connect($servidor, $usuario, $contraseña, $basededatos);

?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name ="viewport" content="width=device-width, initial-scale=1.0" />
<title>Inicio de Sesión</title>
<link rel="stylesheet" href="http://localhost/ejemplo/CSS/registrarse.css">
</head>

<body>

<div class="container">
    <h1>Bienvenido/a</h1>
    <div class="login-box">
    <h2>Registrarse</h2>
    <form action="#" name="ejemplo" method="post">

        <label for="usuario">Usuario</label>
        <input type="text" id="usuario" name="nombre" placeholder="Ingresa tu nombre de usuario" required />
    
        <label for="correo">Correo electrónico</label>
        <input type="email" id="correo" name="email" placeholder="Ingresa tu correo" required />
    
        <label for="contrasena">Contraseña</label>
        <input type="password" id="contrasena" name="contraseña" placeholder="Ingresa tu contraseña" required />
    
        <label for="contrasena2">Confirmar Contraseña</label>
        <input type="password" id="contrasena2" name="contraseña2" placeholder="Confirma tu contraseña" required />
    
        <div class="checkbox-container">
            <input type="checkbox" id="mostrar" onclick="mostrarContrasena()" />
            <label for="mostrar">Mostrar contraseña</label>
            </div>
        <form id="rolform">
        <label for="rol">Rol</label>
        <select id="rol" name="roles" required>
            <option value="" disabled selected>Seleccionar</option>
            <option value="estudiante">Estudiante</option>
            <option value="profesor">Profesor</option>
            <option value="administrador">Administrador</option>
        </select>
    
        <button type="submit" name="ingresar">Ingresar</button>
    </form>
    </form>
</div>


<script src="/JAVASCRIPT/contraseña.js"></script>

</body>
</html>

<?php 

if(isset($_POST['ingresar'])){
    $nombre=$_POST['nombre'];
    $correo=$_POST['email'];
    $contraseña=$_POST['contraseña'];
    $contraseña2=$_POST['contraseña2'];
    $rol=$_POST['roles'];

    if (isset($_POST['email'])){
        $email = $_POST['email'];
    } else {
        $email = null;
    }

    
    $insertardatos="INSERT INTO datos (nombre, email, contraseña, rol) VALUES ('$nombre', '$correo', '$contraseña', '$rol')";

    $insertarejecutar=mysqli_query($enlace, $insertardatos);

    if ($insertarejecutar) {
        if ($rol === 'administrador') {
            header("Location: HTML/index.html"); 
        } elseif ($rol === 'profesor') {
            header(header: "Location: HTML/VISTA_PROFESOR/principallector1.html"); 
        } elseif ($rol === 'estudiante') {
            header(header: "Location: HTML/VISTA_ESTUDIANTE/principallector2.html"); 
        } else {
            echo "Rol no válido. No se puede redirigir.";
        }
        exit;
    } else {
        echo "Error al insertar los datos: " . mysqli_error($enlace);
    }
}



?>