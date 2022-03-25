/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

// Set focus to the
// https://www.gatsbyjs.com/blog/2020-02-10-accessible-client-side-routing-improvements/
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("Inside onRouteUpdate");
  console.log("location: ", location);
  console.log("prevLocation: ", prevLocation);

  if (prevLocation !== null) {
    console.log("Inside if prevLocation !== null");
    console.log("location: ", location);
    console.log("prevLocation: ", prevLocation);

    const skipLink = document.querySelector("#reach-skip-nav");
    if (skipLink) {
      skipLink.focus();
    }
  }
};
