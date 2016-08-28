function main() {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    
    
}

//t is in [0, 1]
function interp(x1, x2, t) {
	return x1 + (x2 - x1) * t;
}

class Vector {
	constructor(x = 0, y = 0, z = 0, w = 1) {
		this.x = x;
		this.y = y;
		this.z = z;
		this.w = w;
	}
	
	length() {
		let sq = this.x * thi.x + this.y * this.y + this.z * this.z;
		return Math.sqrt(sq);
	}
	
	add(v) {
		let result = new Vector();
		result.x = this.x + v.x;
		result.y = this.y + v.y;
		result.z = this.z + v.z;
		return result;
	}
	
	sub(v) {
		let result = new Vector();
		result.x = this.x - v.x;
		result.y = this.y - v.y;
		result.z = this.z - v.z;
		return result;
	}
	
	dot(v) {
		return this.x * v.x + this.y * v.y + this.z * v.z;
	}
	
	cross(v) {
		let result = new Vector();
		result.x = this.y * v.z - this.z * v.y;
		result.y = this.z * v.x - this.x * v.z;
		result.z = this.x * v.y - this.y * v.x;
		return result;
	}
	
	normalize() {
		let len = this.length();
		let result = new Vector(this.x, this.y, this.z, this.w);
		
		if (len !== 0) {
			let inv = 1.0 / len;
			result.x = result.x * inv;
			result.y = result.y * inv;
			result.z = result.z * inv;
		}
		
		return result;
	}
	
	interp(v, t) {
		let result = new Vector();
		result.x = interp(this.x, v.x, t);
		result.y = interp(this.y, v.y, t);
		result.z = interp(this.z, v.z, t);
		return result;
	}
}

class Matrix4 {
	constructor() {
		this.members = [
			0, 0, 0, 0,
			0, 0, 0, 0,
			0, 0, 0, 0,
			0, 0, 0, 0
		];
	}
	
	get(row, col) {
		return this.members[row * 4 + col];
	}
	
	
}