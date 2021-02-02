const {
    Plugin
} = require('powercord/entities');
const {
    getModule
} = require('powercord/webpack');
const Settings = require('./components/Settings.jsx');

module.exports = class StereoCord extends Plugin {


    startPlugin() {
        powercord.api.settings.registerSettings('tobys-audio-expert', {
            category: this.entityID,
            label: 'Tobys Audio Expert',
            render: Settings
        });
		
        var isStereoModeEnabled = this.settings.get('useStereoMode');
		var microphoneBitrateSetting = this.settings.get('microphoneBitrateChanger');
		if(microphoneBitrateSetting === undefined) { this.props.updateSetting('microphoneBitrateChanger', 256000)}
		
        this.runTheAudioExpert(isStereoModeEnabled, microphoneBitrateSetting);
    }


    runTheAudioExpert(isStereoModeEnabled, microphoneBitrateSetting) {

        console.log("Stereo Mode: " + isStereoModeEnabled);
		console.log("Microphone Bitrate: " + microphoneBitrateSetting);
        ((i) => {
            window.webpackJsonp.push([
                [i], {
                    [i]: (n, b, d) => {
                        for (let key in d.c) {
                            if (d.c[key].exports) {
                                const module = d.c[key].exports.default || d.c[key].exports;
                                if (typeof(module) === 'function' && 'prototype' in module) {
                                    const descriptors = Object.getOwnPropertyDescriptors(module.prototype);
                                    if ('setSelfDeaf' in descriptors) {
                                        const initialize = module.prototype.initialize;
                                        module.prototype.initialize = function() {
                                            initialize.call(this, ...arguments);
                                            const setTransportOptions = this.conn.setTransportOptions;
                                            this.conn.setTransportOptions = function(obj) {
                                                if (obj.audioEncoder) {

                                                    if (isStereoModeEnabled) {
                                                        obj.audioEncoder.params = {
                                                            stereo: '2'
                                                        };
                                                        obj.audioEncoder.channels = 2;
                                                    } else {
                                                        obj.audioEncoder.params = {
                                                            stereo: '1'
                                                        };
                                                        obj.audioEncoder.channels = 1;
                                                    }
                                                }
                                                if (obj.fec) {
                                                    obj.fec = false;
                                                }
                                                if (obj.encodingVoiceBitRate < microphoneBitrateSetting) {
                                                    obj.encodingVoiceBitRate = microphoneBitrateSetting;
                                                }
                                                setTransportOptions.call(this, obj);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                },
                [
                    [i],
                ],
            ]);
        })(Math.random());


    }



    pluginWillUnload() {
        getModule(['getVoiceEngine'], false).getVoiceEngine().VoiceConnection = this.VoiceConnection;
    }
};
