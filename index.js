//blog post object

//title
//body
//author
//views
//cmments
//(author, body)
//isLive

// let post = {
//     title: 'a',
//     body: 'b',
//     author: 'c',
//     viewa: 10,
//     comments: [
//         {author: 'a', body: 'b'},
//         {author: 'c', body: 'd'}
//     ],
//     isLive: true
// };

function Post(title, body, author){
    this.title = title;
    this.body = body;
    this.author= author;
    this.views = 0;
    this.comments = [];
    this.isLive = false;
}
post = new Post('a', 'g', 'k');
console.log(post);