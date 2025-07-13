import Button from "../Button/Button";
import styles from "./Contact.module.css";
const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="SUPPORT CHAT" />
          <Button text="Call Support" />
        </div>
        <Button isOutline={true} text="Email Form" />

        <form action="">
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Textarea</label>
            <textarea name="text" rows={5} />
          </div>

          <div className="flex justify-end">
            <Button text="Submit Button" />
          </div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="./src/assets/box2-3.jpg " width={460} height={460} alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
