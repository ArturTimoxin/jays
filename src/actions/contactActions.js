import API from "../services/apiAxios";
import { SubmissionError, reset } from "redux-form";

export function sendMessageFromContactForm({ name, email, message }, dispatch) {
  console.log({ name, email, message });
  return API.post("/message", { name, email, message })
    .then(res => {
      switch (res.status) {
        case 200: {
          console.log("OK");
          //   throw new SubmissionError({ _error: "Повідомлення успішно відправлено." })
          return dispatch(reset("myForm"));
          //   return dispatch({
          //       type: CONTACT_SEND_MESSAGE,
          //       payload: "Повідомлення успішно відправлено.",
          //   })
        }
        default: {
          return dispatch(reset("myForm"));
          // return dispatch({
          //     type: CONTACT_SEND_MESSAGE,
          //     payload: "Повідомлення успішно відправлено.",
          // })
        }
      }
    })
    .catch(err => {
      throw new SubmissionError({ ...err, _error: "Помилка серверу, спробуйте будь ласка пізніше." });
    });
}
