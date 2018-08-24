<?php
	$this->load->view('includes/header');
?>


<div style="margin-left:28%;width:28%; ">
	<table id="get_all_data" class="table table-striped" style="color:#fff;">
		<thead>
			<tr style="background: #84BB20;">
				<th><div>Id</div></th>
				<th><div>Pair</div></th>
				<th><div>Price</div></th>
				<th><div>Change</div></th>
				

			</tr>
		</thead>
		<tbody>

		</tbody>
	</table></br>
			
	
 </div>



<?php
	$this->load->view('includes/footer');
?>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

<script type="text/javascript">
	
	$(document).ready(function(){
		setInterval(function() {
			$.ajax({
	             type: "GET",
	             url: "<?php echo base_url()?>" + "Test/get_data/",
	             dataType: 'json',
	             data: {}
	           }).
	             done(function(response){
	             	console.log(response[0].pair_currency.split(','));

	             var tblSrc = '';

	             for (var i = 0; i < response.length; i++) {
	             	//console.log(response[i].price);

	             	tblSrc += '<tr>';
	             	tblSrc += '<td>'+response[i].id+'</td>';
	             	tblSrc += '<td>'+response[i].pair_currency+'</td>';
	             	tblSrc += '<td>'+response[i].price+'</td>';
	             	tblSrc += '<td>'+response[i].change_val+'</td>';


	             	tblSrc += '</tr>';
	             };

	             $('#get_all_data tbody').html(tblSrc);

	             }).fail(function(err){
	             	console.log(err);
	             });
        }, 1000);
	});
	
</script>