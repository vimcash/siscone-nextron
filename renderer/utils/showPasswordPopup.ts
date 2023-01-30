import withReactContent from "sweetalert2-react-content"
import Swal from "sweetalert2"

export const showPasswordPopup = (title, adminPass, goToPage) => {
  const mySwal = withReactContent(Swal)
  mySwal.fire({
    title: `${title}`,
    input: 'password',
    inputAttributes: {
      autocapitalize: 'off'
    },
    showCancelButton: true,
    cancelButtonText: 'Cancelar',
    confirmButtonText: 'Confirmar',
    showLoaderOnConfirm: true,
    preConfirm: (password) => {
      adminPass == password? goToPage() : Swal.showValidationMessage('Contraseña invalida!')
    }
  })
}