var down = function() {
    //get index of selected row, if no row is selected return 0
    var index = PF('table').originRowIndex;
    //increase row index
    index++;
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