document.addEventListener("DOMContentLoaded", () =>{
   
    
    let closeButton = document.querySelector('.close_search'),
        topSearch =  document.querySelector('.top__search'),
        searchInput = document.querySelector('.search__input'),
        searchBlock = document.querySelector('.search-block');


    topSearch.addEventListener("click", function(e) {
        if (event.target.className == 'close_search') {
        topSearch.style.top = '-160px';
        searchInput.value = '';
    }
        
    });

    searchBlock.addEventListener("click", function(e) {
       let target = event.target.closest('search-block');
        if(target = event.target) {
        topSearch.style.top = '0';
        topSearch.style.transition = '2s easy-in-out';


        }
    });



});