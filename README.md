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
4. Run ``` npm run migrate ``` command to create the database table
3. Ready to start. Type the ``` npm start ``` command to start the API.

## Usage
There is 2 endpoints waht we can use in this API.
- ``` /upload ``` With this you can upload an image to the server. The name of the file input has to be ``` imageName ```
- ``` /fetch ``` With this you can fetch all images from the server.

## Credits
### Collaborators
- Rakonczai Ádám, [GitHub link](https://github.com/RakonczaiAdam)
### Tutorials
- [high quality README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
- [multer](https://www.npmjs.com/package/multer)
- [express](http://expressjs.com/en/starter/static-files.html#serving-static-files-in-express)
- [Sequelize](https://sequelize.org/docs/v6/other-topics/migrations/)
- [image-size](https://www.npmjs.com/package/image-size?Cachedget)