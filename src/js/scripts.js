const HIGHLIGHTS = [
    {
        id: 1,
        img: 'url(/src/assets/images/slider/highlight01.jpg)',
        text: 'To create an environment in which knowledge about coffee and its sphere can be obtained',
        author: '-World Barista Cup'
    },
    {
        id: 2,
        img: 'url(/src/assets/images/slider/highlight02.jpg)',
        text: 'Live as if you were to die tomorrow. Learn as if you were to live forever.',
        author: '- Mahatma Gandhi'
    },
    {
        id: 3,
        img: 'url(/src/assets/images/slider/highlight03.jpg)',
        text: 'Be yourself; everyone else is already taken.',
        author: '- Oscar Wilde'
    },
    {
        id: 4,
        img: 'url(/src/assets/images/slider/highlight04.jpg)',
        text: 'Whenever you find yourself on the side of the majority, it is time to pause and reflect.',
        author: '- Mark Twain'
    },
    {
        id: 5,
        img: 'url(/src/assets/images/slider/highlight05.jpg)',
        text: 'A mind is like a parachute. It doesn’t work if it isn’t open.',
        author: '- Frank Zappa'
    }
];

const ARTICLES = [
    {
        id: 1,
        img: 'assets/images/posts/post-1.png',
        title: 'Wonderful Copenhagen 2021',
        date: '12/07/2021',
        description: 'Krasta aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 2,
        img: 'assets/images/posts/post-2.png',
        title: 'Nordic Barista Cup 2021 ...',
        date: '25/07/2021',
        description: 'Nordic Barista Cup 2021 will be held in Copenhagen, Denmark. Dates: 25th-27th August 2021. The theme for the 2021 seminar is: SENSORY. More information will follow on this page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 3,
        img: 'assets/images/posts/post-3.png',
        title: '2021 Winners: Norway',
        date: '01/09/2021',
        description: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo - well, at least that is what I think, since I haven\'t seen much of anything else around here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 4,
        img: 'assets/images/posts/post-4.png',
        title: 'For the coffee fans',
        date: '01/10/2021',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus quibusdam blanditiis, soluta a, doloribus inventore earum tenetur id dolores cupiditate aperiam commodi numquam deleniti non ex praesentium odio amet?'
    },
    {
        id: 5,
        img: 'assets/images/posts/post-1.png',
        title: 'Wonderful Copenhagen 2021',
        date: '12/07/2021',
        description: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 6,
        img: 'assets/images/posts/post-3.png',
        title: 'Nordic Barista Cup 2021 ...',
        date: '25/07/2021',
        description: 'Nordic Barista Cup 2021 will be held in Copenhagen, Denmark. Dates: 25th-27th August 2021. The theme for the 2021 seminar is: SENSORY. More information will follow on this page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 7,
        img: 'assets/images/posts/post-3.png',
        title: '2021 Winners: Norway',
        date: '01/09/2021',
        description: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo - well, at least that is what I think, since I haven\'t seen much of anything else around here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 8,
        img: 'assets/images/posts/post-1.png',
        title: 'For the coffee fans',
        date: '01/10/2021',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus quibusdam blanditiis, soluta a, doloribus inventore earum tenetur id dolores cupiditate aperiam commodi numquam deleniti non ex praesentium odio amet?'
    },
    {
        id: 9,
        img: 'assets/images/posts/post-1.png',
        title: 'Wonderful Copenhagen 2021',
        date: '12/07/2021',
        description: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 10,
        img: 'assets/images/posts/post-1.png',
        title: 'Nordic Barista Cup 2021 ...',
        date: '25/07/2021',
        description: 'Nordic Barista Cup 2021 will be held in Copenhagen, Denmark. Dates: 25th-27th August 2021. The theme for the 2021 seminar is: SENSORY. More information will follow on this page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 11,
        img: 'assets/images/posts/post-3.png',
        title: '2021 Winners: Norway',
        date: '01/09/2021',
        description: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo - well, at least that is what I think, since I haven\'t seen much of anything else around here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 12,
        img: 'assets/images/posts/post-2.png',
        title: 'For the coffee fans',
        date: '01/10/2021',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus quibusdam blanditiis, soluta a, doloribus inventore earum tenetur id dolores cupiditate aperiam commodi numquam deleniti non ex praesentium odio amet?'
    },
    {
        id: 13,
        img: 'assets/images/posts/post-3.png',
        title: 'Wonderful Copenhagen 2021',
        date: '12/07/2021',
        description: 'The aim is to understand the science behind our sensory perceptions. And by stimulating the senses we will improve our tasting skills. Therefore the program will be a mix of aroma sessions, basic taste theory Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 14,
        img: 'assets/images/posts/post-2.png',
        title: 'Nordic Barista Cup 2021 ...',
        date: '25/07/2021',
        description: 'Nordic Barista Cup 2021 will be held in Copenhagen, Denmark. Dates: 25th-27th August 2021. The theme for the 2021 seminar is: SENSORY. More information will follow on this page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 15,
        img: 'assets/images/posts/post-4.png',
        title: '2021 Winners: Norway',
        date: '01/09/2021',
        description: 'Oh my goodness, the final night is here! We are at the most incredible location in all of Oslo - well, at least that is what I think, since I haven\'t seen much of anything else around here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aut dignissimos expedita tempore dolores quo similique modi. Rerum, quis fugit ad possimus facilis excepturi hic libero veniam neque porro totam quibusdam ipsa est nulla voluptatem quas nihil quia distinctio pariatur mollitia illo dolor qui iusto. Molestiae et quisquam amet voluptatum cumque esse dignissimos, expedita autem. Vel, hic porro a repellendus eveniet similique quia, voluptatibus impedit aliquid ut iure alias eius exercitationem aut atque? Provident eius culpa iusto non omnis illum enim nam similique necessitatibus, vel tempora inventore corporis a voluptatibus reiciendis accusantium aspernatur, libero eaque modi minima commodi! Magni, neque.'
    },
    {
        id: 16,
        img: 'assets/images/posts/post-4.png',
        title: 'For the coffee fans',
        date: '01/10/2021',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus quibusdam blanditiis, soluta a, doloribus inventore earum tenetur id dolores cupiditate aperiam commodi numquam deleniti non ex praesentium odio amet?'
    }
];

