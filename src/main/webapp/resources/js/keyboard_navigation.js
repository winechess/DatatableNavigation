var down = function() {
    //If no rows selected, select first row
    if (PF('table').selection.length === 0) {
        PF('table').selectRow(0);
        return;
    }
    //get index of selected row, if no row is selected return 0
    var index = PF('table').originRowIndex;
    //get amount of rows in the table
    var rows = PF('table').tbody[0].childElementCount;
    //increase row index
    index++;
    //if new index equals number of rows, set index to first row
    if (index === rows) {
        index = 0;
    }
    //deselect all selected rows
    PF('table').unselectAllRows();
    //select new row 
    PF('table').selectRow(index);
    //change originRowIndex value
    PF('table').originRowIndex = index;
};

var up = function() {
    var rows = PF('table').tbody[0].childElementCount;
    var index = PF('table').originRowIndex;

    if (index === 0) {
        index = rows - 1;
    } else {
        index--;
    }

    PF('table').unselectAllRows();
    PF('table').selectRow(index);
    PF('table').originRowIndex = index;
}

var enter = function() {
    updateCarDialog();
    PF('carDialog').show();
}

var hide = function() {
    PF('carDialog').hide();
}

$("#table_div").keydown(function(event) {

    if (event.which === 38) {
        event.preventDefault();
        up();
    }

    if (event.which === 40) {
        event.preventDefault();
        down();
    }

    if (event.which === 13) {
        event.preventDefault();
        enter();
    }

    if (event.which === 27) {
        event.preventDefault();
        hide();
    }
});