
export const users = {
    validUser: {
        username: 'tomsmith',
        password: 'SuperSecretPassword!',
        message : 'You logged into a secure area'
    },
    invalidPassword: {
        username: 'tomsmith',
        password: 'wrongpassword',
        message : 'Your password is invalid!'
    },
    invalidUsername: {
        username: 'wronguser',
        password: 'SuperSecretPassword!',
        message : 'Your username is invalid!'
    }
}