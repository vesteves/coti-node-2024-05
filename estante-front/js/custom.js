async function getUser() {
  const auth = JSON.parse(localStorage.getItem('auth'));
  let isAuth = !!auth;

  if (isAuth) {
    $('#login').html(
      `<button class="nav-link" id="goToDados">${auth.user.name}</button>`
    );

    const result = await fetch('http://localhost:8000/auth/me', {
      method: 'GET',
      headers: {
        Authorization: `bearer ${auth.token}`,
      },
    });

    const user = await result.json();
    localStorage.setItem(
      'auth',
      JSON.stringify({
        user,
        token: auth.token,
      })
    );

    return user;
  } else {
    $('#login').html(`<a class="nav-link" href="/auth/login.html">Login</a>`);
  }
}

$(document).ready(function () {
  getUser();

  $('#goToDados').click(function (e) {
    e.preventDefault();
    window.open('/dados.html', '_self');
  });
});
