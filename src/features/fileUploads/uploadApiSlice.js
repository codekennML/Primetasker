import axios from "axios";
import { useDispatch } from "react-redux";
import { apiSlice } from "../../app/apiSlice";

// EndPoints injected to our api for everything upload
export const uploadApiCalls = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewFile: builder.mutation({
      async queryFn(data, _queryApi, _extraOptions) {
        let formData = data[0];
        formData.append("api_key", "351211717152192");
        formData.append("upload_preset", "ieurv9nx");

        const name = data[1];
        let percentCompleted;
        let progress;

        const config = {
          onUploadProgress: function (progressEvent) {
            percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            progress = { [name]: percentCompleted };
          },

          transformResponse: (response) => {
            return { response, progress };
          },
        };

        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dpmj4sjm9/upload",
          formData,
          config
        );

        if (response.error) throw response.error;
        return response.data
          ? { data: response.data }
          : { error: response.error };
      },
    }),
  }),
});
// RTK provides useHooks for each request which begins with 'use' and ends with 'Query', the getupload is exported for use on dispactch
export const { useAddNewFileMutation } = uploadApiCalls;
