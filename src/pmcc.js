
import Memcached from 'memcached';

class Pmcc{
	constructor(hostPort, opt = {}){
		this.memcacher = new Memcached(hostPort, opt);
	}

	init(){
		let pmcc = {};


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

	}

	factory(fn){
		const that = this;
		return function (...obj) {
			return new Promise((resolve, reject) => {
				fn.call(that.memcacher, ...obj, (err, data) => {
					if(err) reject(err);
					resolve(data);
				})
			})
		}
	}

	primeval(){
		return this.memcacher;
	}
}

export default Pmcc;

