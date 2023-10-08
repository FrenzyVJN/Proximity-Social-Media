function PostDetails() {

  return (
    <main className='flex w-full h-full justify-center '>
      <form className= "flex flex-col h-1/2 w-1/2 justify-center mt-auto mb-auto">
        <h1 className="text-white font-semibold text-4xl">Create a New Post</h1>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title"  />

        <label htmlFor="content">Content:</label>
        <textarea id="content" />

        <label htmlFor="tags">Tags:</label>
        <input type="text" id="tags" />

        <button type="button" >Next</button>
      </form>
    </main>
  );
}

export default PostDetails;