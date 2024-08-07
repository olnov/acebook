// import React, { useState } from 'react';
// import { createPost } from ''; 

// const NewCommentForm = ({ token }) => {
//   const [message, setMessage] = useState('');
//   const [author_id, setAuthor] = useState(''); 

//   const handleSubmit = async (event) => {
//     event.preventDefault();
    
//     const comment = {
//       message,
//       author_id 
//     };

//     try {
//       // Call the createPost service function
//       const response = await createPost(post, token);
//       console.log('Post created successfully:', response);
//     } catch (error) {
//       console.error('Error creating post:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Title:</label>
//         <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//       </div>
//       <div>
//         <label>Message:</label>
//         <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
//       </div>
//       <button type="submit">Create Post</button>
//     </form>
//   );
// };

// export default NewPostForm;
