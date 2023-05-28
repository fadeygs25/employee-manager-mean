const Task = require("../models/taskModel");



exports.createTask = async (req, res, next) => {

    const {
        name,
        description,
        projectId,
        priority,
        status
    } = req.body;
    const userId = req.user._id
    try {
        const task = await Task.create({
            name,
            description,
            projectId,
            userId,
            priority,
            status
        });
        res.status(201).json({
            success: true,
            task
        })

    } catch (error) {
        console.log(error);
        next(error);

    }

}

exports.displayTask = async (req, res, next) => {


    try {
        const tasks = await Task.find();
        res.json(tasks)

    } catch (error) {
        console.log(error);
        next(error);

    }

}

exports.countTasks = async (req, res, next) => {


    try {
        const countTasks = await Task.countDocuments();
        res.status(200).json({ count: countTasks });


    } catch (error) {
        console.log(error);
        next(error);

    }

}

exports.findTask = async (req, res, next) => {

    try {
        const task = await Task.findById(req.params.id);
        if (task) {
            res.send(task);
        } else {
            res.status(404).send({ message: "task not found!" });
        }
    } catch (error) {
        console.log(error);
        next(error);

    }

}

exports.taskByProduct = async (req, res, next) => {

    try {
        const task = await Task.find({ projectId: req.params.id });
        res.json(task)

    } catch (error) {
        console.log(error);
        next(error);

    }

}

exports.searchTask = async (req, res, next) => {

    try {
        const tasks = await Task.find({ name: req.params.id });
        console.log(tasks);
        res.status(201).json({
            success: true,
            tasks
        })
    } catch (error) {
        console.log(error);
        next(error);

    }

}

// Update task image in Cloudinary and task data in MongoDB.
exports.updateTask = async (req, res, next) => {
    try {
        //current task
        const currentTask = await Task.findById(req.params.id);
        const form = req.body.form
        //build the data object
        const data = {
            name: form.name,
            description: form.description,
            price: form.price,
            image: form.image
        }
        //modify image conditionnally
        if (req.body.image !== '') {
            const ImgId = currenttask.image_id;
            if (ImgId) {
                await cloudinary.uploader.destroy(ImgId);
            }

            const newImage = await cloudinary.uploader.upload(req.body.image, {
                folder: "tasks",
                width: 1000,
                crop: "scale"
            });

            data.image = newImage.secure_url;
            data.image_id = newImage.public_id
        }

        const taskUpdate = await task.findOneAndUpdate(req.params.id, data, { new: true })

        res.status(200).json({
            success: true,
            taskUpdate
        })


    } catch (error) {
        console.log(error);
        next(error);
    }

}



// delete task and task image in cloudinary
exports.deleteTask = async (req, res, next) => {

    try {
        const task = await task.findById(req.params.id);
        //retrieve current image ID
        const rmTask = await task.findByIdAndDelete(req.params.id);

        res.status(201).json({
            success: true,
            message: " task deleted",

        })

    } catch (error) {
        console.log(error);
        next(error);

    }

}





// display category
exports.taskCategory = async (req, res, next) => {

    try {
        const cat = await Task.find().populate('category', 'name').distinct('category');
        res.status(201).json({
            success: true,
            cat
        })

    } catch (error) {
        console.log(error);
        next(error);
    }

}




