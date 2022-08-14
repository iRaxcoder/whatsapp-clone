import instance from ".";

const messageService = {
  get: async () => {
    //loading.style.display="block";
    const response = await instance
      .get("/api/v1/messages/sync")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        //loading.style.display="none";
      });
    return response;
  },
  post: async (msg) => {
    //loading.style.display="block";
    const response = await instance
      .post("/api/v1/messages/new", msg)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        //loading.style.display="none";
      });
    return response;
  },
};

export default messageService;
