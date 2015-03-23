/**
 * Created by serdimoa on 22.03.15.
 */
    var text1 = document.getElementById("first_name");
    var text2 = document.getElementById("last_name");



    $("#yourButtonId").click(function () {
        if(text1.value==""||text1.value==null && text2.value==""||text2.value==null){
            sweetAlert("Oops...", "You must fill in all fields ", "error");
        }else {
            $.ajax({
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    "key": "9OckqJjdpKNbs3X5PJKJqg",
                    "message": {
                        "from_email": "serdimoa@gmail.com",
                        "to": [
                            {
                                "email": "serdimoa@gmail.com",
                                "name": "Blog",
                                "type": "to"
                            }
                        ],
                        "autotext": "true",
                        "subject": "Blog hire",
                        "text": "" + text1.value + "-" + text2.value
                    }
                }
            }).done(function (response) {
                console.log(response); // if you"re into that sorta thing
                $(".out").show("slow");
            });
        }
    });
