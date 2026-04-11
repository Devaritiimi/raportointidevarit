app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await findUserByUsername(username);

  if (!user) {
    return res.status(401).send("Virheelliset tunnukset");
  }

  const validPassword = await comparePassword(password, user.passwordHash);

  if (!validPassword) {
    return res.status(401).send("Virheelliset tunnukset");
  }

  // Tallennetaan session
  req.session.userId = user.id;
  req.session.role = user.role;

  // FIX: oikea redirect roolin mukaan
  if (user.role === 'admin') {
    return res.redirect('/admin/dashboard');
  } else {
    return res.redirect('/home');
  }
});