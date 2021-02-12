const controller = {
    register : (req,res) => { 
        return res.render ("userRegisterForm"); //Renderiza una vista
    },

    processRegister : (req,res) => { 
        return res.send ("Viniste por POST"); 
    },

    login : (req,res) => { 
        return res.render ("userLoginForm"); //Renderiza una vista
    },

    profile : (req,res) => { 
        return res.render ("userProfile"); //Renderiza una vista
    },
}

module.exports = controller;