$(document).ready(function() {
    "use strict";

    console.log('lll');

    var people = [
        {
            name: "Fred",
            favColor: "red"
        },
        {
            name: "Sally",
            favColor: "blue"
        },
        {
            name: "Tom",
            favColor: "yellow"
        }
    ];

    $("#add-names-btn").click(function () {
            // $('#names-list').html('<ul>' +
            //     '<li>'+ people[0].name + ' '+people[0].favColor+'</li>'+
            // '<li>'+ people[1].name + ' '+people[1].favColor+'</li>'+
            //     '<li>'+ people[2].name + ' '+people[2].favColor+'</li>'
         //     + '</ul>')
        // for (var i =0 ; i < people.length ; i++){
        // $('#names-list').html(
        //     '<ul>'+ '<li>'+
        //     people[].name + people[].favColor + '</li>'
        //     +'</li>'
        // )
        // }

        // $('#names-list').each(function( index , value ) {
        //     var allHtml = '<ul>';
        //     $(this).each(function (i , v) {
        //         allHtml += '<li>';
        //         allHtml += i.name;
        //         allHtml += '</li>'
        //     })
        //     allHtml += '</ul>'
        //     return allHtml
        // });

        $('#add-names-btn').click(function () {
            // adds ul when button is clicked
            $('#names-list').html('<ul></ul>'); // may be a way to add ul and names all at one?

            // Using .each, goes through each object
            $.each(people, function (i, value) {
                // adds li's and names to ul
                $('ul').append('<li>' + people[i].name + '</li>');
            });
            $('#add-names-btn').click(function () {
               $("#names-list").hide()
            });
        });


    })
})