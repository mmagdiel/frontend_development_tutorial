import { posts } from './mock.js';

function getPostByUserId(userId) {
return posts.filter(item => item.userId === userId);
}


function getPostById(ID) {
  return posts.filter(item => item.id === ID);
}


function getPostByUserIdAndId(userId, Id) {
  return posts.filter(item => item.userId === userId && item.id === Id);
}

export { getPostByUserId, getPostById, getPostByUserIdAndId };