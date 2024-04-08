$(document).on('submit', '#post-form', function(e){
    e.preventDefault();

    $.ajax({
        type:'POST',
        url:'/send',
        data:{
                username:$('#username').val(),
                room_id:$('#room_id').val(),
                message:$('#message').val(),
                csrfmiddlewaretoken:$('input[name=csrfmiddlewaretoken]').val(),
        },
        //la réponse HTTP pour signaler que le message a été envoyé avec succes
        success: function(data){
            //alert(data)
        }

    });
    document.getElementById('message').value = ''
});