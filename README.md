# Flatacuties
This is an app for voting the cutest animal. The app fetches data of animals from db.json which is within the app and displays a list of animal names. It further gives additional information on each animal upon selection. The additional information includes image and total votes. Voter should be able to add a new animal to the list, other than just voting for the animals present in data base.

## Instructions

1. The app is written in javascript language. In addition, installation of json server will be required.
2. Start both the json server and live server.
        json-server --watch db.json
        On HTML select 'open live server'
3. At the start of the app, a list of animal names fetched from db.json willl be displayed. Click on each animal to view the animal's image and total votes.
4. Add votes in the Vote Animal input field and click on add votes
5. Add a new animal to the vote list by providing details on 'Add new animal' section and click POST

## Author and License
@2022 Angela Owuor