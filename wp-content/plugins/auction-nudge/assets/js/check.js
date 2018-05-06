/**
 * DO NOT EDIT THIS FILE!
 *
 * Information on customising Auction Nudge can be found here:
 * https://www.auctionnudge.com/customize/behaviour
 *
 */
 window.addEventListener("load", function() {
	var an_load_check = document.getElementById('an-load-check');
	
	if(an_load_check.offsetWidth || an_load_check.offsetHeight || an_load_check.getClientRects().length) {
		var an_item_container = document.getElementById('auction-nudge-items');
		if(an_item_container != null) {
			an_item_container.className += ' auction-nudge';			
		}

		var an_profile_container = document.getElementById('auction-nudge-profile');
		if(an_profile_container != null) {
			an_profile_container.className += ' auction-nudge';			
		}

		var an_feedback_container = document.getElementById('auction-nudge-feedback');
		if(an_feedback_container != null) {
			an_feedback_container.className += ' auction-nudge';			
		}
	}
});