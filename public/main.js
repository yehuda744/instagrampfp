
$(document).on('submit', '#form', function(e){
    e.preventDefault();
    var input = document.getElementById('input').value;
    var t = Date.now();
    Submit(input , t);
    console.log(input);
});

function Submit(input, t) {
    $.ajax({
        type:'POST',
        url:'/search',
        processData: false,
        contentType: "application/json; charset=utf-8",
        async: true,
        cache: false,
        data : JSON.stringify({search:input, timestamp: t}),
        success: function(response){
            console.log(`time it takes to get from client to server is ${response.timestamp}
            \ntime it takes to process request to instagram and back to client is ${Date.now() - t - response.timestamp}
            \ntime it takes for the full trip is ${Date.now()-t}`);
            CreateImage(response.data);
        }
    });
}

function CreateImage(image) {
    var pfp = document.getElementById('img');
    pfp.src = image;
}
