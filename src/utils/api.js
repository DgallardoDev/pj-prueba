import axios from "axios";
export const apiCall = async () =>
  await axios({ url: `${process.env.REACT_APP_API_AMIIBO}/api/amiibo` }).catch(
    (error) => {
      throw new Error(error);
    }
  );
