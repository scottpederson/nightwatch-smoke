module.exports = {
  'Fill out form and login': function (client) {
    var data = client.globals;

    client
    .url('http://chamberlogin.com')
    .assert.title('Login')
    .setValue('input[name=UserName]', data.username)
    .setValue('input[name=Password]', data.password)
    .click('input[type=Submit]')
    .assert.title('Message Center')
    .closeWindow()
    .end();
  }
};
