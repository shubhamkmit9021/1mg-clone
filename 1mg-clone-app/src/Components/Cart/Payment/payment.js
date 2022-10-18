export default async function payment(cartItems) {
  fetch("https://express-stripe-server.herokuapp.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [...cartItems],
      urls: {
        success: `https://json-server-1mg.herokuapp.com/`,
        cancle: `https://json-server-1mg.herokuapp.com/cart`,
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
