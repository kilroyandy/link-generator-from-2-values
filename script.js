const iframes = [
  "eventlist.aspx",
  "eventcalendar.aspx",
  "donations.aspx",
  "merchandise.aspx",
  "Memberships.aspx",
  "GiftVouchers.aspx",
  "FixedSeries.aspx",
  "Cookies.aspx",
  "Basket2.aspx",
];

const secureIframes = [
  "secure/Checkout.aspx",
  "secure/MyAccount.aspx",
  "secure/LoginLogout.aspx",
  "secure/ForgotPassword.aspx",
];

function createIframeList(arr) {
  let html = "";
  let clientName = document.getElementById("clientname").value;
  let domain = document.getElementById("domain").value;
  for (i = 0; i < arr.length; i++) {
    html += `<li><a href=https://${domain}/${clientName}/website/${arr[i]}>${arr[i]}</a></li>`;
  }
  return html;
}

function generate() {
  document.querySelector(".public").innerHTML = `
    <ul>
      ${createIframeList(iframes)}
    </ul>
    `;
  document.querySelector(".secure").innerHTML = `
    <ul>
      ${createIframeList(secureIframes)}
    </ul>
    `;
}

document.getElementById("generate").onclick = generate;
