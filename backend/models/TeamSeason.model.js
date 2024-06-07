import mongoose from "mongoose";

const teamSeasonSchema = new mongoose.Schema({
    ID_season: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Season"
    },
    ID_team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team"
    }
});

const TeamSeason = mongoose.model("TeamSeason", teamSeasonSchema);
export default TeamSeason;