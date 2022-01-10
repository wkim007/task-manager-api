const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = "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"
//sgMail.setApiKey(sendgridAPIKey)

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'wookim007@gmail.com',
//     //to: 'kimwo2@hotmail.com',
//     from: 'kimwo2@hotmail.com',
//     subject: 'This is my first createion!',
//     text: 'I hope this once actually get to you9.'
// }).then(()=> {
//     console.log('Email sent')
// }).catch((error)=> {
//     console.error(error)
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kimwo2@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app. ${name}. Let me know get along with the app.`
    }).then(()=> {
             console.log('Email sent')
    }).catch((error)=> {
         console.error(error)
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'kimwo2@hotmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye. ${name}. I hope to see you back sometime soon.`
    }).then(()=> {
             console.log('Email sent2')
    }).catch((error)=> {
         console.error(error)
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}