let feedbackArray = [];
let idCounter = 1;

function getAll(){
    return feedbackArray;
}

function addOne(sender, message, rating){
    if (!sender || !message || !rating)
        return false;

    const newFeedback = {
        id: idCounter,
        sender: sender,
        message: message,
        rating: rating

    };
    feedbackArray.push(newFeedback)
    idCounter++
    return newFeedback
}

function findById(id){
    const feedback = feedbackArray.find(item => item.id==id)
    if (feedback){
        return feedback
    }
    else{
        return false;
    }
}

function updateOneById(id, updatedData){
    const feedback = findById(id)
    if (pet){

    if (updatedData.sender){
        feedback.name = updatedData.sender
    }
    if (updatedData.message){
        feedback.message = updatedData.message
    }
    if (updatedData.rating){
        feedback.rating = updatedData.rating
    }
    return feedback
    }
    return false;
}

function deleteOneById(id){
    const feedback = findById(id)
    const initialLength = feedbackArray.length
    if(feedback){
        feedbackArray = feedbackArray.filter(feedback => feedback.id != id);
        return feedbackArray.length < initialLength
    }
    return false;
}

if (require.main === module) {
    let result = addOne("John Smith", "Great session on React components! I found the examples very helpful.", 4);
    console.log(result);
    console.log("getAll called:", getAll());
    console.log("findById called:", findById(1));
    // rest of the tests here
   }
module.exports ={
    getAll,
    addOne,
    deleteOneById,
    updateOneById,
    findById
}