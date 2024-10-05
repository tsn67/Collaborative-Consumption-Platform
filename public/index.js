$(".nav-btn").click(function () {
  //window.alert($(this).text());
  handleGetRequest($(this).text());
});

function handleGetRequest(url) {
  if (url == "Login") {
    window.location.href = "/login";
  } else if (url == "About") {
    window.location.href = "/about";
  } else if (url == "Contact") {
    window.location.href = "/contacts";
  }
}

var googleLogin = $(".img-container");
googleLogin.click(() => {
    window.location.href = "/auth/google";
});


document.querySelector('.div-move').addEventListener('click', function() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth' // Enables smooth scrolling
    });
});

var buttonLog = $(".btn-log");

buttonLog.click(() => {
    window.location.href = "./login?data=login-required";
});

$(".btn-log-org").click(() => {
    window.location.href = "./login";
});