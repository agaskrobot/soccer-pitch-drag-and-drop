import React from "react";
import { ReactComponent as ProfileSvg } from "../../../assets/svgs/profile.svg";
import { Player } from "../../../utility/types";

import classes from "./PlayerCard.module.css";

const PlayerCard: React.FC<{ player: Player }> = ({ player }) => (
  <div className={classes.container}>
    <div className={classes.jerseyWrapper}>
      <img
        src={
          player.isGk
            ? "/assets/images/gk-jersey.png"
            : "/assets/images/player-jersey.png"
        }
        alt="jersey"
        className={classes.jersey}
      />
      <div className={classes.jerseyNumber}>{player.jerseyNumber}</div>
    </div>
    <div className={classes.playerInfo}>
      <div className={classes.playerPosStats}>
        <div className={classes.circle}></div>
        <div className={classes.position}>{player.playerPosition.position}</div>
      </div>
      <div className={classes.playerPersonalInfo}>
        <ProfileSvg className={classes.profile} />
        <div className={classes.playerName}>{player.name.firstName}</div>
      </div>
    </div>
  </div>
);

export default PlayerCard;
