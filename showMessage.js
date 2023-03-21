
export function showMessage(message, type = "success"){
Toastify({
    text: message,
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: type=== "success" ? "#96c93d" : "#f44336",
    },
    onClick: function(){} // Callback after click
  }).showToast();
}


export function showMessage2(message, type = "info"){
  Toastify({
      text: message,
      duration: 3000,
      newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: type=== "info" ? "#2a9aeb" : "#f44336",
      },
      onClick: function(){} // Callback after click
    }).showToast();
  }