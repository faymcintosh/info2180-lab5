
window.onload = function () 
{   const lookup_country = document.querySelector('#lookup-country');
    const lookup_cities=document.querySelector('#lookup-cities');
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




/*window.onload = function(){
  var query = document.getElementById("country").value;
  const lookup_country = document.querySelector('#lookup-country');
  const lookup_cities=document.querySelector('#lookup-cities'); 
  var httprequest = new XMLHttpRequest();

  lookup_country.addEventListener("click", function(event){
    event.preventDefault();
      httprequest.onreadystatechange = function()
  {
      if (this.readyState == 4 && this.status == 200)
      {
          document.getElementById("result").innerHTML = this.responseText;
          alert(this.responseText.replace(/<\/?[^>]+(>|$)/g, " ")); 
      }
  };
  
  if (document.getElementById('allChkBox').checked)
  {
      var url = "world.php?all=true";
  }
  else
  {
      var url = "world.php?country="+query;
  }

  });
  
  
  httprequest.open("GET",url,true);
  httprequest.send("");
}*/
