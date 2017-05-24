import http from '../Services/Api';

export function getAstros() {
  return function (dispatch) {
    http.get("http://api.open-notify.org/astros.json").then((res) => {
      console.log(res);
      if(res.status === 200) {
        dispatch({ type: "GET_ASTROS", astros: res.body.people });
      }
    }).catch((err) => {
      console.log(err);
    })
  }
}