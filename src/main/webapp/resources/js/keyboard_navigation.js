var down = function() {
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

$("#table_div").keydown(function(event) {

    if (event.which === 40) {
        event.preventDefault();
        down();
    }

});