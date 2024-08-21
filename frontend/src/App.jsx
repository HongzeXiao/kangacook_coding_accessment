import { useState, useEffect } from 'react'
import Post from './post';

function App() {
  const [posts,setPosts]=useState([])
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    async function fetchData() {
      console.log(import.meta.env.VITE_API_URL)
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setPosts(result)
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}posts/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, body }),
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const newPost = await response.json();
      setPosts([...posts, newPost]); // Update the posts state to include the new post
      setTitle(''); // Clear the input fields
      setBody('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <>
     <h1>Posts</h1>
     {/* <p>{message.greeting}</p> */}
     {/* Form to create a new post */}
     <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <br />
        <button type="submit">Create Post</button>
      </form>

      {/* Display the list of posts */}
     {posts.map((post, index) => (
          <Post title={post.title} body={post.body}/>
        ))}
    </>
  )
}

export default App
