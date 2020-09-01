const a=[1,1,1,1,1,0,0,0,0]
function counting(arr,value) {

	return Math.max(...a.reduce((sequence_length,x)=>{


		x===value? sequence_length[0]++:sequence_length.unshift(0);
		return sequence_length;

	},[0 ]) 

	);
	// body...
}

console.log("zero's= "+counting(a,0));
console.log("one's= "+counting(a,1));
