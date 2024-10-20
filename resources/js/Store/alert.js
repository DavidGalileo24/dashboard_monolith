import { defineStore } from "pinia";
import Swal from "sweetalert2/dist/sweetalert2.js";

export const useAlertStore = defineStore("alert", {
    state: () => ({
        message: "",
        showItemMenu: false,
        showItemMenu2: false,
    }),
    actions: {
        successAlert(message) {
            Swal.fire({
                toast: true,
                icon: "success",
                title: message + " satisfactoriamente",
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        },
        errorAlert(message) {
            Swal.fire({
                toast: true,
                icon: "error",
                title: "Ha ocurrido un error con la solicitud realizada",
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        },
        warningAlert(message) {
            Swal.fire({
                toast: true,
                icon: "warning",
                title: message,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        },
        infoAlert(message) {
            Swal.fire({
                toast: true,
                icon: "info",
                title: message,
                position: "bottom-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        },
        showSubmenu(status){
            this.showItemMenu = true;
            if(status == true){
                this.hideSubmenu();
            }
        },
        hideSubmenu(){
            this.showItemMenu = false;
        },
        showSubmenu2(status){
            this.showItemMenu2 = true;
            if(status == true){
                this.hideSubmenu2();
            }
        },
        hideSubmenu2(){
            this.showItemMenu2 = false;
        }

    },
});
