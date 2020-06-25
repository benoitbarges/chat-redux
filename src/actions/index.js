export const SET_SELECTED_CHANNEL = 'SET_SELECTED_CHANNEL';
export const FETCH_MESSAGES = "FETCH_MESSAGES";

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
    playload: promise
  };
}
