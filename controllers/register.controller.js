const { Register } = require("../models/registration.model");

const getAllRegister = async (req, res) => {
  try {
    const register = await Register.findAll();

    res.status(200).json({
      status: "success",
      data: {
        register,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegister = async (req, res) => {
  try {
    const { id } = req.params;
    const register = await Register.findOne({ where: { id } });

    if (!register) {
      return res.status(404).json({
        status: "error",
        message: "Register not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        register,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const createRegister = async (req, res) => {
  try {
    const { entranceTime, exitTime, status } = req.body;
    const newRegister = await Register.create({
      entranceTime,
      exitTime,
      status,
    });

    res.status(201).json({
      status: "success",
      data: {
        newRegister,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const editRegister = async (req, res) => {
  try{
    const { id } = req.params
    const {entranceTime, exitTime} = req.body;
    const register = await Register.findOne({where: {id}})

    if(!register){
      return res.status(404).json({
        status:"error",
        message: "Register not exist"
      })
    }

    await register.update({entranceTime, exitTime}, {where: {id}});

    res.status(204).json({
      status:"succes",
      data:{ register }
    })
  }
  catch(error){
    console.log(error)
  }
};



const deleteRegister = async (req, res) => {
  try{
    const { id } = req.params
    const register = await Register.findOne({where: { id }})

    if(!register){
      return res.status(404).json({
        status:"error",
        message: "Register not exist"
      })
    };

    await register.update({status:"inactive"}, {where: {id}})

    res.status(200).json({
      status:"success",
      message:"",
    })
  }
  catch(error){
    console.log(error)
  }
};

module.exports = {
  getAllRegister,
  getRegister,
  createRegister,
  editRegister,
  deleteRegister,
};
