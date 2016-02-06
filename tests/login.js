module.exports = {
  'Fill out form and login': function (client) {
        client.url('http://chamberlogin.com')
        client.assert.title('Login')
        client.setValue('input[name=UserName]', '2309admin')
        client.setValue('input[name=Password]', '111')
        client.click('input[type=Submit]')
        client.assert.title('Message Center')
        console.log('All done!');
        client.end();
  }
};
