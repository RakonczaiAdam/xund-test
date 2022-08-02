# image management API

## You can use this REST API to store images.
- Upload your image without any authentication or authorization.
- Fetch all the images was uploaded to this site.
- Do NOT upload any violent or offensive image.

## Table of Contents (Optional)
If your README is long, add a table of contents to make it easy for users to find what they need.
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)

## Installation
1. Clone the github repository. ``` git clone https://github.com/RakonczaiAdam/xund-test.git ```.
2. Install the node modules with the foolowing command ``` npm i ```.
3. Configure the ``` config.json ``` file based on your database connection properties inside ``` src/database/config```  folder
4. Run ``` npm run migrate ``` command to create the database table.
5. Run ``` tsc ``` command.
6. Ready to start. Type the ``` npm start ``` command to start the API.

## Usage
### live API
There is a live API running at a server, you can reach it with the following url: 
``` https://xund-image-manager.herokuapp.com ```.
### Endpoints
There is 2 endpoints what we can use in this API.
#### Upload
- ``` /upload ``` With this you can upload an image to the server. The name of the file input field has to be ``` imageName ```, and the description input field has to be ``` description ```. 
##### Example: 
``` 
<form action="https://xund-image-manager.herokuapp.com/upload" enctype="multipart/form-data" method="post">
    <label>Description</label><br>
    <input type="text" name="description"><br><br>
    <input type="file" name="imageName"><br><br>
    <input type="submit" value="submit">
</form> 
```
#### Fetch
- ``` /fetch ``` With this you can fetch informations about the images stored on the server. The response will be an array what contains the Image objects
##### Image object:
You will have the following information from the images.
```
{
    "id": integer,
    "fileName": string,
    "fileSize": integer,
    "width": integer,
    "height": integer,
    "uploaded": date,
    "sourceIp": string,
    "description": string,
    "createdAt": string,
    "updatedAt": string
}
```
##### Example
After you have got the fileName, you can reach the images by refer the api url and the fileName like this: ``` apiUrl/imageName ```.
```
<body>
    <h1>TEST</h1>
    <div id="images"></div>
</body>
<script type="text/javascript">
    const baseUrl = 'https://xund-image-manager.herokuapp.com/';
    const fetchUrl = `${baseUrl}fetch`
    fetch(fetchUrl).then(response => {
        return response.json();
    }).then(data => {
        console.log(data);
        let images = document.getElementById('images');
        data.map(image=>{
        images.innerHTML += `<img src="${baseUrl}${image.fileName}" alt="img" width="200" height="150"><br><br>`;
        })
    }).catch(err => {
        console.log(err);
    });
</script>
```

## Credits
### Collaborators
- Rakonczai Ádám, [GitHub link](https://github.com/RakonczaiAdam)
### Tutorials
- [high quality README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [multer](https://www.npmjs.com/package/multer)
- [express](http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express)
- [Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)
- [image-size](https://www.npmjs.com/package/image-size?Cachedget)