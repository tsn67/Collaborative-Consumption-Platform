var home = $(".home");
home.click(() => {
    window.location.href = "/profile-submit";
});

var buy = $(".buy");
buy.click(function() { // Use a regular function here
    const price = $(this).data("price");
    const bookName = $(this).data("name");
    console.log(price+" "+bookName)
    window.location.href = `/buy?money=${price}&name=${bookName}`;
});


