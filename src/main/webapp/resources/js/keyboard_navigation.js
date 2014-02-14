$("#table_div").keydown(function(event) {

    if (event.which === 40) {
        event.preventDefault();
        alert("You press down key.");
    }

});