const SPONSORS = [
    {
        id: 101,
        img: 'assets/images/sponsors/sponsor-1.png'
    },
    {
        id: 102,
        img: 'assets/images/sponsors/sponsor-2.png'
    },
    {
        id: 103,
        img: 'assets/images/sponsors/sponsor-3.png'
    },
    {
        id: 104,
        img: 'assets/images/sponsors/sponsor-4.png'
    },
    {
        id: 105,
        img: 'assets/images/sponsors/sponsor-5.png'
    },
    {
        id: 106,
        img: 'assets/images/sponsors/sponsor-6.png'
    },
    {
        id: 107,
        img: 'assets/images/sponsors/sponsor-7.png'
    },
    {
        id: 108,
        img: 'assets/images/sponsors/sponsor-8.png'
    },
    {
        id: 109,
        img: 'assets/images/sponsors/sponsor-9.png'
    },
    {
        id: 110,
        img: 'assets/images/sponsors/sponsor-10.png'
    },
    {
        id: 111,
        img: 'assets/images/sponsors/sponsor-11.png'
    },
    {
        id: 112,
        img: 'assets/images/sponsors/sponsor-12.png'
    },
    {
        id: 113,
        img: 'assets/images/sponsors/sponsor-13.png'
    },
    {
        id: 114,
        img: 'assets/images/sponsors/sponsor-14.png'
    },
    {
        id: 115,
        img: 'assets/images/sponsors/sponsor-15.png'
    },
    {
        id: 116,
        img: 'assets/images/sponsors/sponsor-16.png'
    },
    {
        id: 117,
        img: 'assets/images/sponsors/sponsor-17.png'
    },
    {
        id: 118,
        img: 'assets/images/sponsors/sponsor-18.png'
    },
    {
        id: 119,
        img: 'assets/images/sponsors/sponsor-19.png'
    },
    {
        id: 120,
        img: 'assets/images/sponsors/sponsor-20.png'
    },
    {
        id: 121,
        img: 'assets/images/sponsors/sponsor-40.png'
    },
    {
        id: 122,
        img: 'assets/images/sponsors/sponsor-41.png'
    },
];

