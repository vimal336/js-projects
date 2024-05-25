document.addEventListener("DOMContentLoaded", function () {
  let editMode = false;
  let editCommentId = null;
  let currentPage = 0; 
  const limit = 10; 


  function getcomments(page = 0) {
    const skip = page * limit;
    fetch(`https://dummyjson.com/comments?limit=${limit}&skip=${skip}&select=body,postId,user`)
      .then((res) => res.json())
      .then((comment) => {
        console.log(comment);
        let data1 = "";
        comment.comments.forEach((data) => {
          data1 += `
            <div class="comment" data-id="${data.id}">
              <p>${data.id} : Username: ${data.user.username}</p>
              <input class="body-input" type="text" name="post-comments" value="comment: ${data.body}">
              <p>Post Id: ${data.postId}</p>
              <div class="buttons">
                <button class="edit-btn" onclick="addform()">Edit Comment</button>
                <button class="delete-btn">Delete Comment</button>
              </div>
            </div>
          `;
        });
        document.querySelector(".crud-data2").innerHTML = data1;

        document.querySelectorAll(".delete-btn").forEach((button) => {
          button.addEventListener("click", function (e) {
            const commentId = e.target.closest(".comment").dataset.id;
            deleteComment(commentId);
          });
        });

        document.querySelectorAll(".edit-btn").forEach((button) => {
          button.addEventListener("click", function (e) {
            const commentElement = e.target.closest(".comment");
            const commentId = commentElement.dataset.id;
            const username = commentElement.querySelector("p").textContent.split(":")[1].trim();
            const commentBody = commentElement.querySelector("input").value.replace("comment: ", "");
            const postId = commentElement.querySelector("p:nth-child(3)").textContent.split(":")[1].trim();
            
            editMode = true;
            editCommentId = commentId;
            document.getElementById("username").value = username;
            document.getElementById("comment-body").value = commentBody;
            document.getElementById("post-id").value = postId;
          });
        });
        document.getElementById("prev-page").disabled = page === 0;
        document.getElementById("next-page").disabled = comment.comments.length < limit;
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }

   document.getElementById("prev-page").addEventListener("click", function () {
    if (currentPage > 0) {
      currentPage--;
      getcomments(currentPage);
    }
  });

  document.getElementById("next-page").addEventListener("click", function () {
    currentPage++;
    getcomments(currentPage);
  });

  function postComment(username, commentBody, postId, userId) {
    fetch("https://dummyjson.com/comments/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        userId: userId,
        body: commentBody,
        postId: postId,
      }),
    })
      .then((res) => res.json())
      .then((newComment) => {
        console.log("Comment added:", newComment);
        appendComment(newComment);
      })
      .catch((error) => {
        console.error("Error adding comment:", error);
      });
      console.log(username)
  }

  function putComment(commentId, username, commentBody, postId, userId) {
    fetch(`https://dummyjson.com/comments/${commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
        username: username,
        body: commentBody,
        postId: postId,
      }),
    })
      .then((res) => res.json())
      .then((updatedComment) => {
        console.log("Comment updated:", updatedComment);
        updateCommentInDOM(updatedComment);
      })
      .catch((error) => {
        console.error("Error updating comment:", error);
      });
  }

  function deleteComment(commentId) {
    fetch(`https://dummyjson.com/comments/${commentId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Comment deleted:", data);
        document.querySelector(`.comment[data-id='${commentId}']`).remove();
      })
      .catch((error) => {
        console.error("Error deleting comment:", error);
      });
  }

  function appendComment(comment) {
    const commentContainer = document.createElement('div');
    commentContainer.className = 'comment';
    commentContainer.dataset.id = comment.id;
    commentContainer.innerHTML = `
      <p>${comment.id} : Username: ${comment.user.username}</p>
      <input type="text" name="post-comments" value="comment: ${comment.body}">
      <p>Post Id: ${comment.postId}</p>
      <div class="buttons">
        <button class="edit-btn">Edit Comment</button>
        <button class="delete-btn">Delete Comment</button>
      </div>
    `;
    document.querySelector(".crud-data2").appendChild(commentContainer);

    commentContainer.querySelector(".delete-btn").addEventListener("click", function (e) {
      e.preventDefault();
      deleteComment(comment.id);
    });

    commentContainer.querySelector(".edit-btn").addEventListener("click", function (e) {
      e.preventDefault();
      const commentElement = e.target.closest(".comment");
      const commentId = commentElement.dataset.id;
      const username = commentElement.querySelector("p").textContent.split(":")[1].trim();
      const commentBody = commentElement.querySelector("input").value.replace("comment: ", "");
      const postId = commentElement.querySelector("p:nth-child(3)").textContent.split(":")[1].trim();
      
      editMode = true;
      editCommentId = commentId;
      document.getElementById("username").value = username;
      document.getElementById("comment-body").value = commentBody;
      document.getElementById("post-id").value = postId;
    });
    console.log(username)
  }

  function updateCommentInDOM(comments) {
    const commentElement = document.querySelector(`.comment[data-id='${comments.id}']`);
    if (commentElement) {
      commentElement.querySelector("p").innerHTML = `${comments.id} : Username: ${comments.user.username}`;
      commentElement.querySelector("input").value = `comment: ${comments.body}`;
      commentElement.querySelector("p:nth-child(3)").innerHTML = `Post Id: ${comments.postId}`;
    }
  }

  document.getElementById("comment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const commentBody = document.getElementById("comment-body").value;
    const postId = parseInt(document.getElementById("post-id").value);
    const userId = parseInt(document.getElementById("user-id").value);

    if (editMode) {
      putComment(editCommentId, username, commentBody, postId, userId);
      // editMode = false;
      // editCommentId = null;
    } else {
      postComment(username, commentBody, postId, userId);
    }

    document.getElementById("username").value = "";
    document.getElementById("comment-body").value = "";
    document.getElementById("post-id").value = "";
    document.getElementById("user-id").value = "";
  });

  getcomments();
});


let allform = document.querySelector(".form-container");
let close = document.querySelector(".close-btn");
let getform = document.querySelector(".comment-section");

function addform(){
  document.addEventListener('click', function(){
    allform.style.display = "block";
  })
};

function closebutton(){
  document.addEventListener('click', function(){
    allform.style.display = "none";
  })
};
