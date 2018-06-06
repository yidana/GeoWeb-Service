$(document).ready(function () {
    $('#example').DataTable({
        "columns": [
            { "data": "No." },
            { "data": "District" },
            { "data": "Capita" },
            { "data": "Total" },
            { "data": "Male" },
            { "data": "Female" },
            { "data": "Region" },
        ],
        "lengthMenu": [[-1, 50, 25, 10], ["All", 50, 25, 10]]
    });
});