const INSTAGRAM = [
    {
        id: 201,
        img: 'assets/images/instagram-feed/instagram-image-1.png'
    },
    {
        id: 202,
        img: 'assets/images/instagram-feed/instagram-image-2.png'
    },
    {
        id: 203,
        img: 'assets/images/instagram-feed/instagram-image-3.png'
    },
    {
        id: 204,
        img: 'assets/images/instagram-feed/instagram-image-4.png'
    },
    {
        id: 205,
        img: 'assets/images/instagram-feed/instagram-image-5.png'
    },
    {
        id: 206,
        img: 'assets/images/instagram-feed/instagram-image-6.png'
    },
    {
        id: 207,
        img: 'assets/images/instagram-feed/instagram-image-7.png'
    },
    {
        id: 208,
        img: 'assets/images/instagram-feed/instagram-image-8.png'
    },
    {
        id: 209,
        img: 'assets/images/instagram-feed/instagram-image-9.png'
    },
];

// ********** OPEN AND CLOSE MOBILE NAVIGATION **********
let mobileNav = document.getElementById('mobile-nav');
let hamburger = document.querySelector('.hamburger-icon');
let closeNav = document.getElementById('close');


hamburger.addEventListener('click', function() {
    mobileNav.classList.add('open-nav');
    backdropSearch.classList.add('open');
});

closeNav.addEventListener('click', closeSearchModal);



// ********** SLIDER THAT CHANGES THE IMAGE AND QUOTE UPON SLIDING **********

let sliderImage = document.getElementById('slider');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
let currentItem = 0;

function changeSlider(index) {
    let highlight = HIGHLIGHTS[index];
    sliderImage.style.backgroundImage = highlight.img;
    quote.textContent = highlight.text;
    author.textContent = highlight.author;
};

sliderImage.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList == 'right' || target.classList == 'fas fa-chevron-right fa-3x') {
        currentItem++;
        if (currentItem > HIGHLIGHTS.length - 1) {
            currentItem = 0;
        }
    } else if (target.classList == 'left' || target.classList == 'arrow') {
        currentItem--;
        if (currentItem < 0) {
            currentItem = HIGHLIGHTS.length - 1;
        }
    }
    changeSlider(currentItem);
})

// ********** LOAD CONTENT WHEN PAGE LOADED **********

window.addEventListener('DOMContentLoaded', function () {
    numberOfPages.innerHTML = `Page 1 of ${pageCount}`;
    displayArticles(ARTICLES, rows, currentPage);
    loadSponsors();
    loadInstagram();
});

// ********** LOAD ARTICLES **********

let listElement = document.getElementById('list');
let paginationElement = document.getElementById('pagination');
let currentPage = 1;
let rows = 4;
let pageCount = Math.ceil(ARTICLES.length / rows);
let numberOfPages = document.getElementById('number-of-pages');
let prevButton = document.getElementById('prev-btn');
let nextButton = document.getElementById('next-btn');

