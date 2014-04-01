WayPoints = function () {
	// selector
    var initiator = "[data-toggle~=waypoints]";
    $(initiator).each(function () {
		// a = $
		// e = marker
		// d = offset
		// b = showanim
		// c = hidenaim
		// f = _this
        // var b, c, d, e, f = this;
        var b, c, d, e = this;

        var _this = this;

        e = $(this).data("marker") ? $(this).data("marker") : this,
        d = $(this).data("offset") ? $(this).data("offset") : "95%",
        b = $(this).data("showanim") ? $(this).data("showanim") : "fadeIn",
        c = $(this).data("hideanim") ? $(this).data("hideanim") : !1,
        $(_this).waypoint(function (direction) {
        	console.log(b)
        	if(direction === 'down') {
        		$(_this)
        			.removeClass(c + " animated")
        			.addClass(b + " animated")
        			.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        				$(this).removeClass(b + " animated")
        			});
        	}
        	if(direction === 'up' && c !== !1) {
        		$(_this)
        			.removeClass(b + " animated")
        			.addClass(c + " animated")
        			.on("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
        				$(this).removeClass(c + " animated")
        			});
        	}
        }, {
            offset: d,
            context: '#content'
        });
    });
};

$(document).ready(function() {
	var snapper = new Snap({
	    element: document.getElementById('content'),
	    slideIntent: 5
	});
	WayPoints();

	// Demo, for animating
	$('.btn-toggle-anim').on('click', function(event) {
		event.preventDefault();
		// Cache animation
		var animation = $(this).data('anim');
		// Cache parent target
		var $target = $(this).closest('.panel');
		$target.addClass('animated ' + animation);
		$target.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(event) {
			$target.removeClass('animated ' + animation);
		});
	});

});


