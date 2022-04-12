module.exports = (err, req, res) => {
  console.log('here');
  res
    .status(err.status || 500)
    .json({
      status: err.status || 500,
      message: err.status ? err.message : 'Internal Server Error',
    });
};
