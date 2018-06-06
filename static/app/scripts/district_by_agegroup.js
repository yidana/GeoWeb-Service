$(document).ready(function () {
    $('#district-agegroup-table').DataTable({
        "columns": [
            { "data": "No." },
            { "data": "Districts" },
            { "data": "Total" },
            { "data": "Male" },
            { "data": "Female" },
            { "data": "Ages 0-14 Total" },
            { "data": "Ages 0-14 Male" },
            { "data": "Ages 0-14 Female" },
            { "data": "Ages 15-64 Total" },
            { "data": "Ages 15-64 Male" },
            { "data": "Ages 15-64 Female" },
            { "data": "Ages 65+ Total" },
            { "data": "Ages 65+ Male" },
            { "data": "Ages 65+ Female" },
            { "data": "Region" },
        ],
        "lengthMenu": [[-1, 50,25, 10 ], ["All",  50,25,10 ]]
    });
});
