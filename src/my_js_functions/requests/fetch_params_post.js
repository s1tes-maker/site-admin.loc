export default 
function Create_fetch_params(Data){

	return {
			method: 'post',
			credentials: "same-origin",
			body: JSON.stringify(Data),
			headers: {
				'Content-Type': 'application/json',
				"Accept": "application/json, text-plain, */*",
				"X-Requested-With": "XMLHttpRequest",
			}//headers
	}//return	

}//function

