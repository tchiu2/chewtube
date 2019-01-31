export const like = likeableObj => {
  const type = likeableObj.like.likeable_type.toLowerCase() + "s";
  const id = likeableObj.like.likeable_id;
  return $.ajax({
    method: 'POST',
    url: `api/${type}/${id}/likes`,
    data: likeableObj,
  });
};

export const unlike = likeableObj => {
  const type = likeableObj.like.likeable_type.toLowerCase() + "s";
  const id = likeableObj.like.likeable_id;
  return $.ajax({
    method: 'DELETE',
    url: `api/${type}/${id}/likes`,
    data: likeableObj,
  });
};
