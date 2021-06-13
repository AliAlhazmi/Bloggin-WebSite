  function post()
    {
        
        let postTitle = document.getElementById("ptitle").value;    //gets the title
        let postContent = document.getElementById("pContent").value;   //gets the content
        
    
      

        let node = document.createElement("div");       // Create a <div> node
        node.classList.add("post");                     // add "post" class to the div element
        let ul = document.createElement("ul");          // make a list
        let li = document.createElement("li");          // make list items 
        let h3 = document.createElement("h3");          // make <h3> *used for title*
        let textnode = document.createTextNode(postContent); //take text input and append to a node
        let titlenode = document.createTextNode(postTitle);    //take title input and append to a node
        h3.appendChild(titlenode);                          // append the title to h3 tag
        li.appendChild(textnode);                           //apend text contents to a list item
        ul.appendChild(h3);                                    //apend title as a list item
        ul.appendChild(li);                                   //apend the list item the unordered list
        node.appendChild(ul);                            //apend the list to the node "<div>"
        document.getElementById("here").appendChild(node);  //make the div where "here" ID is 

      

        console.log(postTitle);
        console.log(postContent);

       
    }
    //ctrl z?

    