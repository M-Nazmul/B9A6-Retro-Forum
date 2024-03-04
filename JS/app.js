const loadTimeline = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
  const data = await res.json();
  const posts = data.posts;
  console.log(posts);
  displayTimeline(posts);
}

const displayTimeline = posts => {
  const postContainer = document.getElementById("post-container");

  posts.forEach(post => {
      console.log(post);
      // create a div
      const postTimeline = document.createElement("div");
      postTimeline.classList = `border  mb-6 bg-[#F3F3F5] rounded-3xl`;
      postTimeline.innerHTML = `
      <!-- card 1 -->
        <div class="flex gap-6  p-6 md:p-1-0">
          <!-- Avatar -->
          <div class="avatar indicator">
          <span class="indicator-item badge ${post.isActive ? "badge-success":"bg-red-500"}"></span> 
            <div class="w-20 h-20 rounded-lg">
              <img alt="Avatar" src="${post.image}" />
            </div>
          </div>
          <!-- details -->
          <div>
             <div class="flex flex-col md:flex-row gap-5 font-medium text-base mb-3 text-gray-txt font-inter"><h3># ${post.category}</h3><h3>${post.author.name}</h3></div>
             <h2 class="font-bold text-[20px] font-mulish">${post.title}</h2>
             <p class="max-w-[570px] mt-2 mb-5 font-inter font-normal text-primary-txt">
             ${post.description}
             </p>
             <hr class="border-2 border-dashed">
             
          </div>
        </div>  
        <!-- count section -->
        <div class="flex flex-wrap gap-4 justify-between items-center pl-32 pr-10 pb-10">
          <div class="flex flex-wrap justify-between items-center gap-7">
            <p class="flex gap-3"><img src="images/message.svg" alt=""> <span>${post.comment_count}</span></p>
            <p class="flex gap-3"><img src="images/eye.svg" alt=""> <span>${post.view_count}</span></p>
            <p class="flex gap-3"><img src="images/Time.svg" alt=""> <span>${post.posted_time}</span> <span>min</span></p>
          </div>
          <div><span onclick="addCard()" class="cursor-pointer"><img src="images/Inbox.svg" alt=""></span></div>
         </div>
      `
      postContainer.appendChild(postTimeline);
  });
}

loadTimeline()