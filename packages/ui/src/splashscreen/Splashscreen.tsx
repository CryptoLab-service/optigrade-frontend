import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import x97604931 from "./9760493-1.png";
import x97604933 from "./9760493-3.png";
import { HomeIndicator } from "./HomeIndicator";

import styles from "./Splashscreen.module.css";
import "../../styles/styleguide.css";

export const Splashscreen = (): JSX.Element => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleTap = () => navigate("/home");

  return (
    <div className={styles.splashscreen} onClick={handleTap}>
      <div className={styles["overlap-group-wrapper"]}>
        <div className={styles["overlap-group"]}>
          <img className={styles.element} alt="Element Layer 1" src={x97604933} />
          <img className={styles.img} alt="Element Layer 2" src={x97604931} />

          <div className={styles.group}>
            <div className={styles.logo}>
              <div className={styles["group-2"]} />
            </div>
            <div className={styles["text-wrapper"]}>OptiGrade</div>
          </div>

          <HomeIndicator
            className={styles["home-indicator-instance"]}
            device="i-phone"
            homeIndicatorClassName={styles["design-component-instance-node"]}
            orientation="portrait"
          />
        </div>
      </div>
    </div>
  );
};
