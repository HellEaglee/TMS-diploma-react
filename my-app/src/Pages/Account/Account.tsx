import { FC } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import styles from "./Account.module.scss";
import Title from "../../Components/Title";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import IconButton from "../../Components/IconButton";
import { IconArrowLeft } from "../../Assets";
import Divider from "../../Components/Divider";

const Account: FC = () => {
  const navigate = useNavigate();

  const onStepBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className={classNames(styles.accountContainer)}>
      <div className={classNames(styles.accountWrapper)}>
        <IconButton icon={IconArrowLeft} onClick={onStepBackHandler} />
        <Title text="ACCOUNT" />
        <h2>PROFILE</h2>
        <div className={classNames(styles.profileInfoWrapper)}>
          <div>
            <p>Name</p>
            <Input
              type="text"
              onChange={() => {}}
              placeholder="Your name"
            ></Input>
          </div>
          <div>
            <p>Email</p>
            <Input
              type="text"
              onChange={() => {}}
              placeholder="Your email"
            ></Input>
          </div>
        </div>

        <div>
          <h2>PASSWORD</h2>

          <p>Password</p>
          <Input
            type="password"
            onChange={() => {}}
            placeholder="Your password"
          ></Input>

          <div className={classNames(styles.newPassWrapper)}>
            <div>
              <p>New password</p>
              <Input
                type="password"
                onChange={() => {}}
                placeholder="New password"
              ></Input>
            </div>
            <div>
              <p>Confirm new password</p>
              <Input
                type="password"
                onChange={() => {}}
                placeholder="Confirm new password"
              ></Input>
            </div>
          </div>
        </div>

        <Divider />
        <div className={classNames(styles.buttonsWrapper)}>
          <Button
            title="SAVE CHANGES"
            onClick={() => {}}
            className={classNames(styles.accountButtons)}
          />
          <Button
            title="CANCEL"
            onClick={() => {}}
            className={classNames(styles.accountButtons)}
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
