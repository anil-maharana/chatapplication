exports.twitter = (req, res) => {
  const io = req.app.get('io')
  const user = { 
    name: req.user.username,
    photo: req.user.photos[0].value.replace(/_normal/, '')
  }
  io.in(req.session.socketId).emit('twitter', user)
  res.end()
}

exports.google = (req, res) => {
  const io = req.app.get('io')
  const user = { 
    name: req.user.displayName,
    photo: req.user.photos[0].value.replace(/sz=50/gi, 'sz=250')
  }
  io.in(req.session.socketId).emit('google', user)
  res.end()
}

