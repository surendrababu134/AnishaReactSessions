export const Get = url => {
    let options = {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    };
  
    return fetch(url, options);
  };