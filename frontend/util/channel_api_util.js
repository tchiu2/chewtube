export const createChannel = channel => {
  return $.ajax({
    method: 'POST',
    url: 'api/channels',
    data: { channel },
  });
};

export const fetchChannels = filters => {
  return $.ajax({
    method: 'GET',
    url: 'api/channels',
    data: filters,
  });
};

export const fetchChannel = id => {
  return $.ajax({
    method: 'GET',
    url: `api/channels/${id}`,
  });
};

export const updateChannel = channel => {
  return $.ajax({
    method: 'PATCH',
    url: `api/channels/${channel.id}`,
    data: { channel },
  });
};

export const deleteChannel = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/videos/${id}`,
  });
};
