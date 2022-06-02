import classes from "./Background.module.css";

const Background: React.FC = () => (
  <div className={classes.container}>
    <div className={classes.background}>
      <div className={classes.pitchDesign}>
        <div className={classes.homeBox}>
          <div className={classes.goal} />
          <div className={classes.pkBox} />
        </div>
        <div className={classes.center}>
          <div className={classes.line} />
          <div className={classes.circle} />
        </div>
        <div className={classes.awayBox}>
          <div className={classes.goal} />
          <div className={classes.pkBox} />
        </div>
      </div>
    </div>
  </div>
);

export default Background;
