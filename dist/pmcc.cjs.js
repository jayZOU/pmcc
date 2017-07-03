function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Memcached = _interopDefault(require('memcached'));

var Pmcc = function Pmcc(hostPort, opt){
	if ( opt === void 0 ) opt = {};

	this.memcacher = new Memcached(hostPort, opt);
};

Pmcc.prototype.init = function init (){
	var pmcc = {};


	pmcc.touch = this.factory(this.memcacher.touch);
	pmcc.get = this.factory(this.memcacher.get);
	pmcc.gets = this.factory(this.memcacher.gets);
	pmcc.getMulti = this.factory(this.memcacher.getMulti);
	pmcc.set = this.factory(this.memcacher.set);
	pmcc.replace  = this.factory(this.memcacher.replace );
	pmcc.cas = this.factory(this.memcacher.cas);
	pmcc.append = this.factory(this.memcacher.append);
	pmcc.prepend = this.factory(this.memcacher.prepend);
	pmcc.incr = this.factory(this.memcacher.incr);
	pmcc.decr = this.factory(this.memcacher.decr);
	pmcc.del = this.factory(this.memcacher.del);
	pmcc.version = this.factory(this.memcacher.version);
	pmcc.flush = this.factory(this.memcacher.flush);
	pmcc.stats = this.factory(this.memcacher.stats);
	pmcc.settings = this.factory(this.memcacher.settings);
	pmcc.slabs = this.factory(this.memcacher.slabs);
	pmcc.items = this.factory(this.memcacher.items);
	pmcc.cachedump = this.factory(this.memcacher.cachedump);
	pmcc.end = this.factory(this.memcacher.end);

	// pmcc.del = this.factory(this.memcacher.del);
	// pmcc.items = this.factory(this.memcacher.items);
	// pmcc.cachedump = this.factory(this.memcacher.cachedump);
	return pmcc;

};

Pmcc.prototype.factory = function factory (fn){
	var that = this;
	return function () {
			var obj = [], len = arguments.length;
			while ( len-- ) obj[ len ] = arguments[ len ];

		return new Promise(function (resolve, reject) {
			fn.call.apply(fn, [ that.memcacher ].concat( obj, [function (err, data) {
				if(err) { reject(err); }
				resolve(data);
			}] ));
		})
	}
};

Pmcc.prototype.primeval = function primeval (){
	return this.memcacher;
};

module.exports = Pmcc;
//# sourceMappingURL=pmcc.cjs.js.map