function printArticle(numCharacters, paginatedItems) {
    if(paginatedItems.length > 2){
        let articles = paginatedItems.map(article =>
            `<article class="news-article" id=${article.id}>
            <div class="article-img">
            <img src=${article.img} alt="" width="360">
            </div>
            <div class="article-info">
            <h2>${article.title}</h2>
            <p class="news-article-posted">Published: ${article.date}</p>
            <p class="news-article-text" id=${article.id + 1000}>${article.description.substring(0, numCharacters)}...</p>
            <button class="read-more" id=${article.id - 1}>Read more</button>
            </div>
        </article>`).join('');

        return articles;
    } 
    return 'No results found.'
};

function displayArticles(items, rowsPerPage, page) {
    page--;

    let start = rowsPerPage * page;
    let end = start + rowsPerPage;
    let paginatedItems = items.slice(start, end);
// if the desktop size is min 1200px display more characters from the article
    let w = document.documentElement.clientWidth || window.innerWidth;

    console.log(w);
    if (w <= 480) {
        listElement.innerHTML = printArticle(90, paginatedItems);
    } else {
        listElement.innerHTML = printArticle(200, paginatedItems);
    };
    
}

// ********** LOAD SPONSORS LOGOS **********

let sponsorsArticle = document.getElementById('sponsors-logos');
function loadSponsors() {
    let sponsorLogo = SPONSORS.map(logo =>
        `<div class="sponsor-image" id=${logo.id}>
        <img class="image" src=${logo.img} alt="logo image">
        </div>`).join('');
    sponsorsArticle.innerHTML = sponsorLogo;
}

// ********** LOAD INSTAGRAM IMAGES **********
let instagramContainer = document.querySelector('.insta-icons');

function loadInstagram() {
    let instaImage = INSTAGRAM.map(image => 
        `<div class="insta-image">
        <img src=${image.img} alt="Instagram image">
    </div>`).join('');
    instagramContainer.innerHTML = instaImage;
};

// ********** SET UP PAGINATION **********

paginationElement.addEventListener('click', (e) => {
    let target = e.target;
    if (target.classList == 'next-btn') {
        currentPage++;
        prevButton.style.visibility = 'visible';

        if (currentPage >= pageCount) {
            nextButton.style.visibility = 'hidden';
        };
        numberOfPages.innerHTML = `Page ${currentPage} of ${pageCount}`;

    } else if (target.classList == 'prev-btn') {
        currentPage--;
        nextButton.style.visibility = 'visible';

        if (currentPage <= 1) {
            prevButton.style.visibility = 'hidden';
        };
        numberOfPages.innerHTML = `Page ${currentPage} of ${pageCount}`;
    }
    displayArticles(ARTICLES, rows, currentPage);
});

// ********** READ MORE **********

let readMoreModal = document.querySelector('.read-more-modal');
let backdrop = document.querySelector('.backdrop');
let backdropSearch = document.querySelector('.backdrop-search');
let searchModal = document.querySelector('.open-mobile-search');

function readMore(e) {
    let target = e.target;
    if (target.classList.contains('read-more')) {
        readMoreModal.classList.add('open');
        backdrop.classList.add('open');
    } else {
        return;
    };
    let articleIndex = target.id;
    let article =
        `<article class="news-article-modal" id=${ARTICLES[articleIndex].id}>
            <div class="article-img-modal">
              <img src=${ARTICLES[articleIndex].img} alt="">
            </div>
            <div class="article-info-modal">
                <h2>${ARTICLES[articleIndex].title}</h2>
                <p class="news-article-posted">Published: ${ARTICLES[articleIndex].date}</p>
                <p class="news-article-text" id=${ARTICLES[articleIndex].id + 1000}>${ARTICLES[articleIndex].description}</p>
            </div>
        </article>
        <button class="close-read-more" id="close-read-more">
        <img src="assets/icons/close.svg" alt="">
    </button>`

    readMoreModal.innerHTML = article;
    let closeReadMore = document.getElementById('close-read-more');
    closeReadMore.addEventListener('click', closeReadMoreModal);
};

