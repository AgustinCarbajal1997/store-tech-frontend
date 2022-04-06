
export const ADD_COMPARISON = "ADD_COMPARISON"; 
export const DELETE_COMPARISON = "DELETE_COMPARISON"; 

export const addToCompare = (category, item) => ({
    type:ADD_COMPARISON,
    payload:{
        item,
        category
    }
})

export const deleteComparison = () => ({
    type:DELETE_COMPARISON
})