const API_KEY = "AIzaSyDjvVyEauyzP_9FbQM_HzGGM2Qp20-9njI";
var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

let form = document.getElementById("searchform");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    handleSubmit();
});

function handleSubmit() {
    const userQuery = document.querySelector("#search").value;
    fetchVideos(userQuery);
}

function fetchVideos(userQuery) {
    fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&type=video&part=snippet&maxResults=10&q=${userQuery}`)
        .then(response => response.json())
        .then(data => displayVideos(data.items));
}

function displayVideos(videos) {
    const containerDiv = document.getElementById("container");
    containerDiv.innerHTML += `
    <div class="row my-3">
        <div class="col-md-12">
            <div id="videos" class="d-flex justify-content-center flex-wrap">
            </div>
        </div>
    </div> 
    `
    const videosDiv = document.getElementById("videos");
    videos.forEach(video => {
        iframe = `
        <iframe class="m-3" width="500" height="300" src="http://www.youtube.com/embed/${video.id.videoId}" frameborder="0" allowfullscreen></iframe>
        `
        videosDiv.innerHTML += iframe;
    })
}
