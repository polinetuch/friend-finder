# Friend Finder App

### This is a compatibility-based "FriendFinder" application, which is basically a dating app. This full stack website will take in results from user's suverys, then compate their answers with those from the other users. The app will then display the name and picture of the user with the best overall match.

#### Details on the app: https://find-your-friend-by-polinet.herokuapp.com/   ![App Image] (https://github.com/polinetuch/friend-finder/blob/master/app/public/assets/images/image1.PNG)

    10 questions display in the survey
    ![Image of Survey] (https://github.com/polinetuch/friend-finder/blob/master/app/public/assets/images/survey1.PNG)
    ![Image of Survey 2] (https://github.com/polinetuch/friend-finder/blob/master/app/public/assets/images/survey2.PNG)

    * Each answer is based on a scale from 1 to 5,
      which determines how much the user agrees or disagrees with the question.

    * User's results will then convert into an array of numbers. It will be compareed between the other user's scores, question by question. Math.abs is used to calculate the difference to find the closest match
    ![Image of calculation] (https://github.com/polinetuch/friend-finder/blob/master/app/public/assets/images/mathCal.PNG)

    * Once compatible friend is compared and found, the result is displayed as a modal pop-up, which shows the name and photo of the closest match

    * User's data can also be viewed through this link: https://find-your-friend-by-polinet.herokuapp.com/api/friends
    ![Image of data] (https://github.com/polinetuch/friend-finder/blob/master/app/public/assets/images/image2.PNG)

# Don't forget to checkout my github repo: https://github.com/polinetuch/friend-finder

