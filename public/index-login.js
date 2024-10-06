var button = $("span");
button.click(() => {
    window.location.href = "/profile-view";
});


$(".btn-buy").click(() => {
    window.location.href= "/filter";
});

var sellButton = $(".sell");
sellButton.click(() => {
    window.location.href = "/sell";
});

var donate = $(".donate");

donate.click(() => {
    window.location.href = "/donate";
});