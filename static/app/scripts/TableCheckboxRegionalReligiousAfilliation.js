$(document).ready(function () {
    var filter_magic = function (e) {
        var tableRows = $('#regional-religiousAffiliation-table tr:not(:first)');

        tableRows.hide();
        var showAll = true;
        $('input[type="checkbox"][name="regionalReligiousAfilliation"]').each(function () {
            if ($(this).is(':checked')) {
                var val = $(this).val();
                tableRows.each(function () {
                    var tr = $(this);
                    var td = tr.find('td:nth-child(2)');
                    if (td.text() === val) {
                        tr.show();
                        showAll = false;
                    }
                });
            }
        });
        if (showAll) {
            tableRows.show();
        }
    };

    $('input[type="checkbox"][name="regionalReligiousAfilliation"]').on('change', filter_magic);
    filter_magic();
});