
const interests = [
  {
    title: "Soccer",
    description: "Soccer is my favorite sport. I love playing and watching games, especially during big tournaments!",
    moreInfo: "Soccer helps me stay active and competitive. I love playing it with friends and watching top-level teams battle it out.",
    gif:"../gifs/soccer.gif"
  },
  {
    title: "Singing",
    description: "Singing is a way for me to express my feelings. I enjoy singing along to my favorite songs.",
    moreInfo: "Singing brings me joy and is a great way for me to express my emotions. I enjoy singing at home or even at karaoke sessions with friends!",
    gif:"../gifs/singing.gif"
  
  },
  {
    title: "Hanging Around with Friends",
    description: "Spending time with friends is essential for me. We enjoy having fun, playing games, and sharing good times!",
    moreInfo: "My friends are an important part of my life. We hang out, watch movies, play games, or just enjoy each other's company.",
    gif :"../gifs/friendlaughing.gif"
  },
  {
    title: "Driving",
    description: "There's something about the freedom of the road. I enjoy taking long drives to unwind and clear my mind.",
    moreInfo: "I enjoy driving around, whether it's a scenic route or a simple trip to the store. It’s a time to relax and clear my mind.",
    gif :"../gifs/driving.gif"

  },
  {
    title: "Gym",
    description: "Keeping fit is important to me. I spend a lot of time in the gym, working on building strength and endurance.",
    moreInfo: "Going to the gym is a way for me to stay healthy and work on building muscle. It also helps reduce stress.",
    gif :"../gifs/gym.gif" },
  {
    title: "Coding",
    description: "I love coding! It's my way of creating new things and solving problems through technology.",
    moreInfo: "I enjoy coding because it challenges me and allows me to create new applications and websites that solve problems.",
    gif :"../gifs/coding.gif"},

];


function generateInterestCards() {
  const interestContainer = document.getElementById("interest-container");

  interests.forEach(interest => {
   
    const card = document.createElement("div");
    card.classList.add("interest-card");


    const title = document.createElement("h3");
    title.textContent = interest.title;
    card.appendChild(title);


    const description = document.createElement("p");
    description.textContent = interest.description;
    card.appendChild(description);


    const button = document.createElement("button");
    button.classList.add("more-info-btn");
    button.textContent = "Learn More";
    button.onclick = function() {
      showModal(interest);
    };
    card.appendChild(button);


    interestContainer.appendChild(card);
  });
}

// Call the function to generate the interest cards when the page loads
window.onload = function() {
  generateInterestCards();
};


function showModal(interest) {
  const modal = document.getElementById("interest-modal");

  // Set modal content
  document.getElementById("modal-title").textContent = interest.title;
  document.getElementById("modal-description").textContent = interest.moreInfo;
  document.getElementById("modal-gif").src = interest.gif;

  // Show modal
  modal.style.display = "block";

  // Scroll to the modal when opened
  modal.scrollIntoView({ behavior: "smooth" });

  // Close button
  document.getElementById('btnclose').onclick = function () {
    modal.style.display = 'none';
  };
}

