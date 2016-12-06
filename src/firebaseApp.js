import { initializeApp, auth, database } from 'firebase';

const config = {
    apiKey: "AIzaSyBieUN-6MB66X3YZ-MoS-nJhNtBEJ2xUBI",
    authDomain: "novy-b3778.firebaseapp.com",
    databaseURL: "https://novy-b3778.firebaseio.com",
    storageBucket: "novy-b3778.appspot.com",
}

initializeApp(config);

const exampleDatabase = database().ref('example');

exampleDatabase.on('value', function(test) {
    console.log(test.val(), test.key);
});

const newArticle = {
    'mom': 'Angel',
    'dad': 'Angelo',
    'children': [
        {
            'name': 'Din',
            'last': 'Don'
        },
        {
            'name': 'Bin',
            'last': 'Bun'
        }
    ]
};

// exampleDatabase.push(newArticle);
// exampleDatabase.child('-KXnAaVBvn2n9Cbwoj4p').update({dad: 'pah'});
// exampleDatabase.child('-KXn8bdApTKuJUWNqXJo').set({'dad': 'pah'});
// exampleDatabase.child('-KXn7jtvLcP2RylhaOAP').remove();

export default exampleDatabase;