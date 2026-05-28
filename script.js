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





  // MENU CLICK
  $(document).on(

    "click",

    ".menu",

    function(e){

      e.preventDefault();

      $(".menu").removeClass(
        "active"
      );

      $(this).addClass(
        "active"
      );

      let page = $(this).data(
        "page"
      );

      loadPage(page);





      // AUTO CLOSE MOBILE MENU
      $("#navMenu").removeClass(
        "show"
      );

    }

  );





  // HAMBURGER
  $(document).on(

    "click",

    ".menu-toggle",

    function(){

      $("#navMenu").toggleClass(
        "show"
      );

    }

  );





  // FLOAT BUTTON
  $(document).on(

    "click",

    ".fab",

    function(){

      alert(
        "🚀 Tombol aksi ditekan!"
      );

    }

  );





  // DARK MODE
  $(document).on(

    "click",

    "#themeToggle",

    function(){

      $("body").toggleClass(
        "dark-mode"
      );





      // ICON THEME
      if(

        $("body").hasClass(
          "dark-mode"
        )

      ){

        $("#themeToggle").html(
          "☀️"
        );

        localStorage.setItem(
          "theme",
          "dark"
        );

      }

      else{

        $("#themeToggle").html(
          "🌙"
        );

        localStorage.setItem(
          "theme",
          "light"
        );

      }





      // TOAST
      $("#toast")
      .stop(true,true)
      .fadeIn();

      setTimeout(function(){

        $("#toast").fadeOut();

      },1500);

    }

  );





  // LOAD THEME
  if(

    localStorage.getItem(
      "theme"
    ) == "dark"

  ){

    $("body").addClass(
      "dark-mode"
    );

    $("#themeToggle").html(
      "☀️"
    );

  }

  else{

    $("#themeToggle").html(
      "🌙"
    );

  }





  // LOGIN
  $(document).on(

    "click",

    "#loginBtn",

    function(){

      let username =
      $("#username").val();

      let password =
      $("#password").val();





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

    }

  );





  // LOGOUT
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



});
