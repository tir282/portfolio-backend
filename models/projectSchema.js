import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    title: String,
    description: String,
    challengeAndSolution: String,
    gitRepoLink: String,
    projectLink: String,
    technologies: String,
    stack: String,
    deployed: String,
    features: [
        {
            icon: String,
            title: String,
            description: String,
        },
    ],
    impactStats: [
        {
            value: String,
            label: String,
        },
    ],
    projectBanner: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
});

export const Project = mongoose.model("Project", projectSchema);
