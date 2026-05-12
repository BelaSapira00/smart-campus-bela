$(document).ready(function(){

  // SPLASH
  setTimeout(function(){

    $("#splash").fadeOut();

    $("#toast").fadeIn();

    setTimeout(function(){

      $("#toast").fadeOut();

    },2000);

  },2000);



  // LOAD PAGE
  function loadPage(page){

    $("#content").fadeOut(200,function(){

      $("#content").load(page,function(){

        $("#content").fadeIn(200);

      });

    });

  }



  // DEFAULT PAGE
  loadPage("dashboard.html");



  // MENU
  $(document).on("click",".menu",function(e){

    e.preventDefault();

    $(".menu").removeClass("active");

    $(this).addClass("active");

    let page = $(this).data("page");

    loadPage(page);

  });



  // NOTIFICATION
  $(document).on("click",".notif-btn",function(){

    loadPage("notifikasi.html");

  });



  // FLOAT BUTTON
  $(".fab").click(function(){

    alert("🚀 Tombol aksi ditekan!");

  });



  // =========================
  // LOGIN
  // =========================

  $(document).on("click","#loginBtn",function(){

    let username = $("#username").val();

    let password = $("#password").val();

    $("#userError").text("");
    $("#passError").text("");

    let valid = true;



    // USERNAME
    if(username == ""){

      $("#userError").text(
        "Username wajib diisi"
      );

      valid = false;

    }



    // PASSWORD
    if(password.length < 6){

      $("#passError").text(
        "Password minimal 6 karakter"
      );

      valid = false;

    }



    // LOGIN SUCCESS
    if(valid){

      localStorage.setItem(
        "username",
        username
      );

      alert(
        "Login berhasil 🚀"
      );

      window.location.href =
      "index.html";

    }

  });



  // =========================
  // LOGOUT
  // =========================

  $(document).on(
    "click",
    "#logoutBtn",
    function(){

      localStorage.clear();

      alert(
        "Logout berhasil 👋"
      );

      window.location.href =
      "login.html";

    }
  );



  // =========================
  // INSTALL PWA
  // =========================

  let deferredPrompt;

  window.addEventListener(
    "beforeinstallprompt",
    (e)=>{

      e.preventDefault();

      deferredPrompt = e;

      console.log(
        "PWA siap diinstall 🚀"
      );

    }
  );

});