const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "pkr",
    metadata: {
      company: "HaniStyle",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});


exports.processPaymentCash = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await ({
    amount: req.body.amount,
    currency: "pkr",
    metadata: {
      company: "HaniStyle",
    },
  });

  res
    .status(200)
    .json({ success: true, message:"Cash on delivery" });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: process.env.STRIPE_API_KEY });
});
