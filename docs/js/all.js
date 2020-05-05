(function ($) {
    $('#citiesTable').DataTable( {
        "ajax": "http://localhost:9080/api/v1/oscar",
        "columns": [
            { "data": "Index" },
            { "data": "Year" },
            { "data": "Age" },
            { "data": "Name" },
            { "data": "Movie" }

        ]
    } );

})(jQuery);