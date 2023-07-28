const http = require('https');
const fs = require('fs');

const file = fs.createWriteStream("file.jpg");
const request = http.get("https://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Download Completed");
   });
});
