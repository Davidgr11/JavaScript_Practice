const { auto } = require("openai/_shims/registry.mjs");

console.log('Exercise 2: Social Media Analytics');
/*
Given an array of posts with: postId, author, content, likes, comments (array of {user, text, timestamp}), tags (array)

Tasks:
1. Find the post with the most engagement (likes + number of comments)
2. Get all unique tags used across all posts, sorted alphabetically
3. Calculate average likes per post for each author
4. Find all posts that contain the word "JavaScript" (case insensitive) in content or comments
5. Group posts by author and return object with author names as keys and their post count as values
6. Get the 3 most active commenters (users who commented the most)
*/

const posts = [
    {
        postId: 1,
        author: "DevGuru",
        content: "Learning JavaScript array methods is essential!",
        likes: 45,
        comments: [
            { user: "CodeNinja", text: "Great tip!", timestamp: "2025-01-01" },
            { user: "WebDev101", text: "Thanks for sharing", timestamp: "2025-01-02" }
        ],
        tags: ["javascript", "arrays", "programming"]
    },
    {
        postId: 2,
        author: "CodeNinja",
        content: "React hooks changed my life",
        likes: 78,
        comments: [
            { user: "DevGuru", text: "Totally agree", timestamp: "2025-01-03" },
            { user: "WebDev101", text: "useState is amazing", timestamp: "2025-01-03" },
            { user: "TechEnthusiast", text: "Can't wait to learn more", timestamp: "2025-01-04" }
        ],
        tags: ["react", "hooks", "frontend"]
    },
    {
        postId: 3,
        author: "DevGuru",
        content: "CSS Grid vs Flexbox comparison",
        likes: 62,
        comments: [
            { user: "CodeNinja", text: "Both are useful!", timestamp: "2025-01-05" }
        ],
        tags: ["css", "layout", "frontend"]
    },
    {
        postId: 4,
        author: "WebDev101",
        content: "JavaScript reduce method explained",
        likes: 91,
        comments: [
            { user: "TechEnthusiast", text: "This helped me a lot", timestamp: "2025-01-06" },
            { user: "CodeNinja", text: "Clear explanation", timestamp: "2025-01-06" }
        ],
        tags: ["javascript", "arrays", "tutorial"]
    }
];

console.log("\nTASK 1: Find the post with the most engagement (likes + number of comments)");
// get a post  |  get totalEngagement (likes + comments)  |  update (reduce)
const bestPost = posts.reduce((acc, post) => {

    const totalEngagement = post.likes + post.comments.length;

    if (totalEngagement > acc.totalEngagement) {
        return { ...post, totalEngagement: totalEngagement };
    }

    return acc;

}, { totalEngagement: -1 });

console.log(`The best post it's: ${bestPost.content}\nAuthor:${bestPost.author}\nTotal Engagement: ${bestPost.totalEngagement}\nId: ${bestPost.postId}`);


console.log("\nTASK 2: Get all unique tags used across all posts, sorted alphabetically");
// post -> tags -> add each tag to an array
const tags = posts.reduce((acc, post) => {
    post.tags.forEach(tag => acc.push(tag));
    return acc;
}, []);
// ["javascript", "arrays", "programming", "css", "layout", "frontend","javascript", "arrays", "tutorial"]

const uniqueTags = [...new Set(tags)].sort();
console.log(uniqueTags);

/*
    ALTERNATIVE:
    const uniqueTags = [...new Set(
        posts.flatMap(post => post.tags)
    )].sort();
*/

console.log("\nTASK 3: Calculate average likes per post for each author");
/* Proposed Struture
{
    devGuru: {likes: 0, posts:0},
}
*/
const likesPerAuthor = posts.reduce((acc, post) => {
    acc[post.author] = acc[post.author] || { likes: 0, posts: 0 };

    acc[post.author].likes += post.likes;
    acc[post.author].posts++;

    return acc;
}, {});

