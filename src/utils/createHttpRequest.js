import { reactive, ref } from "vue";
import notification from "./notification";

export default function createHttpRequest(
  requestHandler,
  payload = {},
  onSuccess = (data, header) => {},
  onError = () => {}
) {

  const data = ref({});
  const error = reactive({
    message: "",
    errors: null,
    status: false,
    status_code: 0,
  });
  const isError = ref(false);
  const isSuccess = ref(false);
  const isLoading = ref(false);
  const response = ref({});
  const headers = reactive({});

  const sendRequest = async (newPayload) => {
    isLoading.value = true;
    isSuccess.value = false;
    isError.value = false;
    try {
      const { data: responseData, headers: responseHeaders } =
        await requestHandler(newPayload || payload);
      isSuccess.value = true;
      response.value = responseData;
      data.value = responseData.data || responseData;

      Object.assign(headers, responseHeaders);
      onSuccess(data, responseHeaders);
    } catch (e) {
      console.log(e)
      if (!e.response) {
        throw new Error("An unexpect error Occurred");
        return;
      }

      if (e.response.status == 500 && e.response.request.status !== 400) {
        notification.error(e.response.statusText);
      }
      isError.value = true;
      if (process.env.NODE_ENV !== "production") {
      }

      if (e.response.data.errors) {
        const errorRes = e.response.data.errors[0];
        if (Array.isArray(errorRes.message)) {
          error.message = errorRes.message[0];
        } else {
          error.message = errorRes;
        }

        error.errors = e.response.data.errors;
        error.status = e.response.data.status;

        notification.error(errorRes.message ? errorRes.message : errorRes);
      }
      error.message = e.message;
      error.status_code = e.response.status;
    } finally {
      isLoading.value = false;
    }


    return {
      data,
      error,
      isLoading,
      isError,
      isSuccess,
      sendRequest,
      headers,
      response,
    };
  };

  return {
    data,
    error,
    isLoading,
    isError,
    isSuccess,
    sendRequest,
    headers,
    response,
  };
}
