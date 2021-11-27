# userlane-challenge

**Cypress challenge description:**

Visit the Userlane career page and check if any QA position is open and then apply for the position.
Make to use of the cypress network request feature to check for a successful response from the backend when the application is submitted.


**Installation:** 

Make sure you have yarn installed in your computer, you can check it with the following command: 
`yarn --version` 

If no version is found, you can run this command to install it (npm is also required): 
`npm install --global yarn`

Run 'yarn install' in order to install all the dependencies needed to run the tests. 
Once all the dependencies were downloaded, you can use the following commands to run the tests: 

`yarn cypress run`
This will run the tests in headless mode and you can watch the video recordings once it finishes. 

`yarn cypress open` 
This will open the Cypress UI, from there you can select which test want to run and see the execution in real-time. 

You'll find 3 tests:

<img width="234" alt="image" src="https://user-images.githubusercontent.com/41808652/143685992-6a50331f-ec93-4644-848d-4b64f9f0b77a.png">

**Usage:**

> `searchAndApply.spec.js`

This is a more basic approach, on which once a QA job opening is found, the user will navigate to the posting and then to the actual form, and finally, it will fill out the form and send it (mocked response).

>`1_search_for_job.spac.js`
`2_apply_to_job.spec.js`

These tests solve the challenge in 2 steps, please, ***make sure to execute them in the right order:*** 

The first test is in charge of checking the site for a QA job opening and saving its URL to a file. 

The second test opens the job post URL, completes the form and submits it (mocked response). 
