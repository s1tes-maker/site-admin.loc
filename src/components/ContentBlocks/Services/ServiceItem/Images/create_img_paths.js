import CreateImgPath from 'data/create_img_path'

export default	
function CreateImgPaths(photoesAmount, idService) {

	let massivePaths= []
	const path= CreateImgPath('services/' + idService + '/')

	for(let i= 1; i <= photoesAmount; i++) {

		massivePaths.push(path + i + '.jpg')
	
	}//for

	return massivePaths

}//CreateMasiivePath