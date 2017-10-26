$(document).ready(function() {
    
    $(".list-table tbody tr").click((e) =>{
        console.log('e.target: ',e.target)
        const id = e.target.parentNode.id
        const trSel = e.target.parentNode
        $(".list-table tbody").find("tr").removeClass('selected')
        $(trSel).addClass('selected')
        $(".btn-trash").css('display','none')
        $("#"+id.replace('row-','')).css('display','')
        console.log('select: ' + id)
    });
    
    $(".btn-trash").click((e) =>{
      if (confirm('Are You sure to delete this record?')){
        const id = e.target.id
        $.ajax({
            url: `nodepost/${id}`,
            type: 'DELETE',
            success: function(response) {
                if (response.success){
                    console.log('delete record: ' + id);
                    $('#'+'row-'+id).remove();
                }
            }
        });
      }
    })

})