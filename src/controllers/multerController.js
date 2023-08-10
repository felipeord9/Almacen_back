
const uploadFile = async (req, res, next) => {
  try {
    res.status(200).json({
      status: 'OK',
      data: 'Archivo Subido Correctamente'
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  uploadFile
}