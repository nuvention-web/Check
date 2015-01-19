$(document).ready(function() {
    $('#email-form').on('submit', function(event){
        event.preventDefault();
        var x = document.getElementById('email-text').value
        console.log(x);
        if (x == null || x == "") {
           error_fade_in()
        } else {
            create_post()
        }
    });

    $('.value-div').hover(function() {
        $(this).toggleClass('active-div');
    });

    $(window).on('scroll', function() {
        var y_scroll_pos = window.pageYOffset;
        var scroll_pos_test = 158.9;             // set to whatever you want it to be

        if(y_scroll_pos > scroll_pos_test) {
            $('#navbar-title').switchClass( "hidden", "visible", 1000, "easeInOutQuad");
        }
        else {
            $('#navbar-title').switchClass( "visible", "hidden", 1000, "easeInOutQuad" );
        }
    });

    $('a[href^="#"]').on('click', function(event) {        
        $(this).smoothScroll();
        event.preventDefault();
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
    $('#error').fadeOut(500, function() {
        $('#thank-you').fadeIn(500);
    });
    
    $('#disclaimer').fadeOut(500, function() {
        $("#thank-you").fadeIn(500);
    });
};

function error_fade_in() {
    $('#disclaimer').fadeOut(500, function() {
        $("#error").fadeIn(500);
    });   
}

