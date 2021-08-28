const socketio = require('socket.io')
const Admin = require('../models/admin');

function configSocket(server) {
    try {
        let admins = [];
        Admin.find({}).select('_id').then(result => {
            admins = result
        }).catch(e => {
            console.log('error in socket \n', e)
        })


        const io = socketio(server, {
            cors: {
                origin: ["http://192.168.1.6:3000", "http://localhost:3000", 'http://192.168.1.8:3333', 'http://192.168.1.8:3000'],
            }
        })
        let onlineUsers = new Map();
        io.on('connection', socket => {
            const user_id = socket.handshake.query.userId
            if (onlineUsers.has(user_id)) {
                let arr = onlineUsers.get(user_id)
                arr.push(socket.id)
                onlineUsers.set(user_id, arr)
            } else {
                onlineUsers.set(user_id, [socket.id])
            }

            socket.on('send_message_to_employee', (theReciever) => {
                socket.to(onlineUsers.get(theReciever.to)).emit('recieve_message_from_admin', theReciever);
                theReciever.fromMe = true
                socket.emit('recieve_message', theReciever);
            })

            socket.on('send_message_to_admins', (theReciever) => {
                let allAdminSockets = []
                admins.forEach((Admin) => {
                    allAdminSockets.push(onlineUsers.get(`${Admin._id}`))
                });
                allAdminSockets = allAdminSockets.flat()

                socket.to(allAdminSockets).emit('recieve_message', theReciever);
                theReciever.fromMe = true
                socket.emit('recieve_message_from_admin', theReciever);

            })


            socket.on('disconnect', () => {
                try {
                    let arr = onlineUsers.get(user_id)
                    arr = arr.filter(v => socket.id !== v)

                    console.log('1:', onlineUsers)
                    if (arr[0]) {
                        onlineUsers.set(user_id, arr)
                    } else {
                        onlineUsers.delete(user_id)
                    }
                    console.log('2:', onlineUsers)

                } catch (e) {
                    console.log('error in socket')
                }
            })

            socket.on('disconnection', () => {
                try {
                    let arr = onlineUsers.get(user_id)
                    arr = arr.filter(v => socket.id !== v)
                    console.log('3:', onlineUsers)
                    if (arr[0]) {
                        onlineUsers.set(user_id, arr)
                    } else {
                        onlineUsers.delete(user_id)
                    }
                    console.log('4:', onlineUsers)

                } catch (e) {
                    console.log('error in socket')
                }
            })

        })

    } catch (e) {
        console.log('error in soket==>', e)
     }
}

module.exports = configSocket