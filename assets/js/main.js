

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//dom elements where posts get created
const postsList = document.getElementById('container')

//generates posts
function generatePost(posts) {
    

    posts.forEach(card => {

        //european format date
        let createDate = new Date(card.created) 
        let europeDateFormat = createDate.getDate() + '-' + createDate.getMonth() + '-' + createDate.getFullYear()


        //function to generate profile pic
        function profilePic() {

            const nameSplit = card.author.name.split(' ');
            const profileLetters = nameSplit[0].charAt(0) + ' ' + nameSplit[1].charAt(0);

            if (card.author.image == null) {
        
                return `<div><span>${profileLetters}</span></div>`
                
            } else {
        
                return `<img class="profile-pic" src="${card.author.image}" alt="${card.author.name}"></img>`
                
            }
            
        }


        //markup creation
        const cardDom = `

        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${profilePic()}                   
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${card.author.name}</div>
                        <div class="post-meta__time">${europeDateFormat}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${card.content}</div>
            <div class="post__image">
                <img src="${card.media}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="${card.id}">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${card.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>

        `;

        //inserts posts in dom
        postsList.insertAdjacentHTML('beforeend', cardDom)
        
    });

}

//generates posts in html
generatePost(posts);


const likeButtons = document.querySelectorAll('.js-like-button');
const likeCounters = document.querySelectorAll('.js-likes-counter');


//function for likes counters and buttons
for (let i = 0; i < likeButtons.length; i++) {
    
    const element = likeButtons[i];

    element.addEventListener('click', function(e) {

        //makes page not refresh
        e.preventDefault();

        if (!element.classList.contains('like-button--liked')) {

            element.classList.add('like-button--liked');

            const thisCounter = likeCounters[i];
            const number = parseInt(thisCounter.innerHTML);
            thisCounter.innerHTML = number + 1;

            const likedPost = posts[i];
            likedPost.likes++;

            
        } else {

            element.classList.remove('like-button--liked');

            const thisCounter = likeCounters[i];
            const number = parseInt(thisCounter.innerHTML);
            thisCounter.innerHTML = number - 1;

            const likedPost = posts[i];
            likedPost.likes--;

        }
        
    })
    
}


