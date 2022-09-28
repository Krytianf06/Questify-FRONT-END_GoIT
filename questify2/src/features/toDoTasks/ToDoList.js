import { React, useEffect } from "react";
import { useSelector } from "react-redux";
import ToDoTask from "./ToDoTask";
import ToDoForm from "./ToDoForm";
import ToDoEditedTask from "./ToDoEditedTask";
import ToDoCompleted from "./ToDoCompleted";

import styles from "./ToDoList.module.css";


import { formattedToday, formattedTomorrow } from "../../utils/date";


const TodoList = () => {
  const cards = useSelector((state) => state.toDos.cards);
  const editedCard = useSelector((state) => state.toDos.editedCardId);

  useEffect(() => {
    // eslint-disable-next-line
  }, [cards]);

  const renderedListItems = cards.map((card) => {
    return editedCard === card._id ? (
      <ToDoEditedTask
        id={card._id}
        key={card._id}
        difficulty={card.difficulty}
        title={card.title}
        date={card.date}
        time={card.time}
        category={card.category}
      />
    ) : card.status === 'Complete' ? (
      <ToDoCompleted id={card._id} key={card._id} title={card.title} />
    ) : (
      <ToDoTask
        id={card._id}
        key={card._id}
        difficulty={card.difficulty}
        title={card.title}
        date={card.date}
        time={card.time}
        category={card.category}
      />
    );
  });
  const questsToday = renderedListItems.filter(
    (quest) => quest.props.date === formattedToday
  );
  const questsTomorrow = renderedListItems.filter(
    (quest) => quest.props.date === formattedTomorrow
  );
  const questsOther = renderedListItems.filter(
    (quest) =>
      quest.props.date != formattedToday &&
      quest.props.date != formattedTomorrow
  );
  const formStatus = useSelector((state) => state.toDos.isFormOpen);

  // return <ul className={styles.CardList}>{renderedListItems}</ul>;
  return (
    <div>
      {" "}
      <div>{formStatus && <ToDoForm />}</div>
      {cards.length > 0 ? (
        <div>
          {questsToday.length > 0 && (
            <div>
              <p>Today</p>

              <ul>{questsToday}</ul>
            </div>
          )}
          {questsTomorrow.length > 0 && (
            <div>
              <p>Tomorrow</p>
              <ul> {questsTomorrow}</ul>
            </div>
          )}
          {questsOther.length > 0 && (
            <div>
              <p>Next days</p>
              <ul>{questsOther}</ul>
            </div>
          )}
        </div>
      ) : (
        <div>
          {!formStatus && (
            <p className={styles.info}>You don't have any added quests yet!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default TodoList;
