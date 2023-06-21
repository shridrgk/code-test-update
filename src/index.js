
fetch('code-test.json')
    .then((response) => response.json())
    .then((json) => {
        console.log("Json : ",json)
        var container = document.getElementById('container');
        json.articles.map((i)=>{
            //image
            var image = document.createElement("img");
            image.setAttribute("src", i.thumbnail.src);
            image.setAttribute("height", i.thumbnail.height);
            image.setAttribute("width", i.thumbnail.width);
            image.setAttribute("alt", i.thumbnail.title);

            //link
            var a = document.createElement('a'); 
            var link = document.createTextNode(i.primarySectionRouteName);
            a.appendChild(link); 
            a.title = i.primarySectionRouteName; 
            a.href = i.link; 
            a.style.fontSize="16px";
            a.style.color="#0059bf";
            
           
            var divElem = document.createElement('div');
            divElem.style.display="flex";
            divElem.style.flexDirection = "row";
            divElem.style.justifyContent = "space-between";

            var leftDiv = document.createElement('div');
            var rightDiv = document.createElement('div');

            var routeElem = document.createElement('div');
            routeElem.appendChild(document.createTextNode(i.primarySectionRouteName))

            var divHeadline = document.createElement('h2');
            divHeadline.appendChild(document.createTextNode(i.headline))
            divHeadline.style.fontSize="28px";
            divHeadline.style.color="#000000";

            var discription = document.createElement('p');
            discription.appendChild(document.createTextNode(i.standfirst))
            discription.style.fontSize="17px";
            discription.style.color="#606669";

            leftDiv.append(a)
            leftDiv.append(divHeadline)
            leftDiv.append(discription)
            rightDiv.append(image)

            divElem.append(leftDiv)
            divElem.append(rightDiv)
            
            container.appendChild(divElem)
            container.append(document.createElement('hr'))


        })
    });
