// This file contains the functions to make HTTP requests to the server

const statusText = (status) => {
  console.log("Status", status);
  switch (status) {
    case 400:
      return "Bad Request";
    case 401:
      return "Unauthorized";
    case 403:
      return "Forbidden";
    case 404:
      return "Not Found";
    case 500:
      return "Internal Server Error";
    default:
      return "Something went wrong";
  }
}

const request = async (url, options) => {
  console.log("Requesting", options.method, url);
  let response;
  try {
    response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (e) {
    return Promise.reject(e);
  }

  if (!response.ok) {
    let error = await response.json();    
    return Promise.reject(new Error(`${error.title} - ${error.detail}`));
  }

  return response;
};

export const get = async (url, query) => {
  // convert query object to query string
  if (query) {
    const params = new URLSearchParams(query);
    url += "?" + params.toString();
  }
  let response = request(url, {
    method: "GET",
  });
  return response.then((res) => res.json());
}

const replaceIdInUrl = (url, id) => {
  console.log("Replacing", url, id);
  if (!id) throw new Error("Invalid ID");
  if (!url.includes("{id}")) {
    throw new Error("Invalid URL");
  }
  return url.replace("{id}", id);
}

export const getOne = async (url, id) => {
  url = replaceIdInUrl(url, id);
  return request(url, {
    method: "GET",
  }).then((res) => res.json());
}

export const post = async (url, data) => {
  return request(url, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export const remove = async (url, id) => {
  console.log("Removing", url, id);
  try {
    url = replaceIdInUrl(url, id);
  } catch (e) {
    return Promise.reject(e);
  }
  return request(url, {
    method: "DELETE",
  });
}

// module.exports = {
//   get, post, remove
// };