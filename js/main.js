let searchByWordInput = document.getElementById('searchByWord')
let searchByApiInput = document.getElementById('searchByApi')
let movieContainer = []
let wordSearch = 'mad'
let leftWidth = $('.navbar .left').innerWidth();


async function getMovie()
{
    let response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=1e145b8634b1d5db770473ff360c6bf3&fbclid=IwAR2lnhUp3_usQ6zojDvbc57IAoE85udUJ6Q1FoVPQLIpqTad-8GOXUOoWGA')
    let finalResponse = await response.json()
    movieContainer = finalResponse.results
    console.log(movieContainer)
    displayMovies(movieContainer)
}
getMovie()

async function getNavMovies(category)
{
    let response = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=1e145b8634b1d5db770473ff360c6bf3&fbclid=IwAR2lnhUp3_usQ6zojDvbc57IAoE85udUJ6Q1FoVPQLIpqTad-8GOXUOoWGA&language=en-US&page=1`)
    let finalResponse = await response.json()
    movieContainer = finalResponse.results
    console.log(movieContainer)
    displayMovies(movieContainer)
}

async function getApiForSearch()
{
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${wordSearch}&api_key=1e145b8634b1d5db770473ff360c6bf3&language=en-US&include_adult=false`)
    let finalResponse = await response.json()
    movieContainer = finalResponse.results
    console.log(movieContainer)
    displayMovies(movieContainer)
}

searchByApiInput.addEventListener('keyup',function ()
{
    wordSearch = searchByApiInput.value
    console.log(wordSearch)
    getApiForSearch()
})

function displayMovies(list)
{
    let box = ``
    for (let i = 0; i < list.length; i++)
    {
        let movieName = list[i].name || list[i].title
        let overview = list[i].overview
        let voteAverage = list[i].vote_average
        let relaseDate = list[i].first_air_date || list[i].release_date

        box += `<div class="col-md-4 my-3">
                    <img class="w-100" src="https://image.tmdb.org/t/p/w500${list[i].poster_path}" alt="${[i]}">
                    <div class="movieData"
                        <h3></h3>
                        <h3 class="fw-bolder">${movieName}</h3>
                        <p class="m-5">${overview}</p>
                        <h4 class="mb-5 fw-bold">${voteAverage}</h4>
                        <h4 class="fw-bold">${relaseDate}</h4>
                    </div>
                </div>`
    }
    document.getElementById('rowData').innerHTML = box
}

// function searchByWord (searchTerm)
// {
//     const res = movieContainer.filter(o => o['name'||'title'] != null && o['name'||'title'].toLowerCase().includes(searchTerm.toLowerCase()));
//     displayMovies(res);
// }

$('.toggle-menu').click(function()
{
    if($('.navbar').css('left') == '0px')
    {
        $('.navbar').animate({left: `-${leftWidth}`});
        $('body').animate({paddingLeft:'0px'})
    }
    else
    {
        $('.navbar').animate({left : '0px'}); 
        $('body').animate({paddingLeft:`${leftWidth}`})
        $('.left .nav-item ul li').slideDown(1000)
    }
})

function contactUs ()
{
    if( nameValidation() == true && emailValidation() == true && numberValiation() == true && 
        ageValidation() == true && passwordValidation() == true && repasswordValidation() == true)
    {
        return true ;
    }
    else
    {
        alert('you have a proplem')
        return false  ;
    }
}

function nameValidation ()
{
    let nameInput =document.getElementById('nameInput');
    let nameRegex = /^[A-Za-z]{3,12}( ?[A-Za-z]{3,12})?$/
    if(nameRegex.test(nameInput.value)==true && nameInput.value != "" )
    {
        return true ; 
    }
    else
    {
        return false ; 
    }
}

function emailValidation ()
{
    let emailInput = document.getElementById('emailInput');
    let emailRegex = /@[A-Za-z]{5-12}(\.com|\.net)$/
    if(emailRegex.test(emailInput.value)==true && emailInput.value !="" )
    {
        return true ; 
    }
    else
    {
        return false
    }
}

function numberValiation ()
{
    let numberInput = document.getElementById('phoneInput');
    let numberRegex = /^01[0125][0-9]{8}$/
    if(numberRegex.test(numberInput.value)==true && numberInput.value !="" )
    {
        return true ; 
    }
    else
    {
        return false
    }
}

function ageValidation ()
{
    let ageInput = document.getElementById('ageInput')
    let ageRegex = /^[1-9]?[0-9]?$/
    if(ageRegex.test(ageInput.value)==true && ageInput.value !="" )
    {
        return true ; 
    }
    else
    {
        return false
    }
}

function passwordValidation ()
{
    let passwordInput = document.getElementById('passwordInput')
    let passwordRegex = /^.{5,15}$/
    if(passwordRegex.test(passwordInput.value)==true && passwordInput.value !="" )
    {
        return true ; 
    }
    else
    {
        return false
    }
}

function repasswordValidation ()
{
    let repasswordInput = document.getElementById('rePasswordInput')
    let repasswordRegex = /^.{5,15}$/
    if(repasswordRegex.test(repasswordInput.value) == true && repasswordInput.value != "" )
    {
        return true ; 
    }
    else
    {
        return false
    }
}


