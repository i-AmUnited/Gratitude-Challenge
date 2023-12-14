// document.addEventListener('DOMContentLoaded', function () {
//     const contentList = document.getElementById('content-list');
//     const indicatorList = document.getElementById('indicator-list');

//     const contents = [
//         'Content 1',
//         'Content 2',
//         'Content 3',
//     ];

//     const indicators = [
//         'Content 1 Indicator',
//         'Content 2 Indicator',
//         'Content 3 Indicator',
//     ];

//     let currentIndex = 0;

//     function updateContent() {
//         contentList.innerHTML = `<p>${contents[currentIndex]}</p>`;
//         indicatorList.innerHTML = `<p>${indicators[currentIndex]}</p>`;
//     }

//     function showNextContent() {
//         currentIndex = (currentIndex + 1) % contents.length;
//         updateContent();
//     }

//     // Start automatic content change every 5 seconds
//     setInterval(showNextContent, 5000);

//     // Initial display
//     updateContent();

//     // Show the content and indicators
//     contentList.classList.remove('hidden');
//     indicatorList.classList.remove('hidden');
// });

document.addEventListener('DOMContentLoaded', function () {
    const contentList = document.getElementById('content-list');
    const indicatorList = document.getElementById('indicator-list');

    const contents = [
        "Collaborated with over 20 SMEs in Nigeria.",
        "Over 15% increase in client's operational efficiency on average.",
        "Recognized by Clients for our innovative solutions",
    ];

    const indicators = [
        '<div class="flex justify-center w-full"> <div class="flex gap-3 "> <span class="h-2 w-2 rounded-full bg-[#9F7F58]"></span><span class="h-2 w-2 rounded-full bg-white border-2 border-[#9F7F58]"></span><span class="h-2 w-2 rounded-full bg-white border-2 border-[#9F7F58]"></span></div></div>',
        '<div class="flex justify-center w-full"> <div class="flex gap-3 "> <span class="h-2 w-2 rounded-full bg-white border-2 border-[#9F7F58]"></span><span class="h-2 w-2 rounded-full bg-[#9f7f58]"></span><span class="h-2 w-2 rounded-full bg-white border-2 border-[#9F7F58]"></span></div></div>',
        '<div class="flex justify-center w-full"> <div class="flex gap-3 "> <span class="h-2 w-2 rounded-full bg-white border-2 border-[#9F7F58]"></span><span class="h-2 w-2 rounded-full bg-white border-2 border-[#9F7F58]"></span><span class="h-2 w-2 rounded-full bg-[#9F7F58]"></span></div></div>',
    ];

    let currentIndex = 0;

    function updateContent() {
        contentList.innerHTML = `<p>${contents[currentIndex]}</p>`;
        indicatorList.innerHTML = `<p>${indicators[currentIndex]}</p>`;
    }

    function showNextContent() {
        currentIndex = (currentIndex + 1) % contents.length;
        updateContent();
    }

    // Start automatic content change every 5 seconds
    setInterval(showNextContent, 5000);

    // Initial display
    updateContent();

    // Show the content and indicators
    contentList.classList.remove('hidden');
    indicatorList.classList.remove('hidden');
});
