

  document.addEventListener('DOMContentLoaded', function () {
    // Get references to form elements
    const postForm = document.getElementById('post-form');
    const postTitleInput = document.getElementById('post-title');
    const postContentInput = document.getElementById('post-content');
    const postContainer = document.getElementById('post-container');

    // Handle form submission
    postForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Retrieve user input
      const title = postTitleInput.value;
      const content = postContentInput.value;

      // Create a new post box
      const postBox = document.createElement('div');
      postBox.className = 'box-item';
      postBox.innerHTML = `
        <div class="post-title"><em>${title}</em></div>
        <div class="post-content">${content}</div>
      `;

      // Append the new post box to the post container
      postContainer.appendChild(postBox);

      // Clear the form inputs
      postTitleInput.value = '';
      postContentInput.value = '';
    });
  });

