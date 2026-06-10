let posts = [];

function addPost() {

    const username = document.getElementById("username").value;
    const content = document.getElementById("postInput").value;

    if(username === "" || content === ""){
        alert("Please enter name and post");
        return;
    }

    const post = {
        username,
        content,
        likes: 0
    };

    posts.push(post);

    displayPosts();

    document.getElementById("postInput").value = "";
}

function displayPosts() {

    const postsDiv = document.getElementById("posts");

    postsDiv.innerHTML = "";

    posts.forEach((post,index)=>{

        postsDiv.innerHTML += `
        <div class="post">
            <h3>${post.username}</h3>
            <p>${post.content}</p>

            <button onclick="likePost(${index})">
            Like (${post.likes})
            </button>
        </div>
        `;
    });
}

function likePost(index){
    posts[index].likes++;
    displayPosts();
}