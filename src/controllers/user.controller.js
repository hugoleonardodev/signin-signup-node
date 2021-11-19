exports.allAccess = (req, res) => {
    res.status(200).json({ data: 'Public Content.' })
}

exports.userBoard = (req, res) => {
    res.status(200).json({ data: 'User Content.' })
}

exports.adminBoard = (req, res) => {
    res.status(200).json({ data: 'Admin Content.' })
}

exports.moderatorBoard = (req, res) => {
    res.status(200).json({ data: 'Moderator Content.' })
}
