	var marker =document.querySelector('#marker');
    var menu =document.querySelectorAll('nav a');

	function indicator(e) {
	marker.style.left = e.offsetLeft + "px";
	marker.style.width = e.offsetWidth + "px";
    }

    menu.forEach(link => {
	    link.addEventListener('mouseover', (e)=>{
	    	indicator(e.target);
	})
})

    