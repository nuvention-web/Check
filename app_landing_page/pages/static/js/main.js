$(document).ready(function() {
    $('#email-form').on('submit', function(event){
        event.preventDefault();
        create_post();
    });
});

// AJAX for posting
function create_post() {
    console.log("create post is working!") // sanity check
    $.ajax({
        url : "submit_email/", // the endpoint
        type : "POST", // http method
        data : { 
            email : $('#email-text').val(),
            csrfmiddlewaretoken: csrftoken,
        }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            $('#email-text').val(''); // remove the value from the input
            console.log(json); // log the returned json to the console
            thanks_fade_in()
        },

        // handle a non-successful response
        error : function(xhr,errmsg,err) {
            $('#results').html("<div class='alert-box alert radius' data-alert>Oops! We have encountered an error: "+errmsg+
                " <a href='#' class='close'>&times;</a></div>"); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }
    });
};

function thanks_fade_in() {
    $("#thank-you").fadeIn(300);
}