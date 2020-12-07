# TR-BOT: Drum Machine

The TR-BOT is a browser based drum machine app with a 16-step sequencer.

Live Version: <https://tr-bot-project.vercel.app/>

![Imgur](https://i.imgur.com/4CZkK6l.png)

## Summary

The TR-BOT is a sample based drum machine built using the Tone.js library. It is modeled and styled after the iconic line of Roland hardware drum machines (TR-808, TR-909, TR-606) and hosts 6 different instrument sounds including Kick, Snare, High Hat 1, High Hat 2, Handclap, and Percussion. The interface is that of a 16-step sequencer which allows a user to build custom drum patterns by toggling any step either on or off. Audio playback is initiated by pressing the 'Play' button and stopped by pressing 'Stop'. At any time the sequencer can be cleared by pressing the 'Clear Steps' button. A user can also save a custom pattern and then toggle between patterns using the drop down menu below the sequencer GUI. 

Note when using on mobile make sure the device is not set to silent in order to hear audio playback.


## API

The API repo for this app is located here: <https://github.com/joedickey/tr-bot-api>

Available endpoints include:
* /patterns

Supported HTTP methods:
* GET
* POST
* DELETE


## Technology Used

### Front End
* React
* Javascript ES6
* Tone.js
* JSX
* HTML5
* CSS3

## Testing
* Jest
* Enzyme

## Production
* Vercel