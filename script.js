document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const campaign = document.getElementById("movie").value;
      const rating = document.getElementById("rating").value;
      const comments = document.getElementById("comments").value;

      const feedbackData = JSON.parse(localStorage.getItem("feedbackData")) || [];
      feedbackData.push({ name, movie, rating, comments });
      localStorage.setItem("feedbackData", JSON.stringify(feedbackData));

      window.location.href = "thankyou.html";
    });
  }

});
