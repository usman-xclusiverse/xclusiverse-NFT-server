const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.updateOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        if (!doc) {
            return next(new AppError(404, 'fail', 'No document found with that id'), req, res, next);
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
    }
};

exports.createOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                doc
            }
        });

    } catch (error) {
        next(error);
    }
};

exports.getOne = Model => async (req, res, next) => {
    try {
        const doc = await Model.findById(req.params.id);

        if (!doc) {
            return next(new AppError(404, 'fail', 'No document found with that id'), req, res, next);
        }

        res.status(200).json({
            status: 'success',
            data: {
                doc
            }
        });
    } catch (error) {
        next(error);
    }
};

exports.getAll = Model => async (req, res, next) => {
    try {
        const features = new APIFeatures(Model.find(), req.query)
            .sort()
            .paginate();
        const count = await Model.countDocuments({})
        const doc = await features.query;
        res.status(200).json({
            status: 'success',
            results: doc.length,
            total:count,
            data: {
                data: doc
            }
        });

    } catch (error) {
        next(error);
    }

};


exports.getByCatagories = Model => async (req, res, next) => {
    try {
        const features = new APIFeatures(Model.find({
            saleStatus: false,
            categories:req.query.categories
        }), req.query)
            .sort()
            .paginate();

        const doc = await features.query;
        const count = await Model.countDocuments({
            saleStatus: false,
            categories:req.query.categories
        })
        res.status(200).json({
            status: 'success',
            results: doc.length,
            total:count,
            data: {
                data: doc
            }
        });

    } catch (error) {
        next(error);
    }

};