function PostDetails() {

  return (
    <main className='flex w-full h-full justify-center '>
      <form className= "flex flex-col w-1/2 justify-center mt-auto mb-auto bg-gradient-to-b from-cyan-800 to-blue-800 items-center rounded-xl h-2/3 gap-4">
        <h1 className="text-white font-semibold text-4xl">Create a New Post</h1>
        <label htmlFor="title" className="text-white font-semibold text-xl mx-auto">Title</label>
        <input type="text" id="title" className="text-white text-4xl w-3/4 h-1/8 bg-gradient-to-b to-blue-600 from-cyan-700 rounded outline-none" />

        <label htmlFor="content" className="flex text-white mx-auto font-semibold text-xl">Content</label>
        <textarea id="content" className="text-white text-xl w-3/4 h-1/6 bg-gradient-to-b to-blue-600 from-cyan-700 rounded outline-none" />

        <label htmlFor="tags" className="text-white mx-auto font-semibold text-xl">Tags</label>
        <input type="text" id="tags" className="text-white text-xl w-3/4 h-1/8 bg-gradient-to-b to-blue-600 from-cyan-700 rounded outline-none"/>
        <br></br>
        <button className="w-1/3 text-xl bg-gradient-to-b from-cyan-600 to-blue-500 hover:bg-gradient-to-b hover:from-cyan-400 hover:to-blue-600 hover:scale-105 transition-transform  py-4 rounded-xl text-white font-semibold mx-auto">Next</button>
      </form>
    </main>
  );
}

export default PostDetails;