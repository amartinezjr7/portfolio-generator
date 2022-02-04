module.exports = (name, github) => {
    return `
    <!DOCTYPE html>
    <html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <meta name="viewpoint" content="width=device-width, initial-scale=1.0">
        <meta https-equiv="X-UA-Compatable" content="ie=edge">
    </head>
    
    <body>
        <h1>${name}</h1>
        <h2><a href="https://github.com/${github}">Github</a></h2>    
    </body>
    `;    
    
};
