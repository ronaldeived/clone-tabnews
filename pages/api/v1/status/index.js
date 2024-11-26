function index(req, res) {
    return res.status(200).json({
        status: "Everything is fine",
    });
}

export default index;
