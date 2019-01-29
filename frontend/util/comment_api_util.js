export const createComment = comment => {
  return $.ajax({
    method: 'POST',
    url: 'api/comments',
    data: comment,
    contentType: false,
    processData: false,
  });
};

export const deleteComment = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/comments/${id}`,
  });
};
