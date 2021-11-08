async function detailLoad()
{
  
  let id = window.location.search.substring(1);
  console.log(id);
  const movieDetails = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=b66ef56fa8d1846c761d5a9463806cb5`)
  const film = await movieDetails.json(); 
  const movieCastsList = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=b66ef56fa8d1846c761d5a9463806cb5`)
  const castsList = await movieCastsList.json(); 
  console.log(film);
  
  var genreStr ="";
  for(let genre of film.genres)
  {
      genreStr = genreStr + genre.name + ";"
  }
  var castStr ="";
  for(let cast of castsList.cast)
  {
    castStr = castStr + cast.name + ";"
  }
  $('.container').append(`
  <div class="row">
  <div class="col" >
      <div class="card">
        <img class="card-img-top" src="https://image.tmdb.org/t/p/original${film.poster_path}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${film.title}</p>
          <p>Over view:</p>
          <p>${film.overview}</p>
          <p>Actors:</p>
          <p> ${castStr} </p>
          <p>Genres:</p>
          <p> ${genreStr} </p>
          <p>Release date: ${film.release_date}</p>
        </div>
      </div>
    </div>
    </div>`);
    
    for(let cast of castsList.cast)
    {
        $('.myrow').append(`<div class="col-lg-4 d-flex align-items-stretch" onclick = getActorDetail(${cast.id})>
        <div class="card">
          <img class="card-img-top" style="width: 18rem;" src="https://image.tmdb.org/t/p/original${cast.profile_path}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Actor name: ${cast.original_name}</p>
            <p>Character : ${cast.character}</p>
          </div>
        </div>
      </div>`)
    }
    for(let crew of castsList.crew)
    {
        $('.myrow').append(`<div class="col-lg-4 d-flex align-items-stretch">
        <div class="card">
          <img class="card-img-top" style="width: 18rem;" src="https://image.tmdb.org/t/p/original${crew.profile_path}" alt="Card image cap">
          <div class="card-body">
            <p class="card-text">Crew name: ${crew.original_name}</p>
            <p class="card-text">Crew Department: ${crew.department}</p>
            <p class="card-text">Crew Job: ${crew.job}</p>
          </div>
        </div>
      </div>`)
    }
    
}
$(window).ready(function(){
    detailLoad();
    });

    
function getActorDetail(id)
{
  window.open(`actordetail.html?${id}`);
 
}