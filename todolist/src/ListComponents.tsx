import React from "react";

const ListItem = (props: { content: string }) => {
  return (
    <li className="m-4 p-2 bg-slate-300 rounded drop-shadow-lg outline outline-slate-400 ">
      <textarea name="readTodo " cols={20} rows={5} disabled value={props.content}></textarea>
    </li>
  );
};

const List = () => {
  const todo: string[] = ["First todo", "Second todo", "Third todo"];
  const content: any[] = [];

  todo.forEach((item, i) => {
    content.push(<ListItem content={item} key={i} />);
  });
  return <ul className="m-3 p-2 bg-yellow-400 flex flex-row flex-auto">{content}</ul>;
};

export default List;
