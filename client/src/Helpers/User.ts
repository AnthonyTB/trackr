import config from "../config";

interface IHeaders {
  "content-type"?: string;
  Authorization?: string;
}

interface IExtras {
  passedParams?: string[];
  passedHeaders?: IHeaders;
  passedBody?: any;
}

const User = {
  // // api call the handles account creation
  // createAccount(newAccount: any) {
  //   return fetch(`${config.API_ENDPOINT}/users`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(newAccount),
  //   }).then((res) =>
  //     !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json()
  //   );
  // },
  // // api call that handles delete account request
  // deleteAccount(username: string) {
  //   return fetch(`${config.API_ENDPOINT}/users/${username}`, {
  //     method: "DELETE",
  //     headers: {
  //       Authorization: `Bearer ${config.API_TOKEN}`,
  //     },
  //   });
  // },
  // // api call that handles account update request
  // updateAccount(updatedData, id: number) {
  //   return fetch(`${config.API_ENDPOINT}/users/edit/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Bearer ${config.TOKEN_KEY}`,
  //     },
  //     body: JSON.stringify(updatedData),
  //   }).then((res) => {
  //     return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
  //   });
  // },
  // // api call that handles login request
  // login(credentials) {
  //   return fetch(`${config.API_ENDPOINT}/auth/login`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(credentials),
  //   }).then((res) => {
  //     return !res.ok ? res.json().then((e) => Promise.reject(e)) : res.json();
  //   });
  // },
  // // api call that handles get current user data request
  // getCurrentUser(token: string) {
  //   return fetch(`${config.API_ENDPOINT}/users`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   }).then((res) => res.json());
  // },
  // // api call that handles get public account data request
  // getPublicAccountData(username: string) {
  //   return fetch(`${config.API_ENDPOINT}/users/public/${username}`, {
  //     method: "GET",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       return data.dbUser;
  //     });
  // },
  fetchCall(route: string, method: string, extras: IExtras) {
    const { passedParams, passedHeaders, passedBody } = extras;
    let finalRoute = `${config.API_ENDPOINT}${route}`;
    if (passedParams) {
      const paramsUrl = passedParams.join("/");
      finalRoute = `${config.API_ENDPOINT}${route}/${paramsUrl}`;
    }

    let fetchBody: any = {
      method,
    };

    if (passedHeaders) {
      fetchBody = {
        ...fetchBody,
        headers: {
          ...passedHeaders,
        },
      };
    }

    if (passedBody) {
      fetchBody = {
        ...fetchBody,
        body: JSON.stringify(passedBody),
      };
    }

    return fetch(`${finalRoute}`, {
      ...fetchBody,
    }).then((res) => res.json());
  },
};

export default User;
