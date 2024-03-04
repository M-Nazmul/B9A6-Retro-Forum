const loadNewPost = async() => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    console.log(data);
    displayPost(data);
}

const displayPost = datas => {
    const cartContainer = document.getElementById("cart-container");

    datas.forEach(data => {
        console.log(data);
        // create div
        const latestPost = document.createElement("div");
        latestPost.classList = `card max-w-[374px] bg-base-100 shadow-xl p-4 md:p-6`;
        latestPost.innerHTML = `
        <figure><img src="${data.cover_image}" alt="Shoes" /></figure>
            <div class="card-body p-0 pt-6 font-mulish">
              <p class="flex gap-3 text-gray-txt"><span><img src="images/calender.svg" alt=""></span><span>29 January 2024</span></p>
              <h2 class="card-title text-[18px] font-extrabold">${data.title}</h2>
              <p class="text-gray-txt my-1">${data.description}</p>
              <div class="card-actions justify-start gap-4">
                <div class="avatar">
                  <div class="w-14 rounded-full">
                    <img src="${data.profile_image}" />
                  </div>
                </div>
                <div>
                  <h2 class="font-bold text-base">${data.author.name}</h2>
                  <p class="text-gray-txt font-normal text-[18px]">${data.author.designation}</p>
                </div>
              </div>
            </div>
        `
        cartContainer.appendChild(latestPost);
    });
}
loadNewPost()