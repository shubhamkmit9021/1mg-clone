export default function payment() {
  fetch("https://express-stripe-server.herokuapp.com/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      items: [
        { id: 1, quantity: 1, price: 40, name: "First" },
        { id: 2, quantity: 1, price: 40, name: "Second" },
      ],
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
