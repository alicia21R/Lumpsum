export const USER_TOKEN = "@LearnSave_token";
export const USER_DATA = "@LearnSave_user_data";

export const isAuthenticated = () => {
  const accessToken = localStorage.getItem(USER_TOKEN);

  if (accessToken) {
    return true;
  }

  return false;
};

export const token = () => {
  const accessToken = localStorage.getItem(USER_TOKEN);
  return accessToken;
};

export function getUser() {
  const user = localStorage.getItem(USER_DATA);
  if (user) {
    return JSON.parse(user).data.user.data;
  }

  return false;
}

export const formatErrorMessage = (data, message = "") => {
  if (!data) {
    return message;
  }

  const response = [];
  if (Array.isArray(data)) {
    for (const x in data) {
      const keys = Object.keys(data[x]);
      for (const xx of keys) {
        response.push(`${xx} - ${data[x][xx]}`);
      }
    }
  } else {
    const keys = Object.keys(data);
    for (const x of keys) {
      response.push(`${x} - ${data[x][0]}`);
    }
  }

  // if (message) {
  //   return message + " " + response.join(" ");
  // }

  return response.join(" ");
};

export const getInitials = (str) => {
  if (str) {
    const splited = str.split(" ");
    return `${splited[0][0].toLocaleUpperCase()}${splited[1][0].toLocaleUpperCase()}`;
  }
  return str;
};
