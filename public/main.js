$(".press").click(function () {
    $.get('/dogs').then(function (data) {
        for (let i = 0; i < data.length; i++) {
            let name = data[i].name;
            let age = data[i].age;
            let dogTemplate = {
                name: name,
                age: age
            };
            let source = $('#dog-template').html();
            let template = Handlebars.compile(source);
            let newHTML = template(dogTemplate);
            $('.dogs').append(newHTML);
        }
    })
})