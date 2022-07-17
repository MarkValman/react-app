export function seedDatabase(firebase) {
    const users = [
      {
        userId: 'a37x2W4YlcevM1jB4OMQitMTgPO2',
        username: 'zheka',
        fullName: 'zheka 32',
        emailAddress: 'zhekaaaan@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'feldmoizer',
        fullName: 'Feldmanaizer 007',
        emailAddress: 'raphael@sanzio.com',
        following: [],
        followers: ['a37x2W4YlcevM1jB4OMQitMTgPO2'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'dali',
        fullName: 'Salvador Dalí',
        emailAddress: 'salvador@dali.com',
        following: [],
        followers: ['a37x2W4YlcevM1jB4OMQitMTgPO2'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'orwell',
        fullName: 'George Orwell',
        emailAddress: 'george@orwell.com',
        following: [],
        followers: ['a37x2W4YlcevM1jB4OMQitMTgPO2'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/feldmoizer/${i}.jpg`,
          caption: 'baraholshik',
          likes: [],
          comments: [
            {
              displayName: 'zheka',
              comment: 'dolbaeb?'
            },
            {
              displayName: 'orwell',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }