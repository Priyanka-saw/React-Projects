import Button from "../Button/Button";
import styles from "./Contact.module.css";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className="{styles.contact_form}">
        <div className={styles.top_btn}>
          <Button text="SUPPORT CHAT" />
          <Button text="Call Support" />
        </div>
        <Button isOutline={true} text="Email Form" />

        <form action="">
            <label htmlFor="name">Name</label>
        </form>
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
