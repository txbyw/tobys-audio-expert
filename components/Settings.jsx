const { existsSync, lstatSync } = require('fs');
const { React, getModule } = require('powercord/webpack');
const { SwitchItem, TextInput, SliderInput, ButtonItem, Category } = require('powercord/components/settings');

let getGuild, getFlattenedGuilds;

module.exports = class AudioExpertSettings extends React.Component {
  constructor (props) {
    super(props);

    if (getGuild && getFlattenedGuilds) {
      this._setState(false);
    }
  }

  _setState (update = true) {
    const state = {
      isFilePathValid: this.props.getSetting('filePath') ? existsSync(this.props.getSetting('filePath')) : true,
      initialFilePathValue: this.props.getSetting('filePath'),

      isCloneIdValid: this.props.getSetting('defaultCloneId') ? !!getGuild(this.props.getSetting('defaultCloneId')) : true,
      initialCloneIdValue: this.props.getSetting('defaultCloneId')
    };

    if (update) {
      this.setState(state);
    } else {
      this.state = state;
    }
  }

  async componentDidMount () {
    if (!(getGuild && getFlattenedGuilds)) {
      ({ getGuild } = await getModule([ 'getGuild' ]));
      ({ getFlattenedGuilds } = await getModule([ 'getFlattenedGuilds' ]));

      this._setState();
    }
  }

  render () {
    if (!(getGuild && getFlattenedGuilds)) {
      return null;
    }

    return (
      <div>
        <SwitchItem
          note='Toggles Microphone Stereo Mode.'
          value={this.props.getSetting('useStereoMode')}
          onChange={() => this.props.toggleSetting('useStereoMode')}
        >
          Stereo Mode
        </SwitchItem>

		<SliderInput
				note='This changes your microphone bitrate and will up the quality of your microphone.'
                minValue={ 1000 }
                maxValue={ 510000 }
				stickToMarkers
                initialValue={ this.props.getSetting('microphoneBitrateChanger', 1000) }
                markers={[ 10000, 128000, 256000, 384000, 510000 ]}
                onValueChange={ bitrate => this.props.updateSetting('microphoneBitrateChanger', bitrate) }
            >Microphone Bitrate</SliderInput>
		
		  <ButtonItem color="blue">
  PLEASE PRESS Ctrl+R FOR CHANGES TO APPLY
</ButtonItem>
		  
		  
      </div>
    );
  }

  _handleGuildToggle (id) {
    const hiddenGuilds = this.props.getSetting('hiddenGuilds', []);

    if (!hiddenGuilds.includes(id)) {
      this.props.updateSetting('hiddenGuilds', [ ...hiddenGuilds, id ]);
    } else {
      this.props.updateSetting('hiddenGuilds', hiddenGuilds.filter(g => g !== id));
    }
  }
};
