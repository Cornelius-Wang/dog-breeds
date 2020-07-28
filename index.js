let message = [];

function getDogs(string) {
    fetch('https://dog.ceo/api/breed/' + string + '/images/random')
    .then(response => {
        if (response.ok) {
            return response.json();
        }
        throw new Error(response.statusText);
    })
    .then(responseJson => 
        displayDogs(responseJson))
        .catch(error => alert('Try a different breed or wait a bit before submitting again'));
}

function templateDogHtml(dogUrl){
    return `<img src="${dogUrl}" class="dog-image">`
}

function displayDogs(responseJson) {
    /* Log the JSON object from the response */
    console.log(responseJson);
    
    /* Add image to the DOM */
    message = responseJson.message;
    console.log(message);
    renderDog(message);
}

    function renderDog(message) {
        
        $('.dog-pics').empty();
        $('.dog-pics').append(templateDogHtml(message));
        $('.dog-pics').removeClass('hidden');

    }

function formEvent() {
    $('form').on('submit', function(event){
        event.preventDefault();
        let string = $('input').val();
        string = string.toLowerCase();
        console.log(string);
        getDogs(string);
    });
}

$(function start() {
    console.log('Done');
    formEvent();
})