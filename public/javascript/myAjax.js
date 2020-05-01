// const $ = require('jquery')

$(() => {
$('#submit').on('click', ()=>{
    $.ajax()
})
})

$(() => {
   
    $.ajax({
        type: 'GET',
        url: '/api/viewVisitors',
        contentType: 'application/json',
        success: (res) => {
            console.log(res)
            let visitorsBody = $('tbody')
            visitorsBody.html('');
            res.visitors.foreach((visitor) => {
                visitorsBody.append('\
                <tr>\
                    <td class="visitorid">'+visitor.visitorid+'</td>\
                    <td class="visitorid">'+visitor.fullname+'</td>\
                    <td class="visitorid">'+visitor.fullname+'</td>\
                    <td class="visitorid">'+visitor.dateofvisi+'</td>\
                    <td> <button class= "delete">Delete</button>\
                </tr>\
                ')
            })
        }
        })
    })