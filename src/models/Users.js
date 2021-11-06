const mongoose = require('mongoose')
const {Schema, model} = mongoose
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    username: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String, 
        required: true
    }
},{collection: 'User'})

userSchema.methods.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = bcrypt.hash(password, salt)
    return hash
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema)