
const API = 'https://youtube-v311.p.rapidapi.com/search/?part=snippet&channelId=UCSPDoXaXJi1_-OmF0lbYQ4A&maxResults=5&order=relevance&safeSearch=moderate&type=video%2Cchannel%2Cplaylist';
const options = {
    method: 'GET',
	headers: {
        'X-RapidAPI-Key': '13eae67eb8mshb23fde7c3de4a7cp10a07ejsnd48fc5903e2a',
		'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
	}
};
const content = null || document.getElementById('content');
/*
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/

async function fetchData(urlApi){
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
};
(async ()=>{
    try {
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video =>`
        <div class="group relative">
            <div
                class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `
        ).slice(0,4).join(' ')}
       
        `;
        content.innerHTML = view;
    } catch(error) {
       console.log(error);
    }
})();

