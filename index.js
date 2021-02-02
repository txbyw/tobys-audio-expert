const _0x1a85 = ['exports', 'default', 'random', 'Microphone\x20Bitrate:\x20', '16oFKEZY', '239qrESnZ', '10870kDMWIc', 'log', 'getOwnPropertyDescriptors', 'encodingVoiceBitRate', '1267176rMxVxX', '3898cpEwVF', 'prototype', 'props', 'push', 'getVoiceEngine', 'powercord/webpack', 'tobys-audio-expert', 'webpackJsonp', 'call', '3227914LRHYsQ', 'get', './components/Settings.jsx', 'initialize', 'runTheAudioExpert', '3493LTQrzn', 'registerSettings', 'setTransportOptions', 'params', 'useStereoMode', 'startPlugin', '292500MDKzxK', 'audioEncoder', '154DbPcxp', 'api', 'microphoneBitrateChanger', 'Tobys\x20Audio\x20Expert\x20Test', '1OddESQ', 'VoiceConnection', '857243WDvaOY', 'settings', 'channels', 'Stereo\x20Mode:\x20', 'conn', 'fec', 'entityID'];
const _0x422a = function(_0x5b5554, _0x40b50d) {
	_0x5b5554 = _0x5b5554 - 0x1b2;
	let _0x1a85e1 = _0x1a85[_0x5b5554];
	return _0x1a85e1;
};
const _0x17d158 = _0x422a;
(function(_0x1ee910, _0x17b9c5) {
	const _0x5b5f58 = _0x422a;
	while (!![]) {
		try {
			const _0x388ec9 = parseInt(_0x5b5f58(0x1b7)) * -parseInt(_0x5b5f58(0x1b5)) + -parseInt(_0x5b5f58(0x1d7)) * parseInt(_0x5b5f58(0x1c3)) + -parseInt(_0x5b5f58(0x1dd)) + parseInt(_0x5b5f58(0x1c9)) * parseInt(_0x5b5f58(0x1df)) + -parseInt(_0x5b5f58(0x1c8)) + -parseInt(_0x5b5f58(0x1c4)) * -parseInt(_0x5b5f58(0x1c2)) + parseInt(_0x5b5f58(0x1d2));
			if (_0x388ec9 === _0x17b9c5) break;
			else _0x1ee910['push'](_0x1ee910['shift']());
		} catch (_0x3cda26) {
			_0x1ee910['push'](_0x1ee910['shift']());
		}
	}
}(_0x1a85, 0xb732c));
const {
	Plugin
} = require('powercord/entities'), {
	getModule
} = require(_0x17d158(0x1ce)), Settings = require(_0x17d158(0x1d4));
module[_0x17d158(0x1be)] = class StereoCord extends Plugin {
	[_0x17d158(0x1dc)]() {
		const _0x21170c = _0x17d158;
		powercord[_0x21170c(0x1b2)]['settings'][_0x21170c(0x1d8)](_0x21170c(0x1cf), {
			'category': this[_0x21170c(0x1bd)],
			'label': _0x21170c(0x1b4),
			'render': Settings
		});
		var _0x38fc02 = this[_0x21170c(0x1b8)][_0x21170c(0x1d3)](_0x21170c(0x1db)),
			_0x529d49 = this[_0x21170c(0x1b8)][_0x21170c(0x1d3)](_0x21170c(0x1b3));
		_0x529d49 === undefined && this[_0x21170c(0x1cb)]['updateSetting'](_0x21170c(0x1b3), 0x3e800), this['runTheAudioExpert'](_0x38fc02, _0x529d49);
	}[_0x17d158(0x1d6)](_0x41a1fb, _0x450544) {
		const _0x27de98 = _0x17d158;
		console[_0x27de98(0x1c5)](_0x27de98(0x1ba) + _0x41a1fb), console[_0x27de98(0x1c5)](_0x27de98(0x1c1) + _0x450544), (_0x3a2e18 => {
			const _0x5123a9 = _0x27de98;
			window[_0x5123a9(0x1d0)][_0x5123a9(0x1cc)]([
				[_0x3a2e18], {
					[_0x3a2e18]: (_0x4cf741, _0x13a30d, _0x1ab72f) => {
						const _0x2a8f9c = _0x5123a9;
						for (let _0x2c9b94 in _0x1ab72f['c']) {
							if (_0x1ab72f['c'][_0x2c9b94][_0x2a8f9c(0x1be)]) {
								const _0x27bd1c = _0x1ab72f['c'][_0x2c9b94]['exports'][_0x2a8f9c(0x1bf)] || _0x1ab72f['c'][_0x2c9b94][_0x2a8f9c(0x1be)];
								if (typeof _0x27bd1c === 'function' && _0x2a8f9c(0x1ca) in _0x27bd1c) {
									const _0x3609c2 = Object[_0x2a8f9c(0x1c6)](_0x27bd1c['prototype']);
									if ('setSelfDeaf' in _0x3609c2) {
										const _0x5a67b0 = _0x27bd1c['prototype'][_0x2a8f9c(0x1d5)];
										_0x27bd1c[_0x2a8f9c(0x1ca)][_0x2a8f9c(0x1d5)] = function() {
											const _0x10eb60 = _0x2a8f9c;
											_0x5a67b0['call'](this, ...arguments);
											const _0x350d6d = this[_0x10eb60(0x1bb)][_0x10eb60(0x1d9)];
											this[_0x10eb60(0x1bb)][_0x10eb60(0x1d9)] = function(_0x48123c) {
												const _0x3b98e3 = _0x10eb60;
												_0x48123c[_0x3b98e3(0x1de)] && (_0x41a1fb ? (_0x48123c[_0x3b98e3(0x1de)][_0x3b98e3(0x1da)] = {
													'stereo': '2'
												}, _0x48123c[_0x3b98e3(0x1de)][_0x3b98e3(0x1b9)] = 0x2) : (_0x48123c[_0x3b98e3(0x1de)]['params'] = {
													'stereo': '1'
												}, _0x48123c[_0x3b98e3(0x1de)][_0x3b98e3(0x1b9)] = 0x1)), _0x48123c[_0x3b98e3(0x1bc)] && (_0x48123c['fec'] = ![]), _0x48123c[_0x3b98e3(0x1c7)] < _0x450544 && (_0x48123c[_0x3b98e3(0x1c7)] = _0x450544), _0x350d6d[_0x3b98e3(0x1d1)](this, _0x48123c);
											};
										};
									}
								}
							}
						}
					}
				},
				[
					[_0x3a2e18]
				]
			]);
		})(Math[_0x27de98(0x1c0)]());
	}['pluginWillUnload']() {
		const _0x30bddb = _0x17d158;
		getModule([_0x30bddb(0x1cd)], ![])[_0x30bddb(0x1cd)]()[_0x30bddb(0x1b6)] = this['VoiceConnection'];
	}
};