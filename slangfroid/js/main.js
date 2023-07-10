let quotes = [ 
    {
    quote: "Don't worry about what anybody else is going to do. The best way to predict the future is to invent it.",
    source: "Alan Kay"
    },

    {
    quote: "Premature optimization is the root of all evil (or at least most of it) in programming.",
    source: "Donald Knuth"
    },

    {
    quote: "Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.",
    source: "Mark Twain"
    },

    {
    quote: "What Paul does, and does very well, is to take ideas and concepts that are beautiful in the abstract, and brings them down to a real world level. That's a rare talent to find in writing these days.",
    source: "Jeff \"hemos\" Bates, Director, OSDN; Co-evolver, Slashdot"
    },

    {
    quote: "To follow the path: look to the master, follow the master, walk with the master, see through the master, become the master.",
    source: "Modern zen Poem"
    },

    {
    quote: "No problem should ever have to be solved twice.",
    source: "Eric S. Raymond, How to become a hacker"
    },

    {
    quote: "Attitude is no substitute for competence.",
    source: "Eric S. Raymond, How to become a hacker"
    },

    {
    quote: "It is said that the real winner is the one who lives in today but able to see tomorrow.",
    source: "Juan Meng, Reviewing \"The future of ideas\" by Lawrence Lessig"
    },

    {
    quote: "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it.",
    source: "Alan J. Perlis (Epigrams in programming)"
    },

    {
    quote: "A year spent in artificial intelligence is enough to make one believe in God.",
    source: "Alan J. Perlis (Epigrams in programming)"
    },

    {
    quote: "Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You've solved the wrong problem. Work hard to improve.",
    source: "Alan J. Perlis (Epigrams in programming)"
    },

    {
    quote: "Within a computer natural language is unnatural.",
    source: "Alan J. Perlis (Epigrams in programming)"
    },

    {
    quote: "You think you know when you learn, are more sure when you can write, even more when you can teach, but certain when you can program.",
    source: "Alan J. Perlis (Epigrams in programming)"
    },

    {
    quote: "Adapting old programs to fit new machines usually means adapting new machines to behave like old ones.",
    source: "Alan J. Perlis (Epigrams in programming)"
    },

    {
    quote: "A little learning is a dangerous thing.",
    source: "Alexander Pope"
    },

    {
    quote: "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.",
    source: "Eric Raymond"
    },

    {
    quote: "Einstein argued that there must be simplified explanations of nature, because God is not capricious or arbitrary.",
    source: "Frederick P. Brooks, No Sliver Bullet."
    },

    {
    quote: "Students should be evaluated on how well they can achieve the goals they strived to achieve within a realistic context. Students need to learn to do things, not know things.",
    source: "Roger Schank, Engines for Education"
    },

    {
    quote: "We remember what we learn when we care about performing better and when we believe that what we have been asked to do is representative of reality",
    source: "Roger Schank, Engines for Education"
    },

    {
    quote: "There really is no learning without doing.",
    source: "Roger Schank, Engines for Education"
    },

    {
    quote: "The only problems we can really solve in a satisfactory manner are those that finally admit a nicely factored solution.",
    source: "E. W. Dijkstra, The humble programmer"
    },

    {
    quote: "The best way to learn to live with our limitations is to know them.",
    source: "E. W. Dijkstra, The humble programmer"
    },

    {
    quote: "An expert is, according to my working definition \"someone who doesn't need to look up answers to easy questions\".",
    source: "Eric Lippert"
    },

    {
    quote: "The programmer must seek both perfection of part and adequacy of collection.",
    source: "Alan J. Perlis"
    },

    {
    quote: "Thus, programs must be written for people to read, and only incidentally for machines to execute.",
    source: "Alan J. Perlis"
    },

    {
    quote: "Lisp programmers know the value of everything but the cost of nothing.",
    source: "Alan J. Perlis"
    },

    {
    quote: "An interpreter raises the machine to the level of the user program; a compiler lowers the user program to the level of the machine language.",
    source: "SICP"
    },

    {
    quote: "Everything should be made as simple as possible, but no simpler.",
    source: "Albert Einstein"
    },

    {
    quote: "The great dividing line between success and failure can be expressed in five words: \"I did not have time.\"",
    source: "WestHost weekly newsletter 14 Feb 2003"
    },

    {
    quote: "When your enemy is making a very serious mistake, don't be impolite and disturb him.",
    source: "Napoleon Bonaparte (allegedly)"
    },

    {
    quote: "A charlatan makes obscure what is clear; a thinker makes clear what is obscure.",
    source: "Hugh Kingsmill"
    },

    {
    quote: "A language that doesn't affect the way you think about programming, is not worth knowing.",
    source: "Alan Perlis"
    },

    {
    quote: "Everybody makes their own fun. If you don't make it yourself, it ain't fun      source: it's entertainment.",
    source: "David Mamet (as relayed by Joss Whedon)"
    },

    {
    quote: "If we wish to count lines of code, we should not regard them as *lines produced* but as *lines spent*.",
    source: "Edsger Dijkstra"
    },		

    {
    quote: "Omit needless words." ,
    source: "William Strunk, Jr. (The Elements of Style)"
    },

    {
    quote: "I have never met a man so ignorant that I couldn't learn something from him.",
    source: "Galileo Galilei"
    },
    {
    quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    source: "Dr. Seuss"
    },
    {
    quote: "This too, shall pass.",
    source: "Anonymous"
    },
    {
    quote: "Keep your eyes on the stars and your feet on the ground.",
    source: "Theodore Roosevelt"
    },
    {
    quote: "The only person you should try to be better than is the person you were yesterday.",
    source: "Anonymous"
    },
    {
    quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
    source: "Harvey Fierstein"
    },
    {
    quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods.",
    source: "C.S. Lewis"
    },
];
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

let btn=document.querySelector('.btn');
btn.addEventListener('click', displayQuote);

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    var quotes = getRandomQuote ();
    var quoteContainer = document.getElementById("quotes-box");
    var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
    quoteContainer.innerHTML = quoteString
    
}
    
    
    
//     let index=Math.floor(Math.random()*quotes.length);
   
//     //display the quote of that index
//     let div=document.querySelector('#quote');
//     let quote=`<div class="card">
//     <img src="icons/favicon.png">
//     <p>${quotes[index]}</p>
//     <img src="icons/favicon.png">
//    </div>
//     `;
//     div.innerHTML=quote;


//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);

