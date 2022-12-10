export default function persmission (req:any, res:any, next:any) {
    if(res.statusCode === 200) {
        console.log('Permission OK')
        next()
    } else {
        console.log('Permission STOP')
        res.redirect('/');
        return
    }
}