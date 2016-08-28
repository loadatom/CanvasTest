function main()
{
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    
    
}


class Vector 
{
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
		
	}
}