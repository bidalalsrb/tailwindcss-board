import React, { useState } from 'react';

function Board() {
  const [posts, setPosts] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingTitle, setEditingTitle] = useState('');
  const [editingContent, setEditingContent] = useState('');

  const handleAddPost = () => {
    if (newTitle.trim() === '' || newContent.trim() === '') return;
    setPosts([...posts, { title: newTitle, content: newContent }]);
    setNewTitle('');
    setNewContent('');
  };

  const handleEditPost = (index) => {
    setEditingIndex(index);
    setEditingTitle(posts[index].title);
    setEditingContent(posts[index].content);
  };

  const handleSaveEdit = () => {
    const updatedPosts = [...posts];
    updatedPosts[editingIndex] = {
      title: editingTitle,
      content: editingContent,
    };
    setPosts(updatedPosts);
    setEditingIndex(null);
    setEditingTitle('');
    setEditingContent('');
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">게시판</h1>

      {/* 새 게시물 작성 */}
      <div className="mb-8 p-4 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4">새 게시물 작성</h2>
        <input
          type="text"
          placeholder="제목"
          className="w-full mb-2 p-2 border rounded-md"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          placeholder="내용"
          className="w-full mb-2 p-2 border rounded-md"
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
        />
        <button
          onClick={handleAddPost}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          작성
        </button>
      </div>

      {/* 게시물 목록 */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md">
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  className="w-full mb-2 p-2 border rounded-md"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                <textarea
                  className="w-full mb-2 p-2 border rounded-md"
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)}
                />
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={handleSaveEdit}
                    className="bg-green-500 text-white py-1 px-4 rounded-md hover:bg-green-600"
                  >
                    저장
                  </button>
                  <button
                    onClick={() => setEditingIndex(null)}
                    className="bg-gray-400 text-white py-1 px-4 rounded-md hover:bg-gray-500"
                  >
                    취소
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
                <p className="mb-4">{post.content}</p>
                <div className="flex justify-end space-x-2">
                  <button
                    onClick={() => handleEditPost(index)}
                    className="bg-yellow-500 text-white py-1 px-4 rounded-md hover:bg-yellow-600"
                  >
                    수정
                  </button>
                  <button
                    onClick={() => handleDeletePost(index)}
                    className="bg-red-500 text-white py-1 px-4 rounded-md hover:bg-red-600"
                  >
                    삭제
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
