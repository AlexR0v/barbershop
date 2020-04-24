var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=login]");
var password = popup.querySelector("[name=password]");
var storage = localStorage.getItem("login");
var maplink = document.querySelector(".contact-button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-close-map");

form.addEventListener("submit", function(evt){
    if(!login.value || !password.value){
        evt.preventDefault();
        console.log("Нужно ввести логин и пароль!");
    } else{

    }
});

form.addEventListener("submit", function(evt){
    evt.preventDefault ();
    console.log(login.value);
    console.log(password.value);
});

link.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
        login.value = storage;
    };
});

maplink.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show-map");
});

close.addEventListener("click", function(evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

mapClose.addEventListener("click", function(evt){
    evt.preventDefault();
    mapPopup.classList.remove("modal-show-map");
});

window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27){
        if (popup.classList.contains("modal-show")){
            evt.preventDefault();
            popup.classList.remove("modal-show");
        }
    }

});

window.addEventListener("keydown", function (evt){
    if (evt.keyCode === 27){
        if (mapPopup.classList.contains("modal-show-map")){
            evt.preventDefault();
            mapPopup.classList.remove("modal-show-map");
        }
    }

});

form.addEventListener("submit", function(evt){
    if (!login.value || !password.value){
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.offsetWidth = popup.offsetWidth;
  popup.classList.add("modal-error");
} else{ 
  if (isStorageSupport){
      localStorage.setItem("login", login.value);
  }
}
});