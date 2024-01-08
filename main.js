// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = document.querySelector('.like-glyph')
const FULL_HEART = document.querySelector('.actovated-heart')

function clickHeart() {
  EMPTY_HEART.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      EMPTY_HEART.classList.toggle('activated-heart');
      FULL_HEART.classList.toggle('activated-heart')
    })
    .catch(() => {})
  })
  FULL_HEART.addEventListener('click', () => {
    FULL_HEART.classList.toggle('activated-heart')
    EMPTY_HEART.classList.toggle('activated-heart')
  })
}

clickHeart()




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
