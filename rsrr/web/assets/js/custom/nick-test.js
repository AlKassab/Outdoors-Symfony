$(document).ready(function () {
    $(".nick-input").blur(function () {
        var username = this.value;
        $.ajax({
            url: URL+'/nick-test',
            data: {username: username},
            type: 'POST',
            success: function(response){
                if (response == "used"){
                    $(".nick-input").css("border", "1px solid red")
                }else{
                    $(".nick-input").css("border", "1px solid green")
                }
            }
        })
    })
})