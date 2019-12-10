
$(document).on('click', '#button', function(e){
        e.preventDefault();
        $.ajax({
            type:'POST',
            url:'/submitform',
            processData: false,
            contentType: "application/json; charset=utf-8",
            async: true,
            cache: false,
            data : JSON.stringify({hello:'woerd'}),
            success: function(response){
            }
        });
        // $.ajax({
        //     type:'POST',
        //     url:'/search',
        //     processData: false,
        //     dataType: 'json',
        //     contentType: "application/json; charset=utf-8",
        //     async: true,
        //     cache: false,
        //     // JSON.stringify converts {} to '{}'
        //     //sending
        //     data : JSON.stringify(jsonData),
        //     //recieving
        //     success: function(response){
        //       console.log(response);
        //         // console.log(response.graphql.user.profile_pic_url_hd);
        //         // writing to the console, the data that we grabbed from the server(specifically the pfp)
        //     }
        // });
    });
//  JSON.stringify('{data:"hello"}'),
