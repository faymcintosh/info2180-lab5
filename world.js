
window.onload = function () 
{   
    const lookup_cities=document.querySelector('#lookup-cities');
    const lookup_country = document.querySelector('#lookup-country');
    var result = document.querySelector('#result');
   

    lookup_cities.addEventListener('click', function(e) {
      e.preventDefault();
      var search =document.getElementById("country").value;
      $.ajax({
        url: 'world.php',
        type: 'GET',
        data: { "country": search,"context":"cities"},
        success: function(response) 
        {result.innerHTML=response;}
    
      });         
  });
    lookup_country.addEventListener('click', function(e) {
        e.preventDefault();
        var search =document.getElementById("country").value;
        $.ajax({
          url: 'world.php',
          type: 'GET',
          data: { "country": search,"context":"countries"},
          success: function(response) 
          {result.innerHTML=response;}
      
        });         
    });
    

    
}




