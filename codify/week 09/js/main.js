function todo() {
    var username = document.getElemnetById("username").value
    var comment = document.getElemnetById("comment").value

    var userNameText = dcoument.createTextNode("username"+username)
    var commentText = document.createTextNode("Comment:" + comment)

    var newlistitem =document.createElment("lI")
    newlistitem.className = "list-group-item"
    var newUserName = document.createElment("H3")
    newUserName.appendChild(userNameText)
    var newCommnet=document.createElment("P")
    newCommnet.appendChild(commentText)

    newlistitem.appendChild(newUserName)
    newlistitem.appendChild(newCommnet)
    document.getElementById("commentList").appendChild(newListItem)
}