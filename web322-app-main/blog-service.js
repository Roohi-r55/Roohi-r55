const fs = require("fs");
var posts = []
var categories = []
exports.initialize = () => 
{
    return new Promise ((resolve, reject) =>
     {
        fs.readFile('./data/posts.json', 'utf8', (err,data) => 
        {
            if (err) 
            {
                reject("Not able to read file");
            }
            else 
            {
                posts = JSON.parse(data);
            }
        });
        fs.readFile('./data/categories.json', 'utf8', (err,data)=> 
        {
            if (err) 
            {
                reject("Not able to read file");
            }
            else 
            {
                categories = JSON.parse(data);
            }
        });
        resolve();
    })
};
exports.getAllPosts = () => 
{
    return new Promise ((resolve,reject) => 
    {
        if (posts.length == 0) 
        {
            reject('Result not found');
        }
        else 
        {
            resolve(posts);
        }
    })
};
exports.getPublishedPosts = () => 
{
    return new Promise ((resolve, reject) => 
    {
        var publishposts = posts.filter(post => post.published == true);
       
        if (publishposts.length == 0) 
        {
            reject('Result not found');
        }
        resolve(publishposts);
    })
};
exports.getCategories = () => 
{
    return new Promise ((resolve,reject) => 
    {
        if (categories.length == 0) 
        {
            reject('Result not found');
        }
        else 
        {
            resolve(categories);
        }
    })
};