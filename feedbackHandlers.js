const Feedback = require("./feedbackLib");

const getAllFeedbacks = (req, res) => {
    const feedbacks = Feedback.getAll()
    res.json(feedbacks);
    //res.json(Feedback.getAll());
};

const createFeedback = (req, res) => {
    const {sender, message, rating} = req.body;
    const newRequest = Feedback.addOne(sender, message, rating)
    if (newRequest){
        res.status(201).json(newRequest)
    }
    else{
        res.stats(404).json("Failed to create feedback");
    }
};

const getFeedbackById = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const feedback = Feedback.findById(feedbackId);
    if (feedback){
        res.json(feedback)
    }
    else{
        res.status(404).json("Failed to find feedback");
    }
};

const updateFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const {sender, message, rating} = req.body;
    const updatedFeedback = Feedback.updateOneById(feedbackId, {sender, message, rating})
    
    if (updatedFeedback){
        res.json(updatedFeedback)
    } else {
        res.status(404).json("Feedback not found")
    }
};

const deleteFeedback = (req, res) => {
    const feedbackId = req.params.feedbackId;
    const  deletedFeedback = Feedback.deleteOneById(feedbackId)
    if (deletedFeedback){
        res.status(204).json(`Feedback with id of ${feedbackId} deleted`)
    } else {
        res.status(404).json("Feedback not found")
    }
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};