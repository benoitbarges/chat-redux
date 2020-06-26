export const SET_SELECTED_CHANNEL = 'SET_SELECTED_CHANNEL';
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const CREATE_MESSAGE = "CREATE_MESSAGE";

export function setSelectedChannel(channel) {
  return {
    type: SET_SELECTED_CHANNEL,
    payload: channel
  };
}

export function fetchMessages(channel) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url).then(response => response.json());

  return {
    type: FETCH_MESSAGES,
    payload: promise
  };
}

export function createMessage(channel, author, content) {
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const body = { author, content };
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(r => r.json());
  return {
    type: CREATE_MESSAGE,
    payload: promise
  };
}
