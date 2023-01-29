function getIP() {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
        document.getElementById("ip").innerHTML = "Dirección IP: " + data.ip;
      });
  }
  
  function getNavigator() {
    document.getElementById("browser").innerHTML = 
      "Navegador: " + navigator.userAgent;
  }
  
  window.onload = function() {
    getIP();
    getNavigator();
  };


window.onload = function() {
    getIP();
    getNavigator();
    // Verifica si la cookie existe
    var color = getCookie("color");
    if (color == "") {
      // Si no existe, la crea con un valor por defecto
      color = "lightgray";
      setCookie("color", color, 30);
    }
    // Ajusta el color de fondo del div
    document.getElementById("cuadro").style.backgroundColor = color;
  };
  
  // Función para crear una cookie
  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  // Función para leer una cookie
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  