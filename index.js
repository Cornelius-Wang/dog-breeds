let message = [];

function getDogs(string) {
    fetch('https://dog.ceo/api/breed/' + string + '/images')
    .then(response => response.json())
    .then(responseJson => 
        displayDogs(responseJson))
        .catch(error => alert('Warning! Dog API call failed. Try again later.'));
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
    let type = typeof(message);
        if (type === 'string') {
            $('.dog-pics').replaceWith(message);
            $('dog-pics').removeClass('hidden');
        }
        else {
        renderDog(message[0])
        $('dog-pics').removeClass('hidden');
    }
}

function renderDog(message) {

    $('.dog-pics').replaceWith(templateDogHtml(message));

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