/**
 * NEW POST PAGE
*/

// creates new posts 
function NewPostContent() {
    const newPostElements = document.querySelector(".userInputs");
    const title = document.querySelector('#pg_title');
    
    // page title
    var pgTitle = document.createElement("h1");
    pgTitle.textContent = "New Post Settings";
    title.appendChild(pgTitle);
   
    // post page title
    var postTitle = document.createElement("h2");
    postTitle.setAttribute('id',"postPg_title");
    postTitle.textContent = "Make a Post";
    newPostElements.appendChild(postTitle);
    
    var formElements = document.createElement("div");
    formElements.setAttribute('class',"formElements_newPost");
    
    // new post title
    var newPostTitle = document.createElement("input");
    var newPostLabel = document.createElement("label");
    newPostLabel.textContent = "Title: ";
    newPostTitle.setAttribute('id',"newPost_title");
    newPostTitle.setAttribute('type',"text");
    formElements.appendChild(newPostLabel);
    newPostElements.appendChild(formElements);
    formElements.appendChild(newPostTitle);
    newPostElements.appendChild(formElements);
      
    // new post text
    var newText = document.createElement("input");
    var newTextLabel = document.createElement("label");
    newTextLabel.textContent = "Text: ";
    newText.setAttribute('id',"newPost_txt");
    newText.setAttribute('type',"text");
    formElements.appendChild(newTextLabel);
    newPostElements.appendChild(formElements);
    formElements.appendChild(newText);
    newPostElements.appendChild(formElements);
    
   // new post image
    var newImg = document.createElement("input");
    var newImgLabel = document.createElement("label");
    newImgLabel.textContent = "Image: ";
    newImg.setAttribute('id',"newPost_img");
    newImg.setAttribute('type',"image");
    formElements.appendChild(newImgLabel);
    newPostElements.appendChild(formElements);
    formElements.appendChild(newImg);
    newPostElements.appendChild(formElements);
    
    // new post groups
    var newGroup = document.createElement("input");
    var newGroupLabel = document.createElement("label");
    newGroupLabel.textContent = "Groups: ";
    newGroup.setAttribute('id',"newPost_groups");
    newGroup.setAttribute('type',"text");
    formElements.appendChild(newGroupLabel);
    newPostElements.appendChild(formElements);
    formElements.appendChild(newGroup);
    newPostElements.appendChild(formElements);
    
    // new post hidden checkbox
    var hidden = document.createElement("input");
    var hiddenLabel = document.createElement("label");
    hiddenLabel.textContent = "Hidden: ";
    hidden.setAttribute('id',"newPost_hide");
    hidden.setAttribute('type',"checkbox");
    formElements.appendChild(hiddenLabel);
    newPostElements.appendChild(formElements);
    formElements.appendChild(hidden);
    newPostElements.appendChild(formElements);
    
    // post button
    const postBtn = document.createElement('button');
    postBtn.setAttribute('id', 'post_btn');      
    postBtn.textContent = 'Post';
    formElements.appendChild(postBtn);
    newPostElements.appendChild(formElements);
    
    // Cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('id', 'cancel_btn');
    cancelBtn.textContent = 'Cancel';
    formElements.appendChild(cancelBtn);
    newPostElements.appendChild(formElements);
  }
  
  
  NewPostContent();
