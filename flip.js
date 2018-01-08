function flip(x){
    var el = document.getElementById(x);
    el.classList.toggle('flip');
}

/*var current_page = 1;
var records_per_page = 1;

var objJson = [document.getElementsByClassName("row")]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("nxt");
    var btn_prev = document.getElementById("prev");
    var paginationtable = document.getElementById("pagi1");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    paginationtable.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page) && i < objJson.length; i++) {
        listing_table.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.disabled = true;
    } else {
        btn_prev.disabled = false;
    }

    if (page == numPages()) {
        btn_next.disabled = true;
    } else {
        btn_next.disabled = false;
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}
window.onload = function() {
    changePage(1);
};
*/


$(document).ready(function() { 
    pageSize = 1;
    pagesCount = $(".row").length;
    var currentPage = 1;
    var pages = $('.num li');
    var totalPages = Math.ceil(pagesCount / pageSize);
    

    $(".num").first().addClass("active");

    $(".pagination li.num").click(function() {
        $(".pagination li").removeClass("active");
        $(this).addClass("active");
        currentPage = parseInt($(this).text());
       /* if(currentPage == 1){
            $("li.pag_prev").off();
        }
        else if(currentPage == 6){
            $("li.pag_next").off();
        }
        else {
        }*/
        showPage();
    });
    
    showPage = function() {
        $(".row").hide().each(function(n) {
            if (n >= pageSize * (currentPage - 1) && n < pageSize * currentPage)
                $(this).show();
        });
    }
    showPage();


    $(".pagination li.pag_prev").click(function() {
        if($(this).next().is('.active')) return;
        $('.num.active').removeClass('active').prev().addClass('active');
        currentPage = currentPage > 1 ? (currentPage-1) : 1;
        if(currentPage == 1){
            $("li.pag_prev").off();
        }
        showPage();
    });

    $(".pagination li.pag_next").click(function() {
        if($(this).prev().is('.active')) return;
        $('.num.active').removeClass('active').next().addClass('active');
        currentPage = currentPage < totalPages ? (currentPage+1) : totalPages;
        if(currentPage == 5){
            $("li.pag_next").off();
        }
        showPage();
    });
});