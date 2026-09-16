//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

router.post('/gfs-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var howManyBalls = req.session.data['gfs-required']

  // Check whether the variable matches a condition
  if (howManyBalls == "yes"){
    // Send user to next page
    res.redirect('/pages/appeals-response/appeals-grounds')
  } else {
    // Send user to ineligible page
    res.redirect('/pages/appeals-response/appeals-activities')
  }

})

router.post('/another-benefits', function (req, res) {

  var benefitsAnswer = req.session.data['benefits']

  console.log(benefitsAnswer)

  // Check whether the variable matches a condition
  if (benefitsAnswer == "None"){
    // Send user to next page
    res.redirect('/pages/appeals-response/appeals-case-summary')
  } else {
    // Send user to ineligible page
    res.redirect('/pages/appeals-response/appeals-what-benefit')
  }

})