import {servicesContent} from './services_data'
import {servicesName} from 'data/services_name'

export default 
function Make_data() {

	//сливаем 2 массива
	var i,j
	for(i= 0; i< servicesName.length; i++) {

		for(j= 0; j< servicesContent.length; j++) {
			if(servicesContent[j].id === servicesName[i].id)
				servicesContent[j].name= servicesName[i].name
		}//for j
	}//for i

	return servicesContent
	
}//Make_data