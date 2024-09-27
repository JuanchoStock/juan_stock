// ! REALIZAR LA LÓGICA DE REGISTRO DE USUARIOS AQUÍ

import "./style.css";
// Obtener la sesión del usuario actual
const session = async => (response.json())[0];
// Guardar la sesión en el local storage
localStorage.setItem("session", JSON.stringify(session));
// Redireccionar al dashboard
window.location.href = "/dashboard";