export default function authentication (req:any, res:any, next:any) {
    if(res.statusCode === 200) {
        console.log('Authentication OK')
        next()
    } else {
        console.log('Authentication STOP')
        res.redirect('/emails');
        return
    }
}