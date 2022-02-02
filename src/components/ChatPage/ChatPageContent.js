import classes from "./ChatPageContent.module.css";
import ChatBody from "./ChatBody";
const ChatPageContent = () => {
  return (
    <div className={classes.root}>
      <section className={classes.main}>
        <ChatBody />
      </section>
    </div>
  );
};

export default ChatPageContent;
