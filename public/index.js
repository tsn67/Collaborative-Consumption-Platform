$(".nav-btn").click(function () {
  //window.alert($(this).text());
  handleGetRequest($(this).text());
});

function handleGetRequest(url) {
  if (url == "Login") {
    window.location.href = "login";
  } else if (url == "About") {
    windoq.location.href = "about";
  } else if (url == "Contact") {
    window.location.href = "contacts";
  }
}
