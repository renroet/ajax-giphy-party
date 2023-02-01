console.log("Let's get this party started!");
const api_key = 'pwZV0xyx9b8HxOwoSVBSAIeVdbhJxIbj';
const randNum = () => Math.floor(Math.random()*51);
const form = document.querySelector('form');
const removeBtn = document.querySelector('button');

async function search(term) {
    const res = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {api_key, q: `${term}`}})
    const num = randNum()
    // console.log(res)
    const gif = res.data.data[num]
    console.log(gif)
    const div = document.createElement('div')
    div.style.width = '300px'
    div.style.height = '300px'
    div.style.border = '0.1px solid black'
    div.style.backgroundSize = '100% 100%'
    div.classList = 'gif'
    div.style.backgroundImage = "url("+`${gif.images.original.url}`+")"
    $('body').append(div);
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let term = $('#searchTerm').val();

search(term);
term = $('#searchTerm').attr('placeholder');

});

removeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
    $('.gif').remove();
})