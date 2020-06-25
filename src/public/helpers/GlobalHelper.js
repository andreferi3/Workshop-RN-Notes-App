import { Platform } from "react-native";
import { colorList } from '../..//assets/themes/colors'

export const iOS = Platform.OS === 'ios'

export function getCategoryColor(categoryId) {
    let idCategory = String(categoryId)
    let color = '#333'
    if(categoryId > 9) { 
        idCategory = idCategory.slice(-1) 
        color = colorList[idCategory]
    }
    color = colorList[idCategory]
    return color
}