const logger = require('../configs/logger');

const Submission = require('../models/Submission');
const Permission = require('../models/Permission');

// @route POST api/submissions
// @desc Submit form
// @access Public
exports.postSubmission = async (req, res) => {
  console.log(req.body);
  try {
    const submission = await new Submission({
      content: req.body,
    });
    await submission.save();

    return res.json({
      success: true,
    });
  } catch (error) {
    logger.error(error);
    return res.status(422).json({
      alert: {
        title: 'Error!',
        detail: 'Server occurred an error,  please try again',
      },
    });
  }
};

// @route POST api/submissions/all
// @desc Return all submissions
// @access Private
exports.getAllSubmissions = async (req, res) => {
  console.log(req.body);
  const { profileId, organizationId } = req.body;

  try {
    const permissions = await Permission.findOne({
      profile: profileId,
      organization: organizationId,
    });

    if (permissions.role !== 'admin') {
      return res.status(422).json({
        alert: {
          title: 'Access denied!',
          detail: 'You do not have permissions',
        },
      });
    }

    // const allSubmissions = await Submission.find({
    //   organization: organizationId,
    // });
    const allSubmissions = await Submission.find().sort({
      dateSubmitted: 'desc',
    });
    return res.json({
      success: true,
      allSubmissions,
    });
  } catch (error) {
    logger.error(error);
    return res.status(422).json({
      alert: {
        title: 'Error!',
        detail: 'Server occurred an error,  please try again',
      },
    });
  }
};

// @route POST api/submissions/:submissionId
// @desc Return a submission
// @access Private
exports.getSubmission = async (req, res) => {
  const { profileId, organizationId } = req.body;
  const { submissionId } = req.params;

  try {
    const permissions = await Permission.findOne({
      profile: profileId,
      organization: organizationId,
    });

    if (permissions.role === 'admin') {
      const submission = await Submission.findOne({
        _id: submissionId,
      });
      return res.json({
        success: true,
        submission,
      });
    }
    return res.status(422).json({
      alert: {
        title: 'Access denied!',
        detail: 'You do not have permissions',
      },
    });
  } catch (error) {
    logger.error(error);
    return res.status(422).json({
      alert: {
        title: 'Error!',
        detail: 'Server occurred an error,  please try again',
      },
    });
  }
};