for (author in likesPerAuthor) {
    console.log(`Author: ${author} - Average likes per post: ${likesPerAuthor[author].likes / likesPerAuthor[author].posts}`);
}
// O(n + m) Time Complexity n = number of posts
// O(m) Space Complexity m = number of unique authors

console.log("\nTASK 4: Find all posts that contain the word 'JavaScript' (case insensitive) in content or comments");
const searchTerm = /javascript/i;
const jsPosts = posts.filter(post => {
    if (searchTerm.test(post.content)) {
        return true;
    }
    for (let comment of post.comments) {
        if (searchTerm.test(comment.text)) {
            return true;
        }
    }
    return false;
});
console.log(`Posts containing the word "JavaScript":`);
jsPosts.forEach(post => {
    console.log(`- Post ID: ${post.postId}, Author: ${post.author}`);
});

/*
    ALTERNATIVE:
const jsPosts = posts.filter(post => 
    searchTerm.test(post.content) || 
    post.comments.some(comment => searchTerm.test(comment.text))
);

with includes I would need to convert to lower case first:
const searchTerm = "javascript";
const jsPosts = posts.filter(post =>
    post.content.toLowerCase().includes(searchTerm) ||
    post.comments.some(comment => comment.text.toLowerCase().includes(searchTerm))
);

*/

/*
    Time Complexity: O(n * m) n = number of posts, m = average number of comments per post
    Space Complexity: O(k) k = number of posts containing the search term
*/
console.log("\nTASK 5: Group posts by author and return object with author names as keys and their post count as values");

const postsByAuthor = posts.reduce((acc, post) => {
    acc[post.author] = (acc[post.author] || 0) + 1;
    return acc;
}, {});

console.log(postsByAuthor);

console.log("\nTASK 6: Get the 3 most active commenters (users who commented the most)");
const commenterCounts = posts.reduce((acc, post) => {
    post.comments.forEach(comment => {
        acc[comment.user] = (acc[comment.user] || 0) + 1;
    });
    return acc;
}, {});
const sortedCommenters = Object.entries(commenterCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
console.log("Top 3 most active commenters:");
sortedCommenters.forEach(([user, count], index) => {
    console.log(`${index + 1}. ${user} - ${count} comments`);
});



/*
Exercise 2 Key Takeaways - Quick Tips:

Nested data access: Use reduce + forEach for nested arrays (e.g., get all comments from all posts)

Pattern: posts.reduce((acc, post) => { post.items.forEach(...); return acc; }, [])


Counting occurrences pattern: acc[key] = (acc[key] || 0) + 1

Initialize to 0 if doesn't exist, then increment


Grouping into arrays pattern: acc[key] = acc[key] || []; acc[key].push(value)

Initialize empty array if doesn't exist, then add items


String searching: Use regex /pattern/i with .test() for case-insensitive matching

Works on both strings directly and within loops/filters


Finding with conditions: Use .some() to check if ANY element matches in an array

More functional than for...of but same performance (both can exit early)


Top N pattern: .sort() + .slice(0, N) to get top/bottom N items

Remember: sort returns sorted array, slice extracts first N


Sorting objects: Always convert with Object.entries() first, then sort, optionally convert back

Same pattern works for Maps: [...map].sort()


Accumulating with properties: Build rich objects in reduce with multiple properties

Example: { total: 0, count: 0, average: 0 } - track everything you need


Regex vs .includes(): Regex is more powerful (case-insensitive, word boundaries), .includes() is simpler

Use /pattern/i.test(str) for flexibility or str.toLowerCase().includes(term) for simplicity


Destructuring in loops: Use for (let [key, value] of entries) for cleaner code

Works with Object.entries(), Map iterations, and any array of pairs




Bonus tip from your solutions:

Chain operations efficiently: Object.entries(obj).sort().slice().forEach() - each method flows naturally into the next
Use descriptive variable names: commenterCounts, sortedCommenters - makes code self-documenting

*/