listElement.addEventListener('click', readMore);
backdropSearch.addEventListener('click', closeSearchModal);
backdrop.addEventListener('click', closeSearchModal);
backdrop.addEventListener('click', closeReadMoreModal);

function closeSearchModal() {
    searchModal.classList.remove('open');
    backdropSearch.classList.remove('open');
    mobileNav.classList.remove('open-nav');
    mobileSearch.classList.remove('open-modal');
    SEARCHMOBILE.value = '';
    SEARCHDESKTOP.value = '';
    SEARCHRESULTS.innerHTML = ''; // to improve- change the class to display: none and when opening add a class display: block
    filteredList = [];
};

function closeReadMoreModal() {
    readMoreModal.classList.remove('open');
    backdrop.classList.remove('open'); // to improve - i want to keep 
};


// ***** BUILD IN THE SEARCH FUNCTIONALITY *****//

const SEARCHDESKTOP = document.getElementById('search-field');
const SEARCHMOBILE = document.getElementById('mobile-search-field');
const SEARCHRESULTS = document.getElementById('search-results');
SEARCHRESULTS.addEventListener('click', readMore);
let searchText = '';
let filteredList = [];

function search(term) {
    let tokens = term.toLowerCase().split(' ').filter(token => token.trim() !== '');
    let searchTextRegex = new RegExp(tokens.join('|'), 'gim');

    if (tokens.length && term.length > 0) {
        filteredList = ARTICLES.filter(article => {
            let articleString = '';
            for (let key in article) {
                if (article.hasOwnProperty(key) && article[key] !== '') {
                    articleString += article[key].toString().toLowerCase().trim() + ' ';
                }
            }
            return articleString.match(searchTextRegex)
            //return results.length ? results : ['No results found'];
        });
        
    }
    
}

SEARCHDESKTOP.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchText = e.target.value;
        SEARCHMOBILE.value = searchText;
        search(searchText);
        if (searchText.length) {
            displaySearchResults();
        }
    }
    
})

SEARCHMOBILE.addEventListener('keypress', (e) => {
    searchText = e.target.value;
    if (e.key === 'Enter'){
        search(searchText);
        if (searchText.length) {
            SEARCHRESULTS.innerHTML = printArticle(90, filteredList);
        }
    }
    
})

SEARCHMOBILE.addEventListener('keyup', (e) => {
    const VALUE = e.target.value.trim();
    if (!VALUE.length) {
        SEARCHRESULTS.innerHTML = '';
    }
})

// SEARCHDESKTOP.addEventListener('keyup', (e) => {
//     const VALUE = e.target.value.trim();
//     console.log('!VALUE.length', !VALUE.length)
//     if (!VALUE.length) {
//         filteredList = [];
//     }
// })

// ********** OPEN AND CLOSE MOBILE SEARCH **********

let mobileSearch = document.querySelector('.open-mobile-search');
let mobileInputSearch = document.querySelector('.mobile-search-field');
let searchBtn = document.getElementById('search-btn');
let modalSearchBtn = document.getElementById('mobile-search-btn-modal');

function displaySearchResults(){
    mobileSearch.classList.add('open-modal');
    backdropSearch.classList.add('open');
    mobileInputSearch.focus();
    SEARCHRESULTS.innerHTML = printArticle(90, filteredList);
}

searchBtn.addEventListener('click', () => {
    mobileSearch.classList.add('open-modal');
    backdropSearch.classList.add('open');
    searchText = SEARCHDESKTOP.value;
    SEARCHMOBILE.value = searchText;
    search(searchText);
    mobileInputSearch.focus();
    if (searchText.length) {
        SEARCHRESULTS.innerHTML = printArticle(90, filteredList);
    }
    
} )

modalSearchBtn.addEventListener('click', () => {
    searchText = SEARCHMOBILE.value;
    search(searchText);
    SEARCHRESULTS.innerHTML = printArticle(90, filteredList);
} )