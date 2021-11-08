async function detailLoad()
{
  
  let id = window.location.search.substring(1);
  console.log(id);
  const actorDetails = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=b66ef56fa8d1846c761d5a9463806cb5`)
  const actor = await actorDetails.json(); 
 
  
  $('.container').append(`
  <div class="row">
  <div class="col">
      <div class="card">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/original${actor.profile_path}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${actor.name}</p>
          <p>Over view:</p>
          <p>${actor.biography}</p>
          <p>Known for:</p>
          <p> ${actor.known_for_department} </p>
          <p>Day of birth:</p>
          <p> ${actor.birthday} </p>
          <p>Place of birth:</p>
          <p> ${actor.place_of_birth} </p>
        </div>
      </div>
    </div>
    </div>`);
  
    
}
$(window).ready(function(){
    detailLoad();
    });