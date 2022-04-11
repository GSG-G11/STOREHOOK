module.exports = (err, req, res) => {
  res.status(err.status || 500).json({
    message: err.status ? err.message : 'Internal Server Error',
    status: err.status || 500,
  });
};
