import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/User.js';
import { validator } from '../helpers/ErrorHandler.js';
import { createAccessToken, createRefreshToken } from '../helpers/JwtCreators.js';


export const register = async (req,res) => {
    try {
        const {name,email,password} = req.body

        const msg = validator(email,password)
        if(msg) return res.status(400).json({error: msg})

        const user = await User.findOne({email})
        if(user) return res.status(400).json({error: "This user is already exists"})

        const passwordhash = await bcrypt.hash(password, 12)
        const newuser = await User({
            name,
            email,
            password: passwordhash
        }).save()

        // create jsonwebtoken 
        const accesstoken = createAccessToken({id: newuser._id})
        const refreshtoken = createRefreshToken({id: newuser._id})

        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 
        })


        res.status(200).json(accesstoken)

    } catch (error) {
        return res.status(500).json({error: error})
    }
}

export const login = async (req,res) => {
    try {
        const {email,password} = req.body

        const msg = validator(email,password)
        if(msg) return res.status(400).json({err: msg})

        const user = await User.findOne({email})
        if(!user) return res.status(400).json({error: "This user does not exists"})

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({error: "Password is not valid"})


        // If login success , create access token and refresh token
        const accesstoken = createAccessToken({id: user._id})
        const refreshtoken = createRefreshToken({id: user._id})

        res.cookie('refreshtoken', refreshtoken, {
            httpOnly: true,
            maxAge: 7*24*60*60*1000 
        })

        res.json(accesstoken)
    } catch (error) {
        return res.status(500).json({error: error})
    }
}

export const Logout = async (req,res) => {
    try {
        res.clearCookie('refreshtoken')
        return res.json({msg: "Logged out"})
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}


export const refreshToken = async(req,res) => {
    try {
        const rf_token = req.cookies.refreshtoken;
        if(!rf_token) return res.status(400).json({msg: "Please Login or Register"})

        jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
            if(err) return res.status(400).json({msg: "Please Login or Register"})

            const accesstoken = createAccessToken({id: user.id})

            res.json(accesstoken)
        })

    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}

export const getUser = async(req,res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        if(!user) return res.status(400).json({msg: "User does not exist."})

        res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({msg: error.message})
    }
}