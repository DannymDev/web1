document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('.footer-social img');
    images.forEach(function(image) {
      image.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
        this.style.filter = 'brightness(1.2)';
      });
  
      image.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.filter = 'brightness(1)';
      });
  
      image.addEventListener('click', function(event) {
        event.preventDefault();
        var url = this.parentNode.getAttribute('href');
        window.open(url, '_blank');
      });
    });
  });
  