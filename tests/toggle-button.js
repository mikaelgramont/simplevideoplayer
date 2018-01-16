module.exports = {
  'Clicking the play/pause button should toggle its label.' : function (client) {
    let buttonSelector = 'button[name=play-toggle]';
    client
      .url('http://www.local.wrk/simplevideoplayer/public/')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible(buttonSelector, 1000)
      .assert.containsText(buttonSelector, 'Play')
      .click(buttonSelector)
      .pause(1000)
      .assert.containsText(buttonSelector, 'Pause')
      .click(buttonSelector)
      .pause(1000)
      .assert.containsText(buttonSelector, 'Play')
      .end()
  }
}