const boton = document.getElementById("boton-submit");

boton.addEventListener("click", function (e) {
  // 1. Prevenir el envío automático del formulario
  e.preventDefault();

  // 2. Obtener los elementos del DOM, no solo sus valores
  const usuarioInput = document.getElementById("usuario");
  const contraseniaInput = document.getElementById("contrasenia");

  // 3. Obtener los valores y limpiarlos
  const usuario = usuarioInput.value.trim();
  const contrasenia = contraseniaInput.value.trim();

  // 4. Validar la lógica correctamente
  if (usuario === "" || contrasenia === "") {
    usuarioInput.setCustomValidity("El usuario no puede estar vacío.");
    contraseniaInput.setCustomValidity("La contraseña no puede estar vacía.");
    // 5. Mostrar los mensajes de validación
    usuarioInput.reportValidity();
    contraseniaInput.reportValidity();
  } else {
    // Si la validación es exitosa, se limpian los mensajes
    usuarioInput.setCustomValidity("");
    contraseniaInput.setCustomValidity("");
  }
});
