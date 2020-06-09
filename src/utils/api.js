import axios from "axios";

class API {
  axiosInstance = null;

  constructor() {
    /* 
      🚨1 point EXTRA CREDIT 🚨 👉🏿 get the baseURL from the environment
      https://create-react-app.dev/docs/adding-custom-environment-variables/
    */
    const axiosInstance = axios.create({
      baseURL: "https://kwitter-api.herokuapp.com/",
      timeout: 30000,
      headers: { Authorization: `Bearer ${getToken()}` },
    });

    // Add a request interceptor to attach a
    axiosInstance.interceptors.request.use(
      (config) => ({
        ...config,
        headers: {
          ...config.headers,
          Authorization: `Bearer ${getToken()}`,
        },
      }),
      (error) => Promise.reject(error)
    );

    // Add a response interceptor
    axiosInstance.interceptors.response.use(
      ({ data }) => data,
      (error) => Promise.reject(error)
    );

    this.axiosInstance = axiosInstance;
  }

  ////////////////   Create a new user template

  async createUser({ newuser }) {
    try {
      const result = await this.axiosInstance.post("/users", newuser);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async login({ username, password }) {
    try {
      const result = await this.axiosInstance.post("/auth/login", {
        username,
        password,
      });
      return result;
    } catch (err) {
      // Instructor is logging you out because this failed
      helpMeInstructor(err);
      return err;
    }
  }

  async logout() {
    try {
      await this.axiosInstance.get("/auth/logout");
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  async createUser() {}

  ////////////////    get a user template

  async getUser(username) {
    console.log({ username });
    try {
      const result = await this.axiosInstance.get(`/users/${username}`);
      console.log(result);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  ////////////////   update a user template

  async updateUser(user) {
    try {
      const result = await this.axiosInstance.patch(
        `/users/${user.username}`,
        user.requestBody
      );
      console.log(result);
      return result;
    } catch (err) {
      helpMeInstructor(err);
      return err;
    }
  }

  ////////////////   Create a message template

  // async createMessage({ messageId }) {
  //   try {
  //     const result = await this.axiosInstance.post("/messages", messageId);
  //     return result;
  //   } catch (err) {
  //     helpMeInstructor(err);
  //     return err;
  //   }
  // }

  ////////////////   get a message template

  // async getMessage(messageId) {
  //   try {
  //     await this.axiosInstance.get(`/messages/${messageId}`, messageId);
  //   } catch (err) {
  //     helpMeInstructor(err);
  //     return err;
  //   }
  // }

  ////////////////   delete a message template

  // async deleteMessage(messageId) {
  //   try {
  //     await this.axiosInstance.delete(`/messages/${messageId}`, messageId);
  //   } catch (err) {
  //     helpMeInstructor(err);
  //     return err;
  //   }
  // }

  ////////////////   add a like template

  // async addLike(likeId) {
  //   try {
  //     await this.axiosInstance.post("/likes", likeId);
  //   } catch (err) {
  //     helpMeInstructor(err);
  //     return err;
  //   }
  // }

  ////////////////   remove a like template

  // async removeLike() {
  //   try {
  //     await this.axiosInstance.delete(`/likes/${likeId}`, likeId);
  //   } catch (err) {
  //     helpMeInstructor(err);
  //     return err;
  //   }
  // }
}

// WARNING.. do not touch below this line if you want to have a good day =]

function helpMeInstructor(err) {
  console.info(
    `
    Did you hit CORRECT the endpoint?
    Did you send the CORRECT data?
    Did you make the CORRECT kind of request [GET/POST/PATCH/DELETE]?
    Check the Kwitter docs 👉🏿 https://kwitter-api.herokuapp.com/docs/#/
    Check the Axios docs 👉🏿 https://github.com/axios/axios
    TODO: troll students
  `,
    err
  );
}

function getToken() {
  try {
    const storedState = JSON.parse(localStorage.getItem("persist:root"));
    return JSON.parse(storedState.auth).isAuthenticated;
  } catch {
    return "";
  }
}

export default new API();
