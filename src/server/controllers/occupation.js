const Occupation = require('../models/Occupation');
const SocketNotification = require('../models/SocketNotification');
const Profile = require('../models/Profile');
const Socket = require('./sockets');
/**
 * @description Get the list of notifications
 * @returns {res}
 */
exports.index = async (req, res) => {
  const response = await Occupation.find();
  console.log(response);
  return res.json({
    success: true,
    data: response
  });
};

/**
 * @description Store new notification resource
 * @returns {res}
 */
exports.store = async (req, res) => {
  let {body} = req;
  const response = await Notification.create(body);

  let nofi = Profile.find({_id: body.sentBy}).then((nofi) => {
    let name = nofi[0].firstName + " " + nofi[0].lastName;
    Socket.socket('has-new-conversation', '', { id: response._id, to: body.recipients, sentBy: name, content: body.message, title: body.title, type: "Notification", hasNewMessage: true });
  });
  
  return res.json({
    success: true,
    data: response
  });
};

/**
 * @description Get the notification resource
 * @returns {res}
 */
exports.edit = async (req, res) => {
  const {id} = req.params;
  
  const response = await Notification.findOne({_id: id}).populate('recipients').populate('sentBy');
  
  return res.json({
    success: true,
    data: response
  });
};

/**
 * @description Update the notification resource
 * @returns {res}
 */
exports.saveAndUpdate = async (req, res) => {
  const { credential_assessment, loan_assistance, licensing, other, training, mentorship, organization} = req.body;
  console.log("-----------------------occupation:", req.body);
  const response = Occupation.findOne({organization: organization}).then((occupation) => {
    if (occupation) occupation.updateOne({
      credential_assessment: credential_assessment,
      loan_assistance: loan_assistance,
      licensing: licensing,
      other: other,
      training: training,
      mentorship: mentorship
    })
    else new Occupation({
      credential_assessment: credential_assessment,
      loan_assistance: loan_assistance,
      licensing: licensing,
      other: other,
      training: training,
      mentorship: mentorship,
      organization: organization
    }).save();
  })
  return res.json({
    success: true,
    data: {
      data: response
    }
  });
};

exports.deleteAll = async (req, res) => {
  const remove = await SocketNotification.find().remove();
  const response = await SocketNotification.find();
  
  return res.json({
    success: true,
    data: {
      data: response
    }
  });
};

/**
 * @description Delete the notification resource
 * @returns {res}
 */
exports.delete = async (req, res) => {
  const {id} = req.params;
  
  // const response = await Notification.deleteOne({_id: ids});
  let response = await Notification.findOne({_id: id}).remove();
  
  return res.json({
    success: true,
    data: response
  });
};
