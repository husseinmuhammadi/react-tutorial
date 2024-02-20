import React from "react";


const request = async (api, options) => {
  let result;
  try {
    result = await fetch(`${urls.endPoint}/${api}`, {
      ...options,
      headers: getHeaders(),
    });
  } catch (e) {
    console.log(e);

    return Promise.reject(e);
  }

  if (result) {
    if (result.status === 401) {
      dispatch({ type: ACTION_UPDATE_TOKEN, payload: "" });
      // window.history.pushState({}, "", "/logout");
    } else {
      return result.json();
    }
  } else {
    return <div>error</div>;
  }
};

export const post = ({ api, model } = {}) => {
  return request(api, {
    method: "POST",
    // mode: "no-cors",
    body: JSON.stringify(model),
  });
};

export const get = ({ api, model } = {}) => {
  const query = convertObjectToQueryString(model);
  return request(`${api}?${query}`, {
    // mode: "no-cors",
    method: "GET",
  });
};

export const remove = ({ api, id } = {}) => {
  return request(`${api}/${id}`, {
    method: "DELETE",
  });
};

export const put = ({ api, model } = {}) => {
  return request(api, {
    method: "PUT",
    body: JSON.stringify(model),
  });
};

export const patch = ({ api, model } = {}) => {
  return request(api, {
    method: "PATCH",
    body: JSON.stringify(model),
  });
};