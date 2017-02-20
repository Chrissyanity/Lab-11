$(function() {

var postData = {};
$.get('https://www.reddit.com/r/aww/.json', function(data) {
console.log(data);

postData = data;
var redditInfo = postData.data.children;
for(var i = 0; i < 10; i++){


var redImage = $
var redTitles = $('<h3>').text(redditInfo[i].data.title);
$('body').append(redTitles);
var redAuthor = $('<p>').text(redditInfo[i].data.author);
$('body').append(redAuthor);
var redComments = $('<p>').text(redditInfo[i].data.num_comments);
$('body').append(redComments);
// var redSubmit = $('<p>').text(redditInfo[i]).data.created);
// $('body').append(redSubmit);

// responseBody.data.children.forEach(function(post){
//   var redTitle = post.data.title;
//   var redAuthor = post.data.author;
//   var redSubmit = post.data.submit;
//   var redComments = post.data.num_comments;
// });
// $('body').append($('<h2>').text(responseBody.data.children[1].data.title))
//($'body').append.(redTitles) $('body').append($('<div>').append($('<span>').text(responseBody.data.children[1].data.author)))
// $('body').append($('<p>').text(responseBody.data.children[1].data.submit)
// });
// responseBody.data.children.forEach(function(post) {
// post.data.title;
// post.data.author;
// })
//
// responseBody.data.children.forEach(function(post) {
//   // var redTitle = post.data.title


// responseBody.data.children.forEach(function(post) {
// $('body').append($('<div>').append($('<h2>').text(responseBody.title)))





// })


            // var redTitle = responseBody.data.title;
            // var redAuthor = responseBody.data.author;
            // var redSubmit = responseBody.data.submit;
            // var redComments = responseBody.data.num_comments;


            // //   $('body').append($('<div>').addClass('postName').append($('<h2>').text(posts.title)))
            // // // })];
            // $('body').append($('<div>').append($('<h2>').text(redditPosts.title)))
            // // });
            //   // var title = post.data.title;


        // });
}
});
});




// });
