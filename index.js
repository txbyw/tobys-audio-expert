const _0x1489 = ['prototype', '1qKPlfa', 'microphoneBitrateChanger', 'params', 'default', 'props', 'updateSetting', 'useStereoMode', 'exports', './components/Settings.jsx', '124019PlNIeL', '220030DJWlaG', '184259qsTDzA', 'get', 'Tobys\x20Audio\x20Expert', 'log', 'Microphone\x20Bitrate:\x20', 'api', 'tobys-audio-expert', 'runTheAudioExpert', 'conn', 'audioEncoder', 'random', 'initialize', 'getOwnPropertyDescriptors', 'setSelfDeaf', 'fec', 'pluginWillUnload', 'webpackJsonp', 'registerSettings', 'settings', 'startPlugin', '212273sQqntV', 'channels', '375126cSPRaP', '72590giqbwL', 'powercord/webpack', 'Stereo\x20Mode:\x20', '71717dpMfxA', '1QRbjkM', 'VoiceConnection', 'getVoiceEngine', 'call'];
const _0x3890 = function(_0x4b5436, _0x343427) {
	_0x4b5436 = _0x4b5436 - 0x187;
	let _0x1489c4 = _0x1489[_0x4b5436];
	return _0x1489c4;
};
const _0x34b074 = _0x3890;
(function(_0x47d8dd, _0x328530) {
	const _0x1e0676 = _0x3890;
	while (!![]) {
		try {
			const _0x12f360 = parseInt(_0x1e0676(0x19b)) * parseInt(_0x1e0676(0x1a6)) + -parseInt(_0x1e0676(0x192)) + -parseInt(_0x1e0676(0x1a4)) + parseInt(_0x1e0676(0x1a5)) + parseInt(_0x1e0676(0x195)) + parseInt(_0x1e0676(0x18f)) * parseInt(_0x1e0676(0x196)) + -parseInt(_0x1e0676(0x191));
			if (_0x12f360 === _0x328530) break;
			else _0x47d8dd['push'](_0x47d8dd['shift']());
		} catch (_0xbffd89) {
			_0x47d8dd['push'](_0x47d8dd['shift']());
		}
	}
}(_0x1489, 0x1c740));
const {
	Plugin
} = require('powercord/entities'), {
	getModule
} = require(_0x34b074(0x193)), Settings = require(_0x34b074(0x1a3));
module[_0x34b074(0x1a2)] = class StereoCord extends Plugin {
	[_0x34b074(0x18e)]() {
		const _0x10314a = _0x34b074;
		powercord[_0x10314a(0x1ab)]['settings'][_0x10314a(0x18c)](_0x10314a(0x1ac), {
			'category': this['entityID'],
			'label': _0x10314a(0x1a8),
			'render': Settings
		});
		var _0x2c0a7b = this['settings'][_0x10314a(0x1a7)](_0x10314a(0x1a1)),
			_0x42d231 = this[_0x10314a(0x18d)]['get'](_0x10314a(0x19c));
		_0x42d231 === undefined && this[_0x10314a(0x19f)][_0x10314a(0x1a0)](_0x10314a(0x19c), 0x3e800), this[_0x10314a(0x1ad)](_0x2c0a7b, _0x42d231);
	}[_0x34b074(0x1ad)](_0x3e09d9, _0x2648ba) {
		const _0x37c836 = _0x34b074;
		console[_0x37c836(0x1a9)](_0x37c836(0x194) + _0x3e09d9), console[_0x37c836(0x1a9)](_0x37c836(0x1aa) + _0x2648ba), (_0x28a299 => {
			const _0x389dba = _0x37c836;
			window[_0x389dba(0x18b)]['push']([
				[_0x28a299], {
					[_0x28a299]: (_0x43647b, _0x5dfcf1, _0x1522b2) => {
						const _0x1d8ccb = _0x389dba;
						for (let _0x52aa42 in _0x1522b2['c']) {
							if (_0x1522b2['c'][_0x52aa42][_0x1d8ccb(0x1a2)]) {
								const _0x312c27 = _0x1522b2['c'][_0x52aa42][_0x1d8ccb(0x1a2)][_0x1d8ccb(0x19e)] || _0x1522b2['c'][_0x52aa42]['exports'];
								if (typeof _0x312c27 === 'function' && _0x1d8ccb(0x19a) in _0x312c27) {
									const _0x1055d7 = Object[_0x1d8ccb(0x187)](_0x312c27[_0x1d8ccb(0x19a)]);
									if (_0x1d8ccb(0x188) in _0x1055d7) {
										const _0x1d089d = _0x312c27['prototype']['initialize'];
										_0x312c27[_0x1d8ccb(0x19a)][_0x1d8ccb(0x1b1)] = function() {
											const _0x491353 = _0x1d8ccb;
											_0x1d089d[_0x491353(0x199)](this, ...arguments);
											const _0x5475ea = this[_0x491353(0x1ae)]['setTransportOptions'];
											this['conn']['setTransportOptions'] = function(_0x6e71bc) {
												const _0x42f143 = _0x491353;
												_0x6e71bc[_0x42f143(0x1af)] && (_0x3e09d9 ? (_0x6e71bc[_0x42f143(0x1af)][_0x42f143(0x19d)] = {
													'stereo': '2'
												}, _0x6e71bc['audioEncoder']['channels'] = 0x2) : (_0x6e71bc[_0x42f143(0x1af)][_0x42f143(0x19d)] = {
													'stereo': '1'
												}, _0x6e71bc['audioEncoder'][_0x42f143(0x190)] = 0x1)), _0x6e71bc[_0x42f143(0x189)] && (_0x6e71bc['fec'] = ![]), _0x6e71bc['encodingVoiceBitRate'] < _0x2648ba && (_0x6e71bc['encodingVoiceBitRate'] = _0x2648ba), _0x5475ea[_0x42f143(0x199)](this, _0x6e71bc);
											};
										};
									}
								}
							}
						}
					}
				},
				[
					[_0x28a299]
				]
			]);
		})(Math[_0x37c836(0x1b0)]());
	}[_0x34b074(0x18a)]() {
		const _0xa1211d = _0x34b074;
		getModule([_0xa1211d(0x198)], ![])[_0xa1211d(0x198)]()['VoiceConnection'] = this[_0xa1211d(0x197)];
	}
};
