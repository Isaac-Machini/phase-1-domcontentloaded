// Your code goes here


document.addEventListener('DOMContentLoaded', () => {
    function updateP(text){
        let p = document.querySelector( 'p' )
        p.textContent = text
    }
 
    updateP('This is really cool!')
})