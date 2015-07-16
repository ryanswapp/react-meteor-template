Meteor.startup(() => {

    if (Meteor.users.find().count() === 0) {
        Accounts.createUser({
            email: "ryancswapp@gmail.com",
            password: "foodbars"
        });
    }

});