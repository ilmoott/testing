const particle = 'particles.json';
const stars = 'stars.json';
let actual = particle;

let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
    if(actual === particle){
        particlesJS.load('particles-js',stars,function(){
            console.log('particles.json loaded...')
        });
        actual = stars;
    }else{
        particlesJS.load('particles-js',particle,function(){
            console.log('particles.json loaded...')
        });
        actual = particle;
    }
    
})




particlesJS.load('particles-js',particle,function(){
    console.log('particles.json loaded...')
});










