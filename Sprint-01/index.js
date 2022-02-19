//Task 1
function getModifiedArray(array) {
    const newArray = [...array];
    newArray.splice(0, 1, "Start");
    newArray.splice(-1, 1, "End");
    return newArray;  
}
