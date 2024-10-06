

$(".home").click(() => {
    window.location.href = "/profile-submit";
});



$(".submit").click(() => {

    var title = $(".title").val();
    var author = $(".author").val();
    var price = $(".price-val").val();

    $(".output").text("Submission Successfull.");
    setTimeout(() => {
        window.location.href = `/filter-submit?author=${author}&title=${title}&price=${price}`;
    },1000);
});
