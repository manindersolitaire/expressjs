export const usernameController =  (req,res)=>{
    const username =  req.params.username
    res.send(`Welcome ${username}`)
}

export const searchController =  (req,res)=>{
    const keyword =  req.query.keyword
    res.send(`Seaching for ${keyword}`)
}

export const userLogin =  (req,res)=>{
    res.send('Login part running')
}
export const userSignup =  (req,res)=>{
    res.send('Signup part running')
}