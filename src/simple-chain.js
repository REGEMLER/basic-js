const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink( value ) {
		if (value !== undefined) {
      this.chain.push(String(value));
    } else {
      this.chain.push('( )');
    }
		return this;
  },
  removeLink( position ) {
		if (Number.isInteger(position) && (this.chain[position - 1] !== undefined)) {
			this.chain.splice(position - 1, 1);
		} else {
			this.chain = [];
			throw new Error("You can't remove incorrect link!");
		}
		return this;
  },
  reverseChain() {
		this.chain.reverse();
		return this;
  },
  finishChain() {
		let result = '';
		if (this.chain.length === 0) return result;
    result = `( ${this.chain[0]} )`;
		for (let i = 1; i < this.chain.length; i++) {
			result = result + `~~( ${this.chain[i]} )`;
		}
		this.chain = [];
		return result;
  }
};

module.exports = {
  chainMaker
};
