console.log($);

$("#teleport-btn").click(() => {

    console.log("hello");

    // Teleportation mechanism
    const temp = $(".input-right").val();
    $(".input-right").val($(".input-left").val());
    $(".input-left").val(temp);

    

    document.title = "success";
})