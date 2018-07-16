( function( $ ) {
	fm.datepicker = {
		add_datepicker: function() {
			$( '.fm-datepicker-popup' ).each( function() {
				// Do not apply to a field in a prototype block.
				if ( fm.is_proto_field( this ) ) {
					return;
				}

				// Do not apply if the datepicker has already been bound.
				if ( !$( this ).hasClass( 'fm-has-date-picker' ) ) {
					var opts = $( this ).data( 'datepicker-opts' );
					$( this ).datepicker( opts ).addClass( 'fm-has-date-picker' );
				}
			} );
		}
	};

	$( document ).ready( fm.datepicker.add_datepicker );
	$( document ).on( 'fm_collapsible_toggle fm_added_element fm_displayif_toggle fm_activate_tab', fm.datepicker.add_datepicker );
} ) ( jQuery );