//menu function
		function openNav() 
			{
			  document.getElementById("mySidenav").style.width = "250px";
			}

			function closeNav() 
			{
			  document.getElementById("mySidenav").style.width = "0";
			}
			
//details window
			var modal = document.getElementById("myModal");


			var btn = document.getElementById("myBtn");


			var span = document.getElementsByClassName("close")[0];


			btn.onclick = function() 
			{
			  modal.style.display = "block";
			}


			span.onclick = function() 
			{
			  modal.style.display = "none";
			}


			window.onclick = function(event) 
			{
			  if (event.target == modal) 
			  {
				modal.style.display = "none";
			  }
			}
			
			
//slideshow			
		var slideIndex = 0;
		showSlides();

		function showSlides() 
			{
			  var i;
			  var slides = document.getElementsByClassName("mySlides fade");
			  var dots = document.getElementsByClassName("dot");
			  for (i = 0; i < slides.length; i++) 
			  {
				slides[i].style.display = "none";  
			  }
			  slideIndex++;
			  if (slideIndex > slides.length) {slideIndex = 1}    
			  for (i = 0; i < dots.length; i++) 
			  {
				dots[i].className = dots[i].className.replace(" active", "");
			  }
			  slides[slideIndex-1].style.display = "block";  
			  dots[slideIndex-1].className += " active";
			  setTimeout(showSlides, 2000); // Change image every 2 seconds
			}