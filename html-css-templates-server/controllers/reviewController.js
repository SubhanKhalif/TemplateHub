import Review from "../models/Review.js";

// Create new review
export const createReview = async (req, res) => {
  const { templateId, rating, comment } = req.body;

  try {
    // Validate user authentication using logged-in user
    const loggedInUser = req.session.user;
    if (!loggedInUser || !loggedInUser._id) {
      return res.status(401).json({ message: "Authentication required" });
    }

    // Check if user already reviewed this template
    const existingReview = await Review.findOne({ 
      user: loggedInUser._id, 
      template: templateId 
    });
    
    if (existingReview) {
      return res.status(400).json({ 
        message: "You have already reviewed this template" 
      });
    }

    // Create and save new review
    const review = new Review({
      user: loggedInUser._id,
      template: templateId,
      rating,
      comment,
    });

    await review.save();
    res.status(201).json({ 
      message: "Review added", 
      review: {
        ...review._doc,
        user: {
          _id: loggedInUser._id,
          name: loggedInUser.name,
          email: loggedInUser.email
        }
      } 
    });
  } catch (error) {
    console.error("❌ Review create error:", error);
    res.status(500).json({ 
      message: "Failed to post review", 
      error: error.message 
    });
  }
};

// Get all reviews for a template with user info
export const getTemplateReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ template: req.params.id })
      .populate("user", "name email profilePicture")
      .sort({ createdAt: -1 });

    // Add isCurrentUser flag to each review using session user
    const loggedInUser = req.session.user;
    const reviewsWithUserStatus = reviews.map(review => ({
      ...review._doc,
      isCurrentUser: loggedInUser?._id?.toString() === review.user._id.toString()
    }));

    res.status(200).json(reviewsWithUserStatus);
  } catch (error) {
    console.error("❌ Fetch reviews error:", error);
    res.status(500).json({ 
      message: "Failed to fetch reviews", 
      error: error.message 
    });
  }
};

// Update existing review
export const updateReview = async (req, res) => {
  const { rating, comment } = req.body;

  try {
    // Find review and validate ownership
    const review = await Review.findById(req.params.reviewId)
      .populate("user", "name email");
      
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Check if logged-in user is the owner of the review
    const loggedInUser = req.session.user;
    if (review.user._id.toString() !== loggedInUser._id.toString()) {
      return res.status(403).json({ message: "Unauthorized to update this review" });
    }

    // Update review fields
    review.rating = rating;
    review.comment = comment;
    await review.save();

    res.status(200).json({ 
      message: "Review updated", 
      review: {
        ...review._doc,
        isCurrentUser: true
      }
    });
  } catch (error) {
    console.error("❌ Review update error:", error);
    res.status(500).json({ 
      message: "Failed to update review", 
      error: error.message 
    });
  }
};
