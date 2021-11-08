async function load(){
  const resJSON = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=b66ef56fa8d1846c761d5a9463806cb5&sort_by=vote_average.desc&page=1')
  const films = await resJSON.json(); 
  
  $('#toprate').empty();
  for(let result of films.results)
  {
    if(result.poster_path!=null && result.overview!= "")
    {
      $('#toprate').append(`<div class="col-lg-4 d-flex align-items-stretch">
      <div class="card" style="width: 18rem;" onclick=getMovieDetail(${result.id})>
        <img class="card-img-top" src="https://image.tmdb.org/t/p/original/${result.poster_path}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${result.title}</p>
          <p>Over view:</p>
          <p>${result.overview}</p>
          
          <p>Release date: ${result.release_date}</p>
        </div>
      </div>
    </div>`);
    }

  }
    
  const nowPlayings = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b66ef56fa8d1846c761d5a9463806cb5&page=1')
  const filmsplaying = await nowPlayings.json(); 
  
  for(let result of filmsplaying.results)
  {
    if(result.poster_path!=null && result.overview!= "")
    {
      $('#nowplay').append(`<div class="col-lg-4 d-flex align-items-stretch">
      <div class="card" style="width: 18rem;" onclick=getMovieDetail(${result.id})>
        <img class="card-img-top" src="https://image.tmdb.org/t/p/original/${result.poster_path}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${result.title}</p>
          <p>Over view:</p>
          <p>${result.overview}</p>
          
          <p>Release date: ${result.release_date}</p>
        </div>
      </div>
    </div>`);
    }

  }
  

 
}
$(window).ready(function(){
load();
});
async function search()
{
  
  const movieDetails = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=b66ef56fa8d1846c761d5a9463806cb5&query=${$("#input").val()}&page=1`)
  const films = await movieDetails.json(); 
  const actorMovies = await fetch(`https://api.themoviedb.org/3/search/person?api_key=b66ef56fa8d1846c761d5a9463806cb5&query=${$("#input").val()}&page=1`)
  const actorsfilms = await actorMovies.json(); 
  $('.container').empty();
  $('.container').append(`<div class="row" id="searchresult"></div>`)
  for(let result of films.results)
  {
    if(result.poster_path!=null && result.overview!= "")
    {
      $('#searchresult').append(`<div class="col-lg-4 d-flex align-items-stretch">
      <div class="card" style="width: 18rem;" onclick=getMovieDetail(${result.id})>
        <img class="card-img-top" src="https://image.tmdb.org/t/p/original/${result.poster_path}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${result.title}</p>
          <p>Over view:</p>
          <p>${result.overview}</p>
         
          <p>Release date: ${result.release_date}</p>
        </div>
      </div>
    </div>`);
    }
  }

  for(let result of actorsfilms.results)
  {
    if(result.poster_path!=null && result.overview!= "")
    {
      $('#searchresult').append(`<div class="col-lg-4 d-flex align-items-stretch">
      <div class="card" style="width: 18rem;" onclick=getMovieDetail(${result.id})>
        <img class="card-img-top" src="https://image.tmdb.org/t/p/original/${result.poster_path}" alt="Card image cap">
        <div class="card-body">
          <p class="card-text">${result.title}</p>
          <p>Over view:</p>
          <p>${result.overview}</p>
          
          <p>Release date: ${result.release_date}</p>
        </div>
      </div>
    </div>`);
    }
  }
}

function getMovieDetail(id)
{
  window.open(`moviedetal.html?${id}`);
 
}