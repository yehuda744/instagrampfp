
$(document).on('submit', '#form', function(e){
    e.preventDefault();
    // makes a variable from the input of the user in the form
    var input = document.getElementById('input').value;
    Submit(input);
    console.log(input);
});

function Submit(input) {
    $.ajax({
        type:'POST',
        url:'/search',
        processData: false,
        contentType: "application/json; charset=utf-8",
        async: true,
        cache: false,
        data : JSON.stringify({search:input}),
        success: function(response){
            CreateImage(response.graphql.user.profile_pic_url_hd)
        }
    });
}

function CreateImage(image) {
    var pfp = document.getElementById('img');
    pfp.src = image;
}
