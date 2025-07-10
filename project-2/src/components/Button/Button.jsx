import styles from"./Button.module.css";
const Button = (props) => {

    const {isOutline, text} = props;

  return (
    <button className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {text}
        </button>
  );
};

export default Button;