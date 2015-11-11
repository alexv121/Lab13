$(document).ready(function(){
		$.get("https://www.reddit.com/r/aww/.json", function(response){

			var posts = response.data.children;

			/*console.log(post.author);
			console.log(post.thumbnail);
			console.log(post.title);
			console.log(post.url);
			console.log(post.created);*/

			$.each(posts, function(index, post){


			var $container =$("<div />").appendTo($("body"));
			var $title = $("<a />").html("<h1>"+post.data.title +"</h1>").appendTo($container); 
			

			$title.attr("href", post.data.url)
			$("<img />").attr("src", post.data.thumbnail).appendTo($container);
			$("<p />").text(post.data.author).appendTo($container);

			var postDate = new Date(post.data.created*1000)

			$("<p />").text("posted:"+postDate.getMonth()+"/"+postDate.getDay()+"/"+postDate.getFullYear())
				.appendTo($container);
			});
			

		});
		/*$.createElement(<a></a>)
		$.createElement(<img src= "#">)*/
		

	});