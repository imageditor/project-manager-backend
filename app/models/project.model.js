module.exports = mongoose => {

    let schema = mongoose.Schema(
        {
            title: String,
            description: String
        },
        { timestamps: true }
    );

    // override toJSON method:
    // mapping _id field as id
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Project = mongoose.model("project", schema);

    return Project;
};