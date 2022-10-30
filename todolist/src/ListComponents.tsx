import React, { useMemo } from "react";

const ListItem = (props: { content: { textValue: string; dateValue: string }; id: number; delete: Function }) => {
  return (
    <>
      <li className="m-4 p-2 bg-slate-300 rounded drop-shadow-lg outline outline-slate-400 todoListItem">
        <textarea name="readTodo " cols={20} rows={5} disabled value={props.content.textValue}></textarea>
        <input type="date" name="readTodoDate" id="" disabled value={props.content.dateValue} />
        <form
          action=""
          method="GET"
          onSubmit={(event) => {
            event.preventDefault();
            event.stopPropagation();

            props.delete(props.id);
          }}
        >
          <button className="rounded-full bg-slate-100 outline outline-white" type="submit">
            Delete
          </button>
        </form>
      </li>
    </>
  );
};

const List = (props: { content: Array<object>; handleDelete: Function }) => {
  const content: any[] = [];
  const memoList = useMemo(() => props.content, [props.content]);
  const listItems = memoList;
  listItems.forEach((item: any, i) => {
    content.push(<ListItem content={item} id={i} key={i} delete={props.handleDelete} />);
  });
  return <ul className="m-3 p-2 bg-yellow-400 flex flex-row flex-auto">{content}</ul>;
};

export default List;
