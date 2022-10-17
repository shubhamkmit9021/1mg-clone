export default function payment(cartItems) {
  fetch("https://express-stripe-server.herokuapp.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [...cartItems],
      urls: {
        success: `http://localhost:3000/`,
        cancle: `http://localhost:3000/`,
      },
    }),
  })
    .then((res) => {
      if (res.ok) return res.json();
      return res.json().then((json) => Promise.reject(json));
    })
    .then(({ url }) => {
      window.location = url;
    })
    .catch((e) => {
      console.error(e.error);
    });
}
