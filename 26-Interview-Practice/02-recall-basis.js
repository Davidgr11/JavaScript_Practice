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

// YOUR CODE HERE